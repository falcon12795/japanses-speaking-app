import { useMemo, useState } from "react";
import { VOCABULARY } from "../data/vocabulary";
import { speakJapaneseText, recognizeJapaneseSpeech } from "../utils/speech";
import { calculateSimpleSpeechScore } from "../utils/scoring";

export default function VocabularyFlashcard({
  progress = {},
  onProgressChange,
  vocabulary = [],
  onBack,
  topic,
  level,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [status, setStatus] = useState("Ready");
  const [wordTranscript, setWordTranscript] = useState("");
  const [exampleTranscript, setExampleTranscript] = useState("");

  const data = vocabulary.length > 0 ? vocabulary : VOCABULARY;
  const currentCard = data[currentIndex];

  const hasExample = Boolean(currentCard?.example?.japanese);
  const currentTopic =
    currentCard?.topic || currentCard?.type || topic || "General";

  const wordScore = useMemo(() => {
    if (!currentCard) return 0;

    return calculateSimpleSpeechScore(wordTranscript, currentCard.japanese);
  }, [wordTranscript, currentCard]);

  const exampleScore = useMemo(() => {
    if (!hasExample) return 0;

    return calculateSimpleSpeechScore(
      exampleTranscript,
      currentCard.example.japanese
    );
  }, [exampleTranscript, currentCard, hasExample]);

  if (!currentCard) {
    return (
      <section className="card">
        <div className="flashcard-header">
          {onBack && (
            <button className="back-button" onClick={onBack}>
              ← Back
            </button>
          )}

          <h3>No vocabulary found.</h3>
        </div>
      </section>
    );
  }

  const resetCardState = () => {
    setShowAnswer(false);
    setStatus("Ready");
    setWordTranscript("");
    setExampleTranscript("");
  };

  const goNext = () => {
    resetCardState();
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const goPrevious = () => {
    resetCardState();
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const toggleFavoriteVocabulary = () => {
    const favoriteVocabulary = progress.favoriteVocabulary || [];
    const exists = favoriteVocabulary.includes(currentCard.id);

    const nextFavoriteVocabulary = exists
      ? favoriteVocabulary.filter((id) => id !== currentCard.id)
      : [...favoriteVocabulary, currentCard.id];

    onProgressChange({
      ...progress,
      favoriteVocabulary: nextFavoriteVocabulary,
    });
  };

  const isFavorite = (progress.favoriteVocabulary || []).includes(
    currentCard.id
  );

  const handleListenWord = () => {
    try {
      speakJapaneseText(currentCard.japanese);
      setStatus("Playing vocabulary audio...");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const handleListenExample = () => {
    if (!hasExample) {
      setStatus("No example sentence is available for this word.");
      return;
    }

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
    if (!hasExample) {
      setStatus("No example sentence is available for this word.");
      return;
    }

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
    const completedVocabulary = progress.completedVocabulary || [];
    const reviewVocabulary = progress.reviewVocabulary || [];

    const nextCompletedVocabulary = completedVocabulary.includes(currentCard.id)
      ? completedVocabulary
      : [...completedVocabulary, currentCard.id];

    const nextReviewVocabulary = reviewVocabulary.filter(
      (id) => id !== currentCard.id
    );

    onProgressChange({
      ...progress,
      vocabularyLearned: (progress.vocabularyLearned || 0) + 1,
      completedVocabulary: nextCompletedVocabulary,
      reviewVocabulary: nextReviewVocabulary,
    });

    goNext();
  };

  const markAsReview = () => {
    const reviewVocabulary = progress.reviewVocabulary || [];

    const nextReviewVocabulary = reviewVocabulary.includes(currentCard.id)
      ? reviewVocabulary
      : [...reviewVocabulary, currentCard.id];

    onProgressChange({
      ...progress,
      vocabularyNeedReview: (progress.vocabularyNeedReview || 0) + 1,
      reviewVocabulary: nextReviewVocabulary,
    });

    goNext();
  };

  return (
    <section className="card">
      <div className="flashcard-header">
        {onBack && (
          <button className="back-button" onClick={onBack}>
            ← Back
          </button>
        )}

        <div>
          <h3>
            {level || currentCard.level} / {currentTopic}
          </h3>

          <p className="subtitle">
            Word {currentIndex + 1} / {data.length}
          </p>
        </div>
      </div>

      <h2 className="japanese">{currentCard.japanese}</h2>

      {currentCard.reading && (
        <p className="reading">{currentCard.reading}</p>
      )}

      {showAnswer ? (
        <div className="answer vocabulary-answer">
          <div>
            <h3>Meaning</h3>

            {currentCard.romaji && (
              <p>
                <strong>Romaji:</strong> {currentCard.romaji}
              </p>
            )}

            <p>
              <strong>English:</strong>{" "}
              {currentCard.english || "No English translation"}
            </p>

            <p>
              <strong>Vietnamese:</strong>{" "}
              {currentCard.vietnamese || "No Vietnamese translation"}
            </p>
          </div>

          {hasExample ? (
            <div className="example-box">
              <h3>Example</h3>

              <p className="example-japanese">
                {currentCard.example.japanese}
              </p>

              {currentCard.example.reading && (
                <p className="example-romaji">
                  {currentCard.example.reading}
                </p>
              )}

              {currentCard.example.romaji && (
                <p className="example-romaji">
                  {currentCard.example.romaji}
                </p>
              )}

              <p className="example-meaning">
                {currentCard.example.english || "No English translation"} /{" "}
                {currentCard.example.vietnamese ||
                  "No Vietnamese translation"}
              </p>

              <div className="buttons compact-buttons">
                <button onClick={handleListenExample}>Listen example</button>
                <button onClick={handleSpeakExample}>Speak example</button>
              </div>

              {exampleTranscript && (
                <div className="speaking-check-box">
                  <p className="label">You said example:</p>
                  <p className="transcript">{exampleTranscript}</p>

                  <p className="label">Example score:</p>

                  <div className="small-score-box">
                    <span>{exampleScore}</span>/100
                  </div>

                </div>
              )}
            </div>
          ) : (
            <div className="example-box empty-example-box">
              <h3>Example</h3>

              <p className="hidden-answer">
                No example sentence is available for this word.
              </p>
            </div>
          )}
        </div>
      ) : (
        <p className="hidden-answer">
          Click "Show Answer" to reveal meaning.
        </p>
      )}

      <div className="buttons">
        <button onClick={toggleFavoriteVocabulary}>
          {isFavorite ? "★ Favorited" : "☆ Favorite"}
        </button>

        <button onClick={() => setShowAnswer((prev) => !prev)}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>

        <button onClick={handleListenWord}>Listen word</button>

        <button onClick={handleSpeakWord}>Speak word</button>

        <button className="success" onClick={markAsKnown}>
          I know this
        </button>

        <button className="warning" onClick={markAsReview}>
          Need review
        </button>

        <button onClick={goPrevious}>Previous</button>

        <button onClick={goNext}>Next</button>
      </div>

      {wordTranscript && (
        <div className="speaking-check-box">
          <h3>Vocabulary Speaking Check</h3>

          <p className="label">Target word:</p>
          <p className="transcript">{currentCard.japanese}</p>
          
          <p className="transcript">{wordTranscript}</p>

          <p className="label">Word score:</p>

          <div className="small-score-box">
            <span>{wordScore}</span>/100
          </div>

        </div>
      )}

      <p className="status">{status}</p>
    </section>
  );
}