import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { N3_GRAMMAR_QUESTIONS } from "../data/training/n3Ques";
import Panel from "./common/Panel";
import Button from "./common/Button";
import { N2_GRAMMAR_QUESTIONS } from "../data/training/n2Ques";
import { N4_GRAMMAR_QUESTIONS } from "../data/training/n4Ques";
import { N5_GRAMMAR_QUESTIONS } from "../data/training/n5Ques";

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function groupQuestionsByGrammar(questions) {
    return questions.reduce((grouped, question) => {
        const grammarId = question.grammarId;

        if (!grouped[grammarId]) {
            grouped[grammarId] = [];
        }

        grouped[grammarId].push(question);

        return grouped;
    }, {});
}

function pickMixedQuestions(questions, limit = 10) {
    const grouped = groupQuestionsByGrammar(questions);

    const grammarIds = shuffleArray(Object.keys(grouped));

    const shuffledGroups = Object.fromEntries(
        grammarIds.map((grammarId) => [
            grammarId,
            shuffleArray(grouped[grammarId]),
        ])
    );

    const pickedQuestions = [];
    let hasRemainingQuestions = true;

    while (
        pickedQuestions.length < limit &&
        hasRemainingQuestions
    ) {
        hasRemainingQuestions = false;

        for (const grammarId of grammarIds) {
            if (pickedQuestions.length >= limit) {
                break;
            }

            const group = shuffledGroups[grammarId];

            if (group.length > 0) {
                pickedQuestions.push(group.shift());
                hasRemainingQuestions = true;
            }
        }
    }

    return pickedQuestions;
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
    // const [previousQuestionIds, setPreviousQuestionIds] = useState([]);
    const [usedQuestionIds, setUsedQuestionIds] = useState([]);
    const selectedGrammarIds = useMemo(() => {
        const ids = searchParams.get("ids") || "";

        return ids
            .split(",")
            .map((id) => id.trim())
            .filter(Boolean);
    }, [searchParams]);

    const questions = useMemo(() => {
        const allQuestions = selectedGrammarIds.flatMap((grammarId) => {
            var quizGroup;
            switch (grammarId.substring(0, 2).toUpperCase) {
                case "N1":
                    quizGroup = N2_GRAMMAR_QUESTIONS[grammarId];
                    break;
                case "N2":
                    quizGroup = N2_GRAMMAR_QUESTIONS[grammarId];
                    break;
                case "N3":
                    quizGroup = N3_GRAMMAR_QUESTIONS[grammarId];
                    break;
                case "N4":
                    quizGroup = N4_GRAMMAR_QUESTIONS[grammarId];
                    break;
                default:
                    quizGroup = N5_GRAMMAR_QUESTIONS[grammarId];
                    break;
            }

            if (!quizGroup?.questions?.length) {
                return [];
            }

            return quizGroup.questions.map((question) => ({
                ...question,
                grammarId,
                grammarTitle: quizGroup.title,
            }));
        });

        if (allQuestions.length === 0) {
            return [];
        }

        let availableQuestions = allQuestions.filter(
            (question) => !usedQuestionIds.includes(question.id)
        );

        if (availableQuestions.length < 10) {
            availableQuestions = allQuestions;
        }

        return pickMixedQuestions(availableQuestions, 10);
    }, [selectedGrammarIds, usedQuestionIds, shuffleKey]);

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
        setUsedQuestionIds((prev) => {
            const nextUsedIds = new Set(prev);

            questions.forEach((question) => {
                nextUsedIds.add(question.id);
            });

            return Array.from(nextUsedIds);
        });

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