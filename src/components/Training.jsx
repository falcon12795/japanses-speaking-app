import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Panel from "./common/Panel";
import Button from "./common/Button";
import { useLanguage } from "../contexts/LanguageContext";
import { buildVocabularyTopics } from "../utils/buildVocabularyTopics";
import { N1_GRAMMAR_QUESTIONS } from "../data/training/n1";
import { N2_GRAMMAR_QUESTIONS } from "../data/training/n2";
import { N3_GRAMMAR_QUESTIONS } from "../data/training/n3";
import { N4_GRAMMAR_QUESTIONS } from "../data/training/n4";
import { N5_GRAMMAR_QUESTIONS } from "../data/training/n5";

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function groupQuestionsByGroup(questions) {
    return questions.reduce((grouped, question) => {
        const groupId = question.groupId;

        if (!grouped[groupId]) {
            grouped[groupId] = [];
        }

        grouped[groupId].push(question);

        return grouped;
    }, {});
}

function pickMixedQuestions(questions, limit = 10) {
    const grouped = groupQuestionsByGroup(questions);

    const groupIds = shuffleArray(Object.keys(grouped));

    const shuffledGroups = Object.fromEntries(
        groupIds.map((groupId) => [
            groupId,
            shuffleArray(grouped[groupId]),
        ])
    );

    const pickedQuestions = [];
    let hasRemainingQuestions = true;

    while (
        pickedQuestions.length < limit &&
        hasRemainingQuestions
    ) {
        hasRemainingQuestions = false;

        for (const groupId of groupIds) {
            if (pickedQuestions.length >= limit) {
                break;
            }

            const group = shuffledGroups[groupId];

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

function buildGrammarQuestions(grammarIds) {
    return grammarIds.flatMap((grammarId) => {
        var quizGroup;
        switch (grammarId.substring(0, 2).toUpperCase()) {
            case "N1":
                quizGroup = N1_GRAMMAR_QUESTIONS[grammarId];
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
            groupId: grammarId,
        }));
    });
}

// One fill-in-the-blank question per word: pick the word that fits the
// example sentence, with distractors sampled from other words of the same level.
function buildVocabularyQuestions(topics, vocabulary) {
    const wordPoolByLevel = new Map();

    const getWordPool = (level) => {
        if (!wordPoolByLevel.has(level)) {
            wordPoolByLevel.set(
                level,
                [
                    ...new Set(
                        vocabulary
                            .filter((item) => item.level === level)
                            .map((item) => item.japanese)
                            .filter(Boolean)
                    ),
                ]
            );
        }

        return wordPoolByLevel.get(level);
    };

    return topics.flatMap((topic) => {
        const wordPool = getWordPool(topic.level);

        return topic.words
            .filter((word) => word.example?.includes(word.japanese))
            .map((word) => {
                const distractorChoices = shuffleArray(
                    wordPool.filter((japanese) => japanese !== word.japanese)
                ).slice(0, 3);

                const choices = shuffleArray([word.japanese, ...distractorChoices]);

                const readingSuffix =
                    word.reading && word.reading !== word.japanese
                        ? ` (${word.reading})`
                        : "";

                return {
                    id: `${word.id}-quiz`,
                    groupId: topic.id,
                    question: word.example.replace(word.japanese, "___"),
                    choices,
                    answer: choices.indexOf(word.japanese),
                    explanation: `${word.japanese}${readingSuffix} — ${word.meaning}${
                        word.exampleVietnamese ? ` (${word.exampleVietnamese})` : ""
                    }`,
                };
            });
    });
}

export default function Training() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { vocabulary } = useLanguage();
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [shuffleKey, setShuffleKey] = useState(0);
    const [usedQuestionIds, setUsedQuestionIds] = useState([]);

    const mode = searchParams.get("type") === "vocabulary" ? "vocabulary" : "grammar";

    const selectedIds = useMemo(() => {
        const ids = searchParams.get(mode === "vocabulary" ? "topics" : "ids") || "";

        return ids
            .split(",")
            .map((id) => id.trim())
            .filter(Boolean);
    }, [searchParams, mode]);

    const questions = useMemo(() => {
        const allQuestions =
            mode === "vocabulary"
                ? buildVocabularyQuestions(
                    buildVocabularyTopics(vocabulary).filter((topic) =>
                        selectedIds.includes(topic.id)
                    ),
                    vocabulary
                )
                : buildGrammarQuestions(selectedIds);

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
    }, [mode, selectedIds, vocabulary, usedQuestionIds, shuffleKey]);

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

    const pageTitle = mode === "vocabulary" ? "Vocabulary Training" : "Grammar Training";

    if (selectedIds.length === 0) {
        return (
            <Panel>
                <h2>{pageTitle}</h2>
                <p className="subtitle">
                    {mode === "vocabulary"
                        ? "No vocabulary topic has been selected."
                        : "No grammar pattern has been selected."}
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
                <h2>{pageTitle}</h2>

                <p className="subtitle">
                    {mode === "vocabulary"
                        ? "No questions found for the selected vocabulary topics."
                        : "No questions found for the selected grammar patterns."}
                </p>
            </Panel>
        );
    }

    return (
        <Panel className="grammar-training-panel">
            <div className="grammar-training-header">
                <div>
                    <h2>{pageTitle}</h2>
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