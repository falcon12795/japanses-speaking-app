import { useState } from "react";
import { VOCABULARY } from "../data/vocabulary";
import { speakJapaneseText } from "../utils/speech";

export default function VocabularyFlashcard({ progress, onProgressChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [status, setStatus] = useState("Ready");

  const currentCard = VOCABULARY[currentIndex];

  const goNext = () => {
    setShowAnswer(false);
    setStatus("Ready");
    setCurrentIndex((prev) => (prev + 1) % VOCABULARY.length);
  };

  const handleListen = () => {
    try {
      speakJapaneseText(currentCard.japanese);
      setStatus("Playing Japanese audio...");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const markAsKnown = () => {
    onProgressChange({
      ...progress,
      vocabularyLearned: progress.vocabularyLearned + 1,
    });
    goNext();
  };

  const markAsReview = () => {
    onProgressChange({
      ...progress,
      vocabularyNeedReview: progress.vocabularyNeedReview + 1,
    });
    goNext();
  };

  return (
    <section className="card">
      <div className="card-top">
        <span className="level">{currentCard.level}</span>
        <span className="type">{currentCard.type}</span>
      </div>

      <h2 className="japanese">{currentCard.japanese}</h2>

      {currentCard.reading && (
        <p className="reading">{currentCard.reading}</p>
      )}

      {showAnswer ? (
        <div className="answer">
          <p>
            <strong>Romaji:</strong> {currentCard.romaji}
          </p>
          <p>
            <strong>English:</strong> {currentCard.english}
          </p>
          <p>
            <strong>Vietnamese:</strong> {currentCard.vietnamese}
          </p>
        </div>
      ) : (
        <p className="hidden-answer">Click "Show Answer" to reveal meaning.</p>
      )}

      <div className="buttons">
        <button onClick={() => setShowAnswer(true)}>Show Answer</button>
        <button onClick={handleListen}>Listen</button>
        <button className="success" onClick={markAsKnown}>
          I know this
        </button>
        <button className="warning" onClick={markAsReview}>
          Need review
        </button>
        <button onClick={goNext}>Next</button>
      </div>

      <p className="status">{status}</p>
    </section>
  );
}