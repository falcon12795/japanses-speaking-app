import { useMemo, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { calculateSimpleSpeechScore } from "../utils/scoring";

import Badge from "./common/Badge";
import Button from "./common/Button";
import Panel from "./common/Panel";
import ScoreBox from "./common/ScoreBox";

export default function VocabularyFlashcard({
  vocabulary = [],
  progress = {},
  onProgressChange = () => {},
  level = "",
  subject = "",
  topic = "",
  filter = "all",
  initialIndex = 0,
}) {
  const { vocabulary: contextVocabulary, speakText, recognizeSpeech } = useLanguage();
  const data = vocabulary.length > 0 ? vocabulary : contextVocabulary;
  const [currentIndex, setCurrentIndex] = useState(() =>
    initialIndex >= 0 && initialIndex < data.length ? initialIndex : 0
  );
  const [showAnswer, setShowAnswer] = useState(false);
  const [status, setStatus] = useState("Ready");
  const [wordTranscript, setWordTranscript] = useState("");
  const [exampleTranscript, setExampleTranscript] = useState("");

  const safeIndex = data.length > 0 ? Math.min(currentIndex, data.length - 1) : 0;
  const currentCard = data[safeIndex];

  const hasExample = Boolean(currentCard?.example?.japanese);

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
      <Panel>
        <h3>No vocabulary found.</h3>
      </Panel>
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
      speakText(currentCard.japanese);
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
      speakText(currentCard.example.japanese);
      setStatus("Playing example audio...");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const handleSpeakWord = async () => {
    try {
      setWordTranscript("");
      setStatus("Listening for vocabulary pronunciation...");

      const result = await recognizeSpeech();

      setWordTranscript(result);
      setStatus("Finished vocabulary speaking check.");

      onProgressChange({
        ...progress,
        vocabularySpeakPractice: (progress.vocabularySpeakPractice || 0) + 1,
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

      const result = await recognizeSpeech();

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
    <Panel>
      <div className="flashcard-header">
        <div>
          <div className="card-top">
            <Badge variant="primary">
              {level || currentCard.level}
            </Badge>

            {subject && (
              <Badge variant="secondary">
                {subject}
              </Badge>
            )}

            <Badge variant="neutral">
              {topic}
            </Badge>

            {filter !== "all" && (
              <Badge variant="warning">
                {filter === "favorite"
                  ? "⭐ Favorite"
                  : filter === "review"
                    ? "🔁 Review"
                    : filter === "completed"
                      ? "✅ Completed"
                      : filter === "learning"
                        ? "📖 Learning"
                        : "⭕ Not Started"}
              </Badge>
            )}
          </div>

          <p className="subtitle">
            Word {currentIndex + 1} / {data.length}
          </p>
        </div>
      </div>

      <div className="surface-card answer">
        <h2 className="japanese">{currentCard.japanese}</h2>

        {currentCard.reading && (
          <p className="reading">{currentCard.reading}</p>
        )}

        <div className="buttons compact-buttons">
          <Button variant="secondary" onClick={handleListenWord}>
            Listen word
          </Button>

          <Button variant="secondary" onClick={handleSpeakWord}>
            Speak word
          </Button>

          <Button
            variant={isFavorite ? "primary" : "secondary"}
            onClick={toggleFavoriteVocabulary}
          >
            {isFavorite ? "★ Favorited" : "☆ Favorite"}
          </Button>

          <Button
            variant="primary"
            onClick={() => setShowAnswer((prev) => !prev)}
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </Button>
        </div>
      </div>

      {showAnswer ? (
        <div className="vocabulary-answer">
          <div className="surface-card example-box">
            <h3>Meaning</h3>

            {currentCard.romaji && (
              <p>
                <strong>Romaji:</strong> {currentCard.romaji}
              </p>
            )}

            {currentCard.english && (
              <p>
                <strong>English:</strong>{" "}
                {currentCard.english}
              </p>
            )}

            {currentCard.vietnamese && (
              <p>
                <strong>Vietnamese:</strong>{" "}
                {currentCard.vietnamese}
              </p>
            )}
          </div>

          {hasExample ? (
            <div className="surface-card example-box">
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
                {currentCard.example.vietnamese || "No Vietnamese translation"}
              </p>

              <div className="buttons compact-buttons">
                <Button variant="secondary" onClick={handleListenExample}>
                  Listen example
                </Button>

                <Button variant="secondary" onClick={handleSpeakExample}>
                  Speak example
                </Button>
              </div>

              {exampleTranscript && (
                <div className="soft-card speaking-check-box">
                  <p className="label">You said example:</p>
                  <p className="transcript">{exampleTranscript}</p>

                  <ScoreBox score={exampleScore} label="Example score" />
                </div>
              )}
            </div>
          ) : (
            <div className="soft-card empty-example-box">
              <h3>Example</h3>
              <p>No example sentence is available for this word.</p>
            </div>
          )}
        </div>
      ) : (
        <p className="hidden-answer">
          Click "Show Answer" to reveal meaning.
        </p>
      )}

      <div className="buttons">
        <Button variant="success" onClick={markAsKnown}>
          I know this
        </Button>

        <Button variant="secondary" onClick={markAsReview}>
          Need review
        </Button>

        <Button variant="secondary" onClick={goPrevious}>
          Previous
        </Button>

        <Button variant="secondary" onClick={goNext}>
          Next
        </Button>
      </div>

      {wordTranscript && (
        <div className="surface-card speaking-check-box">
          <h3>Vocabulary Speaking Check</h3>

          <p className="label">Target word:</p>
          <p className="transcript">{currentCard.japanese}</p>

          <p className="label">You said:</p>
          <p className="transcript">{wordTranscript}</p>

          <ScoreBox score={wordScore} label="Word score" />
        </div>
      )}

      <p className="status">{status}</p>
    </Panel>
  );
}