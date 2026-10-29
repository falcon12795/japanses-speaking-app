import { useState } from "react";
import Button from "../common/Button";
import AlphabetQuiz from "./AlphabetQuiz";
import { useLanguage } from "../../contexts/LanguageContext";
import { EN_ALPHABET } from "../../data/english/alphabet";
import { pickOne, shuffle } from "../../utils/alphabetQuiz";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "vowel", label: "Vowels" },
  { id: "consonant", label: "Consonants" },
];

const QUIZ_TYPES = [
  { id: "listen", label: "Listen → Letter" },
  { id: "case", label: "Capital → Small" },
  { id: "word", label: "First letter of a word" },
];

function createLetterQuestion(type) {
  const target = pickOne(EN_ALPHABET);
  const letters = shuffle([
    target,
    ...shuffle(EN_ALPHABET.filter((item) => item !== target)).slice(0, 3),
  ]);
  const toOption = (item, label) => ({ id: item.letter, label, isCorrect: item === target });
  const explanation = `${target.letter}${target.lower} ${target.ipa}`;

  if (type === "case") {
    return {
      prompt: target.letter,
      hint: "Choose the matching small letter.",
      speak: target.say,
      explanation,
      options: letters.map((item) => toOption(item, item.lower)),
    };
  }

  if (type === "word") {
    const word = pickOne(target.words);

    return {
      prompt: word.emoji,
      promptSub: word.word,
      hint: "Which letter does this word start with?",
      speak: word.word,
      explanation: `${word.word} starts with ${target.letter}.`,
      options: letters.map((item) => toOption(item, item.letter)),
    };
  }

  return {
    prompt: "🎧",
    hint: "Listen, then choose the letter you hear.",
    speak: target.say,
    autoSpeak: true,
    explanation,
    options: letters.map((item) => toOption(item, item.letter)),
  };
}

function LetterDetail({ item, onSpeak }) {
  return (
    <div className="alphabet-detail">
      <div className="alphabet-detail-letters">
        {item.letter}
        {item.lower}
      </div>

      <div className="alphabet-detail-info">
        <p>
          <strong>Name:</strong> {item.ipa}
        </p>
        <p>
          <strong>Sound:</strong> {item.sound}
        </p>
        <span className="badge badge-neutral">{item.type}</span>

        <div className="buttons">
          <Button variant="secondary" onClick={() => onSpeak(item.say)}>
            🔊 Letter name
          </Button>
        </div>
      </div>

      <ul className="alphabet-detail-words">
        {item.words.map((word) => (
          <li key={word.word}>
            <button
              type="button"
              className="alphabet-word-button"
              onClick={() => onSpeak(word.word)}
            >
              <span className="alphabet-word-emoji">{word.emoji}</span>
              <span className="alphabet-word-text">
                <strong>{word.word}</strong>
                <span>{word.ipa}</span>
                <span>{word.vi}</span>
              </span>
              <span aria-hidden="true">🔊</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EnglishAlphabet({ progress, onProgressChange }) {
  const { speakText } = useLanguage();
  const [mode, setMode] = useState("chart");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(EN_ALPHABET[0]);
  const [quizType, setQuizType] = useState("listen");

  const letters = EN_ALPHABET.filter((item) => filter === "all" || item.type === filter);

  const handleSelect = (item) => {
    setSelected(item);
    speakText(item.say);
  };

  const handleAnswer = (isCorrect) => {
    onProgressChange({
      ...progress,
      alphabetCorrect: (progress.alphabetCorrect || 0) + (isCorrect ? 1 : 0),
      alphabetWrong: (progress.alphabetWrong || 0) + (isCorrect ? 0 : 1),
    });
  };

  return (
    <>
      <h2>English Alphabet</h2>
      <p className="subtitle">Learn the 26 letters, their names, sounds and example words.</p>

      <div className="buttons">
        <Button variant="secondary" active={mode === "chart"} onClick={() => setMode("chart")}>
          Alphabet
        </Button>
        <Button variant="secondary" active={mode === "practice"} onClick={() => setMode("practice")}>
          Practice
        </Button>
      </div>

      {mode === "chart" ? (
        <>
          <div className="alphabet-options-row">
            {FILTERS.map((item) => (
              <Button
                key={item.id}
                variant="secondary"
                active={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <LetterDetail item={selected} onSpeak={speakText} />

          <div className="alphabet-grid">
            {letters.map((item) => (
              <button
                key={item.letter}
                type="button"
                className={`alphabet-card ${selected.letter === item.letter ? "selected" : ""} ${item.type}`.trim()}
                onClick={() => handleSelect(item)}
              >
                {item.letter}
                {item.lower}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="alphabet-options-row">
            <span className="alphabet-options-label">Quiz type</span>
            {QUIZ_TYPES.map((item) => (
              <Button
                key={item.id}
                variant="secondary"
                active={quizType === item.id}
                onClick={() => setQuizType(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <AlphabetQuiz
            key={quizType}
            createQuestion={() => createLetterQuestion(quizType)}
            onAnswer={handleAnswer}
            onSpeak={speakText}
          />
        </>
      )}
    </>
  );
}
