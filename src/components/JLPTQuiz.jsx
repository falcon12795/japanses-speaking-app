import { useState } from "react";
import { JLPT_QUIZ } from "../data/jlptQuiz";

export default function JLPTQuiz({ progress, onProgressChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState("");

  const currentQuestion = JLPT_QUIZ[currentIndex];

  const selectAnswer = (option) => {
    setSelectedAnswer(option);

    if (option === currentQuestion.answer) {
      setResult("Correct!");
      onProgressChange({
        ...progress,
        jlptCorrect: progress.jlptCorrect + 1,
      });
    } else {
      setResult("Wrong!");
      onProgressChange({
        ...progress,
        jlptWrong: progress.jlptWrong + 1,
      });
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer("");
    setResult("");
    setCurrentIndex((prev) => (prev + 1) % JLPT_QUIZ.length);
  };

  return (
    <section className="panel">
      <h2>JLPT Quiz</h2>

      <span className="level">{currentQuestion.level}</span>

      <h3>{currentQuestion.question}</h3>

      <div className="quiz-options">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => selectAnswer(option)}
            disabled={selectedAnswer !== ""}
          >
            {option}
          </button>
        ))}
      </div>

      {result && (
        <div className="answer">
          <p>
            <strong>{result}</strong>
          </p>
          <p>{currentQuestion.explanation}</p>
        </div>
      )}

      <button onClick={nextQuestion}>Next Question</button>
    </section>
  );
}