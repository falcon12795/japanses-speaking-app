import { useMemo, useState } from "react";
import Button from "../common/Button";
import AlphabetQuiz from "./AlphabetQuiz";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  HANGUL_SCOPES,
  HANGUL_SECTIONS,
  SYLLABLE_VOWELS,
  getHangulItems,
  getSyllableRows,
} from "../../data/korean/hangul";
import { createCharacterQuestion } from "../../utils/alphabetQuiz";

const QUIZ_TYPES = [
  { id: "read", label: "Hangul → Romanization" },
  { id: "write", label: "Romanization → Hangul" },
  { id: "listen", label: "Listen → Hangul" },
];

const PRACTICE_SCOPES = [...HANGUL_SCOPES, { id: "syllables", label: "Syllables" }];

function LetterDetail({ item, onSpeak }) {
  return (
    <div className="kana-detail hangul-detail">
      <div className="kana-detail-char">{item.kana}</div>

      <div className="hangul-detail-info">
        <div className="kana-detail-romaji">{item.romaji}</div>
        {item.name && <div className="subtitle">Name: {item.name}</div>}
        <div className="hangul-detail-word">
          <strong>{item.word}</strong> ({item.wordReading}) — {item.meaning}
        </div>
      </div>

      <div className="buttons">
        <Button variant="secondary" onClick={() => onSpeak(item.say)}>
          🔊 Sound
        </Button>
        {item.name && (
          <Button variant="secondary" onClick={() => onSpeak(item.name)}>
            🔊 Name
          </Button>
        )}
        <Button variant="secondary" onClick={() => onSpeak(item.word)}>
          🔊 Word
        </Button>
      </div>
    </div>
  );
}

function LetterChart({ showRomaji, onSpeak }) {
  const [selected, setSelected] = useState(HANGUL_SECTIONS[0].items[0]);

  const handleSelect = (item) => {
    setSelected(item);
    onSpeak(item.say);
  };

  return (
    <div className="kana-chart">
      <LetterDetail item={selected} onSpeak={onSpeak} />

      {HANGUL_SECTIONS.map((section) => (
        <section key={section.id} className="kana-section">
          <h3>
            {section.title} <span className="kana-section-subtitle">{section.subtitle}</span>
          </h3>

          <div className="kana-grid hangul-grid">
            {section.items.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`kana-cell ${selected.id === item.id ? "selected" : ""}`.trim()}
                onClick={() => handleSelect(item)}
              >
                <span className="kana-cell-char">{item.kana}</span>
                {showRomaji && <span className="kana-cell-romaji">{item.romaji.split(" ")[0]}</span>}
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function SyllableChart({ showRomaji, onSpeak }) {
  const rows = useMemo(() => getSyllableRows(), []);
  const [selected, setSelected] = useState(null);

  const handleSelect = (cell) => {
    setSelected(cell);
    onSpeak(cell.kana);
  };

  return (
    <div className="kana-chart">
      <div className="kana-detail">
        {selected ? (
          <>
            <div className="kana-detail-char">{selected.kana}</div>
            <div className="kana-detail-romaji">{selected.romaji}</div>
            <div className="subtitle">
              {selected.consonant} + {selected.vowel}
            </div>
            <Button variant="secondary" onClick={() => onSpeak(selected.kana)}>
              🔊 Listen
            </Button>
          </>
        ) : (
          <p className="subtitle">Combine a consonant with a vowel to build a syllable. Tap one to hear it.</p>
        )}
      </div>

      <div className="syllable-scroll">
        <div className="syllable-grid">
          <div className="syllable-corner" />
          {SYLLABLE_VOWELS.map((vowel) => (
            <div key={vowel} className="syllable-head">
              {vowel}
            </div>
          ))}

          {rows.map((row) => [
            <div key={`head-${row[0].consonant}`} className="syllable-head">
              {row[0].consonant}
            </div>,
            ...row.map((cell) => (
              <button
                key={cell.id}
                type="button"
                className={`kana-cell ${selected?.id === cell.id ? "selected" : ""}`.trim()}
                onClick={() => handleSelect(cell)}
              >
                <span className="kana-cell-char">{cell.kana}</span>
                {showRomaji && <span className="kana-cell-romaji">{cell.romaji}</span>}
              </button>
            )),
          ])}
        </div>
      </div>
    </div>
  );
}

export default function KoreanAlphabet({ progress, onProgressChange }) {
  const { speakText } = useLanguage();
  const [mode, setMode] = useState("chart");
  const [view, setView] = useState("letters");
  const [showRomaji, setShowRomaji] = useState(true);
  const [scopeId, setScopeId] = useState("letters");
  const [quizType, setQuizType] = useState("read");

  const pool = useMemo(() => {
    if (scopeId === "syllables") {
      return getSyllableRows().flat();
    }

    return getHangulItems(HANGUL_SCOPES.find((scope) => scope.id === scopeId).sections);
  }, [scopeId]);

  const handleAnswer = (isCorrect) => {
    onProgressChange({
      ...progress,
      hangulCorrect: (progress.hangulCorrect || 0) + (isCorrect ? 1 : 0),
      hangulWrong: (progress.hangulWrong || 0) + (isCorrect ? 0 : 1),
    });
  };

  return (
    <>
      <h2>한글 (Hangul)</h2>
      <p className="subtitle">Learn the Korean alphabet, build syllables, then test yourself.</p>

      <div className="buttons">
        <Button variant="secondary" active={mode === "chart"} onClick={() => setMode("chart")}>
          Chart
        </Button>
        <Button variant="secondary" active={mode === "practice"} onClick={() => setMode("practice")}>
          Practice
        </Button>
      </div>

      {mode === "chart" ? (
        <>
          <div className="buttons">
            <Button variant="secondary" active={view === "letters"} onClick={() => setView("letters")}>
              Letters
            </Button>
            <Button variant="secondary" active={view === "syllables"} onClick={() => setView("syllables")}>
              Syllables
            </Button>
            <Button variant="secondary" onClick={() => setShowRomaji((value) => !value)}>
              {showRomaji ? "Hide romanization" : "Show romanization"}
            </Button>
          </div>

          {view === "letters" ? (
            <LetterChart showRomaji={showRomaji} onSpeak={speakText} />
          ) : (
            <SyllableChart showRomaji={showRomaji} onSpeak={speakText} />
          )}
        </>
      ) : (
        <>
          <div className="alphabet-options-row">
            <span className="alphabet-options-label">Characters</span>
            {PRACTICE_SCOPES.map((item) => (
              <Button
                key={item.id}
                variant="secondary"
                active={scopeId === item.id}
                onClick={() => setScopeId(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>

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
            key={`${scopeId}-${quizType}`}
            createQuestion={() => createCharacterQuestion(quizType, pool)}
            onAnswer={handleAnswer}
            onSpeak={speakText}
          />
        </>
      )}
    </>
  );
}
