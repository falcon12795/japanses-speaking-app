import { resetProgress } from "../utils/storage";

export default function ProgressPanel({ progress, onProgressChange }) {
  const handleReset = () => {
    const emptyProgress = resetProgress();
    onProgressChange(emptyProgress);
  };

  return (
    <section className="panel">
      <h2>Progress</h2>

      <div className="progress-list">
        <p>
          <strong>Vocabulary learned:</strong> {progress.vocabularyLearned}
        </p>
        <p>
          <strong>Vocabulary need review:</strong>{" "}
          {progress.vocabularyNeedReview}
        </p>
        <p>
          <strong>Kana correct:</strong> {progress.kanaCorrect}
        </p>
        <p>
          <strong>Kana wrong:</strong> {progress.kanaWrong}
        </p>
        <p>
          <strong>Speaking practice:</strong> {progress.speakingPractice}
        </p>
        <p>
          <strong>JLPT correct:</strong> {progress.jlptCorrect}
        </p>
        <p>
          <strong>JLPT wrong:</strong> {progress.jlptWrong}
        </p>
      </div>

      <button className="danger" onClick={handleReset}>
        Reset Progress
      </button>
    </section>
  );
}