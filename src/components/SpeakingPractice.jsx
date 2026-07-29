import { useMemo, useState } from "react";
import { VOCABULARY } from "../data/vocabulary";
import { speakJapaneseText, recognizeJapaneseSpeech } from "../utils/speech";
import { calculateSimpleSpeechScore } from "../utils/scoring";

export default function SpeakingPractice({ progress, onProgressChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [status, setStatus] = useState("Ready");

  const currentPhrase = VOCABULARY[currentIndex];

  const score = useMemo(() => {
    return calculateSimpleSpeechScore(transcript, currentPhrase.japanese);
  }, [transcript, currentPhrase]);

  const listen = () => {
    try {
      speakJapaneseText(currentPhrase.japanese);
      setStatus("Playing Japanese audio...");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const startPractice = async () => {
    try {
      setTranscript("");
      setStatus("Listening... speak Japanese now.");

      const result = await recognizeJapaneseSpeech();

      setTranscript(result);
      setStatus("Finished speaking practice.");

      onProgressChange({
        ...progress,
        speakingPractice: progress.speakingPractice + 1,
      });
    } catch (error) {
      setStatus(error.message);
    }
  };

  const nextPhrase = () => {
    setTranscript("");
    setStatus("Ready");
    setCurrentIndex((prev) => (prev + 1) % VOCABULARY.length);
  };

  return (
    <section className="panel">
      <h2>Speaking Practice</h2>

      <p className="label">Target phrase:</p>
      <h3 className="speaking-target">{currentPhrase.japanese}</h3>
      <p>{currentPhrase.romaji}</p>

      <div className="buttons">
        <button onClick={listen}>Listen</button>
        <button onClick={startPractice}>Speak</button>
        <button onClick={nextPhrase}>Next</button>
      </div>

      <p className="label">You said:</p>
      <p className="transcript">{transcript || "—"}</p>

      <p className="label">Score:</p>
      <div className="score-box">
        <span>{score}</span>/100
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${score}%` }} />
      </div>

      <p className="status">{status}</p>
    </section>
  );
}