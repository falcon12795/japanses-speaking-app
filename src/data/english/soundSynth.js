// Keyframe specs used by utils/phonemeSynth.js to synthesize each isolated English sound.
// Each keyframe is [time in seconds, overrides]; values carry forward from the previous keyframe.
//   f: [F1, F2, F3] formant frequencies (Hz)   av: voicing   ah: aspiration (noise through formants)
//   af: frication noise   ff / fbw: frication centre / bandwidth (Hz)   lp: low-pass cutoff (Hz)
//   f0: pitch multiplier   level: loudness multiplier for the whole sound

const SCHWA = [500, 1400, 2500];

const vowel = (f, d = 0.7, level = 1) => ({
  level,
  keys: [
    [0, { f, av: 0 }],
    [0.06, { av: 1 }],
    [d - 0.1, { av: 1 }],
    [d, { av: 0 }],
  ],
});

const diphthong = (from, to, d = 0.8) => ({
  keys: [
    [0, { f: from, av: 0 }],
    [0.06, { av: 1 }],
    [d * 0.3, { f: from }],
    [d * 0.85, { f: to }],
    [d, { av: 0 }],
  ],
});

const sustained = (f, { d = 0.65, av = 1, lp = 8000, level = 1 } = {}) => ({
  level,
  keys: [
    [0, { f, av: 0, lp }],
    [0.07, { av }],
    [d - 0.1, { av }],
    [d, { av: 0 }],
  ],
});

const glide = (from, to, d = 0.55) => ({
  keys: [
    [0, { f: from, av: 0 }],
    [0.05, { av: 1 }],
    [0.18, { f: from }],
    [0.4, { f: to }],
    [d - 0.1, { av: 0.9 }],
    [d, { av: 0 }],
  ],
});

const fricative = ({ ff, fbw, voiced = false, d = 0.65, level = 1, af = 1 }) => ({
  level,
  keys: [
    [0, { f: voiced ? [250, 1400, 2400] : SCHWA, av: 0, af: 0, ff, fbw, lp: 8000 }],
    [0.06, { af, av: voiced ? 0.45 : 0, lp: voiced ? 1500 : 8000 }],
    [d - 0.1, { af, av: voiced ? 0.45 : 0 }],
    [d, { af: 0, av: 0 }],
  ],
});

// Plosive followed by a short schwa ("puh", "buh"...), the usual way to demonstrate a stop.
const stop = ({ burstFf, burstFbw, locus, voiced = false, level = 1 }) => ({
  level,
  keys: [
    [0, { f: locus, av: voiced ? 0.25 : 0, lp: voiced ? 600 : 8000, af: 0, ah: 0, ff: burstFf, fbw: burstFbw }],
    [0.09, { av: voiced ? 0.25 : 0 }],
    [0.095, { af: 1.6, av: voiced ? 0.25 : 0, lp: 8000 }],
    [0.12, { af: 0.25, ah: voiced ? 0 : 0.8 }],
    [0.135, { af: 0, f: locus, av: voiced ? 1 : 0, lp: 8000 }],
    [0.19, { f: SCHWA, ah: voiced ? 0 : 0.8 }],
    [0.3, { av: voiced ? 1 : 0.9, ah: 0 }],
    [0.45, { av: 0 }],
  ],
});

const affricate = ({ ff, fbw, voiced = false, level = 1 }) => ({
  level,
  keys: [
    [0, { f: voiced ? [250, 1400, 2400] : SCHWA, av: voiced ? 0.25 : 0, lp: voiced ? 600 : 8000, af: 0, ah: 0, ff: 4000, fbw: 2500 }],
    [0.09, { av: voiced ? 0.25 : 0 }],
    [0.095, { af: 1, lp: 8000 }],
    [0.105, { ff, fbw }],
    [0.27, { af: 0.8, av: voiced ? 0.5 : 0 }],
    [0.3, { af: 0, f: SCHWA, av: voiced ? 1 : 0, ah: voiced ? 0 : 0.7 }],
    [0.45, { av: voiced ? 1 : 0.9, ah: 0 }],
    [0.6, { av: 0 }],
  ],
});

export const SOUND_SPECS = {
  // Vowels
  "i-long": vowel([270, 2290, 3010]),
  "i-short": vowel([390, 1990, 2550], 0.55),
  e: vowel([530, 1840, 2480], 0.6),
  ae: vowel([660, 1720, 2410], 0.7),
  "a-long": vowel([730, 1090, 2440]),
  "o-long": vowel([570, 840, 2410]),
  "u-short": vowel([440, 1020, 2240], 0.55),
  "u-long": vowel([300, 870, 2240]),
  uh: vowel([640, 1190, 2390], 0.6),
  er: vowel([490, 1350, 1690]),
  schwa: vowel(SCHWA, 0.45, 0.8),

  // Diphthongs
  ei: diphthong([530, 1840, 2480], [390, 1990, 2550]),
  ai: diphthong([730, 1090, 2440], [390, 1990, 2550]),
  oi: diphthong([570, 840, 2410], [390, 1990, 2550]),
  au: diphthong([730, 1090, 2440], [440, 1020, 2240]),
  ou: diphthong([500, 900, 2400], [440, 1020, 2240]),
  ir: diphthong([390, 1990, 2550], [490, 1350, 1690]),
  "er-air": diphthong([530, 1840, 2480], [490, 1350, 1690]),
  ur: diphthong([440, 1020, 2240], [490, 1350, 1690]),

  // Stops
  p: stop({ burstFf: 1200, burstFbw: 1800, locus: [350, 900, 2300] }),
  b: stop({ burstFf: 1000, burstFbw: 1800, locus: [300, 900, 2300], voiced: true }),
  t: stop({ burstFf: 4500, burstFbw: 2500, locus: [400, 1800, 2700] }),
  d: stop({ burstFf: 4000, burstFbw: 2500, locus: [300, 1800, 2700], voiced: true }),
  k: stop({ burstFf: 2200, burstFbw: 1200, locus: [350, 1800, 2200] }),
  g: stop({ burstFf: 2000, burstFbw: 1200, locus: [300, 1700, 2200], voiced: true }),

  // Fricatives
  f: fricative({ ff: 5000, fbw: 7000, af: 0.7 }),
  v: fricative({ ff: 5000, fbw: 7000, voiced: true, af: 0.6 }),
  "th-voiceless": fricative({ ff: 5500, fbw: 8000, af: 0.55 }),
  "th-voiced": fricative({ ff: 5500, fbw: 8000, voiced: true, af: 0.5 }),
  s: fricative({ ff: 7000, fbw: 2500 }),
  z: fricative({ ff: 7000, fbw: 2500, voiced: true }),
  sh: fricative({ ff: 3000, fbw: 1400 }),
  zh: fricative({ ff: 3000, fbw: 1400, voiced: true }),
  h: {
    keys: [
      [0, { f: SCHWA, av: 0, ah: 0 }],
      [0.05, { ah: 1 }],
      [0.35, { ah: 1 }],
      [0.45, { ah: 0 }],
    ],
  },

  // Affricates
  ch: affricate({ ff: 3000, fbw: 1400 }),
  j: affricate({ ff: 3000, fbw: 1400, voiced: true }),

  // Nasals
  m: sustained([250, 1100, 2200], { lp: 1100, level: 1.1 }),
  n: sustained([250, 1600, 2500], { lp: 1500, level: 1.1 }),
  ng: sustained([250, 1300, 2300], { lp: 1300, level: 1.1 }),

  // Approximants
  l: sustained([360, 1250, 2800], { lp: 3500 }),
  r: sustained([420, 1300, 1600]),
  w: glide([290, 650, 2200], [500, 1200, 2500]),
  y: glide([270, 2250, 3000], [500, 1700, 2500]),
};
