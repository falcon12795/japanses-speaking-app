import { useMemo, useState } from "react";
import { VOCABULARY } from "../data/vocabulary";
import { speakJapaneseText, recognizeJapaneseSpeech } from "../utils/speech";
import { calculateSimpleSpeechScore } from "../utils/scoring";

export default function VocabularyFlashcard({ progress, onProgressChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [status, setStatus] = useState("Ready");

  const [wordTranscript, setWordTranscript] = useState("");
  const [exampleTranscript, setExampleTranscript] = useState("");

  const currentCard = VOCABULARY[currentIndex];

  const wordScore = useMemo(() => {
    return calculateSimpleSpeechScore(wordTranscript, currentCard.japanese);
  }, [wordTranscript, currentCard]);

  const exampleScore = useMemo(() => {
    return calculateSimpleSpeechScore(
      exampleTranscript,
      currentCard.example?.japanese || ""
    );
  }, [exampleTranscript, currentCard]);

  const goNext = () => {
    setShowAnswer(false);
    setStatus("Ready");
    setWordTranscript("");
    setExampleTranscript("");
    setCurrentIndex((prev) => (prev + 1) % VOCABULARY.length);
  };

  const handleListenWord = () => {
    try {
      speakJapaneseText(currentCard.japanese);
      setStatus("Playing vocabulary audio...");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const handleListenExample = () => {
    try {
      speakJapaneseText(currentCard.example.japanese);
      setStatus("Playing example audio...");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const handleSpeakWord = async () => {
    try {
      setWordTranscript("");
      setStatus("Listening for vocabulary pronunciation...");

      const result = await recognizeJapaneseSpeech();

      setWordTranscript(result);
      setStatus("Finished vocabulary speaking check.");

      onProgressChange({
        ...progress,
        vocabularySpeakPractice:
          (progress.vocabularySpeakPractice || 0) + 1,
      });
    } catch (error) {
      setStatus(error.message);
    }
  };

  const handleSpeakExample = async () => {
    try {
      setExampleTranscript("");
      setStatus("Listening for example sentence pronunciation...");

      const result = await recognizeJapaneseSpeech();

      setExampleTranscript(result);
      setStatus("Finished example speaking check.");

      onProgressChange({
        ...progress,
        vocabularyExampleSpeakPractice:
          (progress.vocabularyExampleSpeakPractice || 0) + 1,
      });
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
        <div className="answer vocabulary-answer">
          <div>
            <h3>Meaning</h3>

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

          <div className="example-box">
            <h3>Example</h3>

            <p className="example-japanese">
              {currentCard.example.japanese}
            </p>

            <p className="example-romaji">
              {currentCard.example.romaji}
            </p>

            <p className="example-meaning">
              {currentCard.example.english} /{" "}
              {currentCard.example.vietnamese}
            </p>

            <div className="buttons compact-buttons">
              <button onClick={handleListenExample}>
                Listen example
              </button>

              <button onClick={handleSpeakExample}>
                Speak example
              </button>
            </div>

            {exampleTranscript && (
              <div className="speaking-check-box">
                <p className="label">You said example:</p>
                <p className="transcript">{exampleTranscript}</p>

                <p className="label">Example score:</p>
                <div className="small-score-box">
                  <span>{exampleScore}</span>/100
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${exampleScore}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="hidden-answer">
          Click "Show Answer" to reveal meaning.
        </p>
      )}

      <div className="buttons">
        <button onClick={() => setShowAnswer(true)}>
          Show Answer
        </button>

        <button onClick={handleListenWord}>
          Listen word
        </button>

        <button onClick={handleSpeakWord}>
          Speak word
        </button>

        <button className="success" onClick={markAsKnown}>
          I know this
        </button>

        <button className="warning" onClick={markAsReview}>
          Need review
        </button>

        <button onClick={goNext}>
          Next
        </button>
      </div>

      {wordTranscript && (
        <div className="speaking-check-box">
          <h3>Vocabulary Speaking Check</h3>

          <p className="label">Target word:</p>
          <p className="transcript">{currentCard.japanese}</p>

          <p className="label">You said:</p>
          <p className="transcript">{wordTranscript}</p>

          <p className="label">Word score:</p>
          <div className="small-score-box">
            <span>{wordScore}</span>/100
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${wordScore}%` }}
            />
          </div>
        </div>
      )}

      <p className="status">{status}</p>
    </section>
  );
}