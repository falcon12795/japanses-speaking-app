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

export async function speakJapaneseText(
  text,
  options = {}
) {
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

  const utterance =
    new SpeechSynthesisUtterance(
      cleanedText
    );

  utterance.lang = "ja-JP";
  utterance.rate = rate;
  utterance.pitch = pitch;

  const voices =
    speechSynthesis.getVoices();

  const japaneseVoice =
    voices.find(
      (voice) => voice.lang === "ja-JP"
    );

  if (japaneseVoice) {
    utterance.voice = japaneseVoice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
  }

  if (onError) {
    utterance.onerror = onError;
  }

  speechSynthesis.speak(utterance);
}

export function recognizeJapaneseSpeech() {
  return new Promise((resolve, reject) => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      reject(
        new Error(
          "Speech recognition is not supported. Try Chrome or Edge."
        )
      );
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "ja-JP";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      resolve(
        event.results[0][0].transcript
      );
    };

    recognition.onerror = (event) => {
      reject(new Error(event.error));
    };

    recognition.start();
  });
}