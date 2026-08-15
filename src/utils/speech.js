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
    console.log(
      "SpeechRecognition",
      window.SpeechRecognition
    );

    console.log(
      "webkitSpeechRecognition",
      window.webkitSpeechRecognition
    );

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      reject(
        new Error(
          "SpeechRecognition NOT supported"
        )
      );
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "ja-JP";

    recognition.onstart = () => {
      console.log("onstart");
    };

    recognition.onaudiostart = () => {
      console.log("onaudiostart");
    };

    recognition.onspeechstart = () => {
      console.log("onspeechstart");
    };

    recognition.onresult = (event) => {
      console.log(
        "onresult",
        event.results[0][0].transcript
      );

      resolve(
        event.results[0][0].transcript
      );
    };

    recognition.onerror = (event) => {
      console.error(event);
      reject(
        new Error(event.error)
      );
    };

    recognition.start();
  });
}