let voicesLoaded = false;

function loadVoices() {
  return new Promise((resolve) => {
    const voices = speechSynthesis.getVoices();

    if (voices.length > 0) {
      voicesLoaded = true;
      resolve(voices);
      return;
    }

    speechSynthesis.onvoiceschanged = () => {
      voicesLoaded = true;
      resolve(speechSynthesis.getVoices());
    };
  });
}

async function speakWithLang(text, bcp47, options = {}) {
  if (!text) return;

  if (!voicesLoaded) {
    await loadVoices();
  }

  const {
    rate = 0.9,
    pitch = 1,
    cancelBeforeSpeak = true,
    onEnd,
    onError,
  } = options;

  if (cancelBeforeSpeak) {
    speechSynthesis.cancel();
  }

  const cleanedText = text
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const utterance = new SpeechSynthesisUtterance(cleanedText);
  utterance.lang = bcp47;
  utterance.rate = rate;
  utterance.pitch = pitch;

  const voices = speechSynthesis.getVoices();
  const matchedVoice = voices.find((v) => v.lang === bcp47);

  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  if (onEnd) utterance.onend = onEnd;
  if (onError) utterance.onerror = onError;

  speechSynthesis.speak(utterance);
}

/** Speak text in the given language (lang code: "ja", "en", etc.). */
export async function speakText(text, lang = "ja", options = {}) {
  const bcp47Map = { ja: "ja-JP", en: "en-US", ko: "ko-KR", zh: "zh-CN", fr: "fr-FR", de: "de-DE", es: "es-ES" };
  await speakWithLang(text, bcp47Map[lang] || "en-US", options);
}

/** Backward-compatible alias. */
export async function speakJapaneseText(text, options = {}) {
  await speakWithLang(text, "ja-JP", options);
}

function getSpeechRecognitionConstructor() {
  if (typeof window === "undefined") return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

export function isSpeechRecognitionSupported() {
  return Boolean(getSpeechRecognitionConstructor());
}

function recognitionErrorMessage(error) {
  const messages = {
    "not-allowed": "Microphone access is blocked. Allow microphone access for this site in your browser settings, then try again.",
    "service-not-allowed": "Speech recognition is blocked by the browser. Try Chrome on Android or another browser that supports speech recognition.",
    "audio-capture": "No microphone was found. Check that your device microphone is available and not being used by another app.",
    "no-speech": "No speech was detected. Move closer to the microphone and try again.",
    network: "Speech recognition needs an internet connection. Check your connection and try again.",
    aborted: "Microphone listening was interrupted. Tap the microphone and try again.",
  };

  return messages[error] || `Speech recognition failed (${error}). Check microphone permissions and try again.`;
}

function recognizeWithLang(bcp47) {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && !window.isSecureContext) {
      reject(new Error("Microphone access requires a secure HTTPS connection. Open the deployed HTTPS site and try again."));
      return;
    }

    const SpeechRecognition = getSpeechRecognitionConstructor();

    if (!SpeechRecognition) {
      reject(new Error("Speech recognition is not supported by this browser. On mobile, try Chrome on Android or a browser with Web Speech recognition support."));
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = bcp47;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    let settled = false;
    let transcript = "";

    const fail = (error) => {
      if (settled) return;
      settled = true;
      reject(error);
    };

    recognition.onresult = (event) => {
      const result = event.results?.[event.resultIndex] || event.results?.[0];
      transcript = result?.[0]?.transcript?.trim() || "";
    };

    recognition.onerror = (event) => {
      fail(new Error(recognitionErrorMessage(event.error)));
    };

    recognition.onend = () => {
      if (settled) return;
      if (transcript) {
        settled = true;
        resolve(transcript);
      } else {
        fail(new Error(recognitionErrorMessage("no-speech")));
      }
    };

    try {
      // Must be called directly from the microphone button gesture on mobile browsers.
      recognition.start();
    } catch (error) {
      fail(new Error(recognitionErrorMessage(error.name === "NotAllowedError" ? "not-allowed" : error.message)));
    }
  });
}

/** Recognize speech in the given language (lang code: "ja", "en", etc.). */
export function recognizeSpeech(lang = "ja") {
  const bcp47Map = { ja: "ja-JP", en: "en-US", ko: "ko-KR", zh: "zh-CN", fr: "fr-FR", de: "de-DE", es: "es-ES" };
  return recognizeWithLang(bcp47Map[lang] || "en-US");
}

/** Backward-compatible alias. */
export function recognizeJapaneseSpeech() {
  return recognizeWithLang("ja-JP");
}