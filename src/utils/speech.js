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

function recognizeWithLang(bcp47) {
  return new Promise((resolve, reject) => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      reject(new Error("SpeechRecognition NOT supported"));
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = bcp47;

    recognition.onresult = (event) => {
      resolve(event.results[0][0].transcript);
    };

    recognition.onerror = (event) => {
      console.error(event);
      reject(new Error(event.error));
    };

    recognition.start();
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