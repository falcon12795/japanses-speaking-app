import { useEffect, useState } from "react";
import Button from "../common/Button";

/*
 * Generic multiple-choice quiz. createQuestion() must return
 * { prompt, promptSub?, hint?, speak?, autoSpeak?, explanation?, options: [{ id, label, isCorrect }] }.
 */
export default function AlphabetQuiz({ createQuestion, onAnswer, onSpeak }) {
  const [question, setQuestion] = useState(createQuestion);
  const [selectedId, setSelectedId] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    if (question.autoSpeak && question.speak) {
      onSpeak(question.speak);
    }
  }, [question, onSpeak]);

  const answered = selectedId !== null;

  const handleChoose = (option) => {
    if (answered) return;

    setSelectedId(option.id);
    setScore((prev) => ({
      correct: prev.correct + (option.isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
    onAnswer(option.isCorrect);
  };

  const handleNext = () => {
    setSelectedId(null);
    setQuestion(createQuestion());
  };

  const selectedOption = question.options.find((option) => option.id === selectedId);

  return (
    <div className="alphabet-quiz">
      <div className="alphabet-quiz-score">
        <span className="badge badge-neutral">
          Score: {score.correct} / {score.total}
        </span>
      </div>

      {question.hint && <p className="subtitle alphabet-quiz-hint">{question.hint}</p>}

      <div className="alphabet-quiz-prompt">
        <div className="alphabet-quiz-prompt-main">{question.prompt}</div>
        {question.promptSub && (
          <div className="alphabet-quiz-prompt-sub">{question.promptSub}</div>
        )}

        {question.speak && (
          <Button
            variant="secondary"
            className="alphabet-listen-button"
            onClick={() => onSpeak(question.speak)}
          >
            🔊 Listen
          </Button>
        )}
      </div>

      <div className="quiz-options alphabet-quiz-options">
        {question.options.map((option) => {
          let className = "";

          if (answered) {
            if (option.isCorrect) className = "quiz-correct";
            else if (option.id === selectedId) className = "quiz-wrong";
          }

          return (
            <button
              key={option.id}
              type="button"
              className={className}
              disabled={answered}
              onClick={() => handleChoose(option)}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="alphabet-quiz-feedback">
          <strong>{selectedOption?.isCorrect ? "Correct!" : "Not quite."}</strong>
          {question.explanation && <span> {question.explanation}</span>}
        </div>
      )}

      <div className="buttons">
        <Button onClick={handleNext} disabled={!answered}>
          Next question
        </Button>
      </div>
    </div>
  );
}
