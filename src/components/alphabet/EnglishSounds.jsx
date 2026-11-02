import { useState } from "react";
import Button from "../common/Button";
import AlphabetQuiz from "./AlphabetQuiz";
import { useLanguage } from "../../contexts/LanguageContext";
import { EN_MINIMAL_PAIRS, EN_SOUNDS, EN_SOUND_GROUPS } from "../../data/english/sounds";
import { pickOne, shuffle } from "../../utils/alphabetQuiz";
import { playPhoneme } from "../../utils/phonemeSynth";

// Plays the isolated sound; falls back to the example word if audio synthesis is unavailable.
const speakSound = (onSpeak, item) => {
  if (!playPhoneme(item.id)) onSpeak(item.words[0].word);
};

const FILTERS = [{ id: "all", label: "All" }, ...EN_SOUND_GROUPS];

const QUIZ_TYPES = [
  { id: "listen", label: "Listen → Sound" },
  { id: "word", label: "Word → Sound" },
  { id: "pair", label: "Minimal pairs" },
];

const stripSlashes = (ipa) => ipa.replace(/\//g, "");

function createSoundQuestion(type) {
  if (type === "pair") {
    const pair = pickOne(EN_MINIMAL_PAIRS);
    const [target, other] = Math.random() < 0.5 ? [pair.a, pair.b] : [pair.b, pair.a];

    return {
      prompt: "🎧",
      hint: `Listen, then choose the word you hear (${pair.sounds}).`,
      speak: target.word,
      autoSpeak: true,
      explanation: `${target.word} ${target.ipa} ≠ ${other.word} ${other.ipa}`,
      options: shuffle([
        { id: target.word, label: target.word, isCorrect: true },
        { id: other.word, label: other.word, isCorrect: false },
      ]),
    };
  }

  const target = pickOne(EN_SOUNDS);
  const word = pickOne(target.words);
  const sameType = EN_SOUNDS.filter((item) => item.type === target.type);
  const distractors = shuffle(
    sameType.filter(
      (item) => item !== target && !word.ipa.includes(stripSlashes(item.ipa))
    )
  ).slice(0, 3);
  const options = shuffle([target, ...distractors]).map((item) => ({
    id: item.id,
    label: item.ipa,
    isCorrect: item === target,
  }));
  const explanation = `${word.word} ${word.ipa} contains ${target.ipa}.`;

  if (type === "word") {
    return {
      prompt: word.word,
      promptSub: word.vi,
      hint: "Which sound is in this word?",
      speak: word.word,
      explanation,
      options,
    };
  }

  return {
    prompt: "🎧",
    hint: "Listen, then choose the sound in the word you hear.",
    speak: word.word,
    autoSpeak: true,
    explanation,
    options,
  };
}

function SoundDetail({ item, onSpeak }) {
  const pairs = EN_MINIMAL_PAIRS.filter((pair) => pair.sounds.includes(item.ipa));

  return (
    <div className="alphabet-detail">
      <div className="alphabet-detail-letters sound-detail-ipa">{item.ipa}</div>

      <div className="alphabet-detail-info">
        <p>
          <strong>{item.name}</strong>
        </p>
        <p className="sound-tip">{item.tip}</p>
        <span className="badge badge-neutral">{item.type}</span>
        {item.voiced !== undefined && (
          <span className="badge badge-neutral sound-badge-gap">
            {item.voiced ? "voiced (rung cổ họng)" : "voiceless (không rung)"}
          </span>
        )}

        <div className="buttons">
          <Button variant="secondary" onClick={() => speakSound(onSpeak, item)}>
            🔊 Sound
          </Button>
          <Button variant="secondary" onClick={() => onSpeak(item.words[0].word)}>
            🔊 Example word
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

      {pairs.length > 0 && (
        <div className="sound-pairs-inline">
          <strong>Compare similar sounds</strong>
          <PairList pairs={pairs} onSpeak={onSpeak} />
        </div>
      )}
    </div>
  );
}

function PairList({ pairs, onSpeak }) {
  return (
    <ul className="sound-pairs">
      {pairs.map((pair) => (
        <li key={`${pair.a.word}-${pair.b.word}`}>
          <span className="sound-pair-label">{pair.sounds}</span>
          {[pair.a, pair.b].map((entry) => (
            <button
              key={entry.word}
              type="button"
              className="alphabet-word-button"
              onClick={() => onSpeak(entry.word)}
            >
              <span className="alphabet-word-text">
                <strong>{entry.word}</strong>
                <span>{entry.ipa}</span>
              </span>
              <span aria-hidden="true">🔊</span>
            </button>
          ))}
        </li>
      ))}
    </ul>
  );
}

export default function EnglishSounds({ progress, onProgressChange }) {
  const { speakText } = useLanguage();
  const [mode, setMode] = useState("chart");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(EN_SOUNDS[0]);
  const [quizType, setQuizType] = useState("listen");

  const sounds = EN_SOUNDS.filter((item) => filter === "all" || item.type === filter);
  const activeGroup = EN_SOUND_GROUPS.find((group) => group.id === filter);

  const handleSelect = (item) => {
    setSelected(item);
    speakSound(speakText, item);
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
      <h2>English Sounds</h2>
      <p className="subtitle">
        Learn the {EN_SOUNDS.length} sounds of English: how to say each one, example words and
        easily confused pairs.
      </p>

      <div className="buttons">
        <Button variant="secondary" active={mode === "chart"} onClick={() => setMode("chart")}>
          Sounds
        </Button>
        <Button variant="secondary" active={mode === "pairs"} onClick={() => setMode("pairs")}>
          Minimal pairs
        </Button>
        <Button variant="secondary" active={mode === "practice"} onClick={() => setMode("practice")}>
          Practice
        </Button>
      </div>

      {mode === "chart" && (
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
          {activeGroup && <p className="subtitle">{activeGroup.description}</p>}

          <SoundDetail item={selected} onSpeak={speakText} />

          <div className="alphabet-grid">
            {sounds.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`alphabet-card ${selected.id === item.id ? "selected" : ""} ${item.type === "consonant" ? "" : "vowel"}`.trim()}
                onClick={() => handleSelect(item)}
              >
                {item.ipa}
              </button>
            ))}
          </div>
        </>
      )}

      {mode === "pairs" && (
        <>
          <p className="subtitle">Tap each word and listen carefully to the difference.</p>
          <PairList pairs={EN_MINIMAL_PAIRS} onSpeak={speakText} />
        </>
      )}

      {mode === "practice" && (
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
            createQuestion={() => createSoundQuestion(quizType)}
            onAnswer={handleAnswer}
            onSpeak={speakText}
          />
        </>
      )}
    </>
  );
}
