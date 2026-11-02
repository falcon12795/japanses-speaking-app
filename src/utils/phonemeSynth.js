import { SOUND_SPECS } from "../data/english/soundSynth";

// Klatt-style formant synthesizer: an impulse-train glottal source (or noise) goes through
// a cascade of resonators; frication noise has its own resonator. This lets us play an
// isolated phoneme, which browser text-to-speech voices cannot do.

export const SAMPLE_RATE = 22050;

const DEFAULT_STATE = { f: [500, 1400, 2500], av: 0, ah: 0, af: 0, ff: 3000, fbw: 1500, lp: 8000, f0: 1 };
const FORMANT_BANDWIDTHS = [80, 120, 180];
const UPPER_FORMANTS = [[3500, 250], [4500, 300]];
const BASE_PITCH = 125;
const ASPIRATION_GAIN = 1.8;

const TARGET_RMS = 0.12;
const PEAK_LIMIT = 0.9;

function buildTrack(keys) {
  let state = DEFAULT_STATE;

  return keys.map(([t, overrides]) => {
    state = { ...state, ...overrides };
    return { t, state };
  });
}

function stateAt(track, time) {
  if (time <= track[0].t) return track[0].state;

  for (let i = 1; i < track.length; i += 1) {
    const next = track[i];

    if (time <= next.t) {
      const prev = track[i - 1];
      const span = next.t - prev.t;
      const ratio = span > 0 ? (time - prev.t) / span : 1;
      const mix = (a, b) => a + (b - a) * ratio;

      return {
        f: prev.state.f.map((value, index) => mix(value, next.state.f[index])),
        av: mix(prev.state.av, next.state.av),
        ah: mix(prev.state.ah, next.state.ah),
        af: mix(prev.state.af, next.state.af),
        ff: mix(prev.state.ff, next.state.ff),
        fbw: mix(prev.state.fbw, next.state.fbw),
        lp: mix(prev.state.lp, next.state.lp),
        f0: mix(prev.state.f0, next.state.f0),
      };
    }
  }

  return track[track.length - 1].state;
}

function createResonator() {
  return { a: 1, b: 0, c: 0, y1: 0, y2: 0 };
}

function setResonator(resonator, frequency, bandwidth, sampleRate) {
  const f = Math.min(frequency, sampleRate * 0.45);
  const t = 1 / sampleRate;

  resonator.c = -Math.exp(-2 * Math.PI * bandwidth * t);
  resonator.b = 2 * Math.exp(-Math.PI * bandwidth * t) * Math.cos(2 * Math.PI * f * t);
  resonator.a = 1 - resonator.b - resonator.c;
}

function runResonator(resonator, x) {
  const y = resonator.a * x + resonator.b * resonator.y1 + resonator.c * resonator.y2;

  resonator.y2 = resonator.y1;
  resonator.y1 = y;

  return y;
}

// Gain that gives the differentiated white noise passing through the resonator unit RMS,
// so frication level does not depend on its centre frequency or bandwidth.
function fricationGain(resonator) {
  const steps = 128;
  let power = 0;

  for (let i = 1; i < steps; i += 1) {
    const w = (Math.PI * i) / steps;
    const re = 1 - resonator.b * Math.cos(w) - resonator.c * Math.cos(2 * w);
    const im = resonator.b * Math.sin(w) + resonator.c * Math.sin(2 * w);
    const response = (resonator.a * resonator.a) / (re * re + im * im);

    power += response * (2 - 2 * Math.cos(w));
  }

  const whiteNoiseRms = Math.sqrt(1 / 3);

  return 1 / (whiteNoiseRms * Math.sqrt(power / steps));
}

// Deterministic noise so a sound is identical every time it is played.
function createNoise() {
  let seed = 12345;

  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 2147483648 - 1;
  };
}

export function renderPhoneme(id, sampleRate = SAMPLE_RATE) {
  const spec = SOUND_SPECS[id];

  if (!spec) return null;

  const track = buildTrack(spec.keys);
  const duration = track[track.length - 1].t + 0.03;
  const length = Math.ceil(duration * sampleRate);
  const samples = new Float32Array(length);
  const noise = createNoise();

  const glottal = createResonator();
  setResonator(glottal, 0, 500, sampleRate);
  const formants = [...FORMANT_BANDWIDTHS, ...UPPER_FORMANTS.map(([, bw]) => bw)].map(createResonator);
  UPPER_FORMANTS.forEach(([frequency, bandwidth], index) => {
    setResonator(formants[3 + index], frequency, bandwidth, sampleRate);
  });
  const frication = createResonator();

  const CONTROL_INTERVAL = 32;
  let state = track[0].state;
  let phase = 0;
  let glottalPrev = 0;
  let noisePrev = 0;
  let lowpassed = 0;
  let lowpassAlpha = 1;
  let fricationScale = 1;

  for (let n = 0; n < length; n += 1) {
    const time = n / sampleRate;

    if (n % CONTROL_INTERVAL === 0) {
      state = stateAt(track, time);
      state.f.forEach((frequency, index) => {
        setResonator(formants[index], frequency, FORMANT_BANDWIDTHS[index], sampleRate);
      });
      setResonator(frication, state.ff, state.fbw, sampleRate);
      fricationScale = fricationGain(frication);
      lowpassAlpha = 1 - Math.exp((-2 * Math.PI * state.lp) / sampleRate);
    }

    const pitch = BASE_PITCH * state.f0 * (1 - (0.15 * time) / duration);
    phase += pitch / sampleRate;
    let impulse = 0;

    if (phase >= 1) {
      phase -= 1;
      impulse = 1;
    }

    const glottalFlow = runResonator(glottal, impulse * sampleRate * 0.02);
    const voiced = glottalFlow - glottalPrev;
    glottalPrev = glottalFlow;

    const white = noise();
    let excitation = state.av * voiced * 10 + state.ah * white * ASPIRATION_GAIN;

    for (let i = 0; i < formants.length; i += 1) {
      excitation = runResonator(formants[i], excitation);
    }

    lowpassed += lowpassAlpha * (excitation - lowpassed);

    const tilted = white - noisePrev;
    noisePrev = white;

    samples[n] = lowpassed + state.af * fricationScale * runResonator(frication, tilted);
  }

  return normalize(samples, spec.level || 1, sampleRate);
}

function normalize(samples, level, sampleRate) {
  let energy = 0;
  let peak = 0;

  for (let i = 0; i < samples.length; i += 1) {
    energy += samples[i] * samples[i];
    peak = Math.max(peak, Math.abs(samples[i]));
  }

  const rms = Math.sqrt(energy / samples.length) || 1;
  const gain = Math.min((TARGET_RMS * level) / rms, PEAK_LIMIT / (peak || 1));
  const fade = Math.floor(sampleRate * 0.008);

  for (let i = 0; i < samples.length; i += 1) {
    const edge = Math.min(i, samples.length - 1 - i);
    samples[i] *= gain * (edge < fade ? edge / fade : 1);
  }

  return samples;
}

let audioContext = null;
let currentSource = null;
const bufferCache = new Map();

export function isPhonemeSynthSupported() {
  return typeof window !== "undefined" && Boolean(window.AudioContext || window.webkitAudioContext);
}

/** Plays the isolated sound for a SOUND_SPECS id. Returns false when it cannot be played. */
export function playPhoneme(id) {
  if (!isPhonemeSynthSupported() || !SOUND_SPECS[id]) return false;

  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") audioContext.resume();
  if (typeof speechSynthesis !== "undefined") speechSynthesis.cancel();
  if (currentSource) {
    currentSource.onended = null;
    currentSource.stop();
  }

  let buffer = bufferCache.get(id);

  if (!buffer) {
    const samples = renderPhoneme(id);
    buffer = audioContext.createBuffer(1, samples.length, SAMPLE_RATE);
    buffer.copyToChannel(samples, 0);
    bufferCache.set(id, buffer);
  }

  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.onended = () => {
    if (currentSource === source) currentSource = null;
  };
  source.start();
  currentSource = source;

  return true;
}
