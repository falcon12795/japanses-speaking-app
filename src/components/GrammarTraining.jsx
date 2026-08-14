import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { N3_GRAMMAR_QUESTIONS } from "../data/training/n3Ques";
import Panel from "./common/Panel";
import Button from "./common/Button";

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function getAnswerIndex(question) {
    if (typeof question.answer === "number") {
        return question.answer;
    }

    return question.choices.findIndex((choice) => choice === question.answer);
}

export default function GrammarTraining() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [shuffleKey, setShuffleKey] = useState(0);

    const selectedGrammarIds = useMemo(() => {
        const ids = searchParams.get("ids") || "";

        return ids
            .split(",")
            .map((id) => id.trim())
            .filter(Boolean);
    }, [searchParams]);

    const questions = useMemo(() => {
        const allQuestions = selectedGrammarIds.flatMap((grammarId) => {
            const quizGroup = N3_GRAMMAR_QUESTIONS[grammarId];

            if (!quizGroup?.questions?.length) {
                return [];
            }

            return quizGroup.questions.map((question) => ({
                ...question,
                grammarId,
                grammarTitle: quizGroup.title,
            }));
        });

        return shuffleArray(allQuestions).slice(0, 10);
    }, [selectedGrammarIds, shuffleKey]);

    const handleSelectAnswer = (questionId, choiceIndex) => {
        if (submitted) return;

        setAnswers((prev) => ({
            ...prev,
            [questionId]: choiceIndex,
        }));
    };


    const submitQuiz = () => {
        if (!allAnswered) return;

        setSubmitted(true);
    };

    const allAnswered =
        questions.length > 0 &&
        questions.every(
            (question) =>
                answers[question.id] !== undefined
        );

    const retryQuiz = () => {
        setAnswers({});
        setSubmitted(false);
        setShuffleKey((prev) => prev + 1);
    };

    const resetQuiz = () => {
        setAnswers({});
        setSubmitted(false);
    };

    const score = useMemo(() => {
        if (!submitted) return 0;

        return questions.reduce((total, question) => {
            const correctIndex = getAnswerIndex(question);
            const selectedIndex = answers[question.id];

            return selectedIndex === correctIndex ? total + 1 : total;
        }, 0);
    }, [submitted, questions, answers]);

    if (selectedGrammarIds.length === 0) {
        return (
            <Panel>
                <h2>Grammar Training</h2>
                <p className="subtitle">
                    No grammar pattern has been selected.
                </p>

                <div className="buttons">
                    <Button variant="secondary" onClick={() => navigate(-1)}>
                        ← Back
                    </Button>
                </div>
            </Panel>
        );
    }

    if (questions.length === 0) {
        return (
            <Panel>
                <h2>Grammar Training</h2>

                <p className="subtitle">
                    No questions found for the selected grammar patterns.
                </p>
            </Panel>
        );
    }

    return (
        <Panel className="grammar-training-panel">
            <div className="grammar-training-header">
                <div>
                    <h2>Grammar Training</h2>
                </div>

                <Button
                    variant="secondary"
                    disabled={!submitted}
                    onClick={retryQuiz}
                >
                    Reset Answers
                </Button>
            </div>

            {submitted && (
                <div className="grammar-training-result">
                    Score: {score} / {questions.length}
                </div>
            )}

            <div className="grammar-question-list">
                {questions.map((question, index) => {
                    const selectedAnswer = answers[question.id];
                    const correctIndex = getAnswerIndex(question);

                    return (
                        <div key={question.id} className="grammar-question-card">
                            <div className="grammar-question-meta">
                                Question {index + 1} / {questions.length}
                            </div>

                            <p className="grammar-question-text">
                                {question.question}
                            </p>

                            <div className="grammar-choice-list">
                                {question.choices.map((choice, choiceIndex) => {
                                    const isSelected = selectedAnswer === choiceIndex;
                                    const isCorrect = submitted && choiceIndex === correctIndex;
                                    const isWrong =
                                        submitted && isSelected && choiceIndex !== correctIndex;

                                    return (
                                        <button
                                            key={choiceIndex}
                                            type="button"
                                            className={`grammar-choice-button ${isSelected ? "selected" : ""
                                                } ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""
                                                }`}
                                            onClick={() =>
                                                handleSelectAnswer(question.id, choiceIndex)
                                            }
                                        >
                                            {choice}
                                        </button>
                                    );
                                })}
                            </div>

                            {submitted && question.explanation && (
                                <p className="grammar-question-explanation">
                                    {question.explanation}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>

            {submitted && (
                <div className="grammar-training-result">
                    Score: {score} / {questions.length}
                </div>
            )}

            <div className="buttons">
                <Button
                    variant="secondary"
                    disabled={!submitted}
                    onClick={resetQuiz}
                >
                    Reset Answers
                </Button>

                {!submitted ? (
                    <Button
                        variant="primary"
                        disabled={!allAnswered}
                        onClick={submitQuiz}
                    >
                        Submit
                    </Button>
                ) : (
                    <Button
                        variant="primary"
                        onClick={retryQuiz}
                    >
                        New Random Test
                    </Button>
                )}
            </div>
        </Panel>
    );
}