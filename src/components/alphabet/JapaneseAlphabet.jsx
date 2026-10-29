import { useMemo, useState } from "react";
import Button from "../common/Button";
import AlphabetQuiz from "./AlphabetQuiz";
import { useLanguage } from "../../contexts/LanguageContext";
import { KANA_SCRIPTS, getKanaList, getKanaSections } from "../../data/kana";
import { createCharacterQuestion } from "../../utils/alphabetQuiz";


const SCOPES = [
  { id: "basic", label: "Basic", sections: ["basic"] },
  { id: "dakuten", label: "Voiced", sections: ["dakuten"] },
  { id: "combination", label: "Combinations", sections: ["combination"] },
  { id: "all", label: "All", sections: ["basic", "dakuten", "combination"] },
];

const QUIZ_TYPES = [
  { id: "read", label: "Kana → Romaji" },
  { id: "write", label: "Romaji → Kana" },
  { id: "listen", label: "Listen → Kana" },
];

function KanaChart({ script, showRomaji, onSpeak }) {
  const sections = useMemo(() => getKanaSections(script), [script]);
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
            <Button variant="secondary" onClick={() => onSpeak(selected.kana)}>
              🔊 Listen
            </Button>
          </>
        ) : (
          <p className="subtitle">Tap a character to hear it.</p>
        )}
      </div>

      {sections.map((section) => (
        <section key={section.id} className="kana-section">
          <h3>
            {section.title} <span className="kana-section-subtitle">{section.subtitle}</span>
          </h3>

          <div
            className="kana-grid"
            style={{ gridTemplateColumns: `repeat(${section.columns}, minmax(0, 1fr))` }}
          >
            {section.rows.flatMap((row, rowIndex) =>
              Array.from({ length: section.columns }, (_, colIndex) => {
                const cell = row[colIndex];
                const key = `${section.id}-${rowIndex}-${colIndex}`;

                if (!cell) {
                  return <div key={key} className="kana-cell-empty" />;
                }

                return (
                  <button
                    key={key}
                    type="button"
                    className={`kana-cell ${selected?.id === cell.id ? "selected" : ""}`.trim()}
                    onClick={() => handleSelect(cell)}
                  >
                    <span className="kana-cell-char">{cell.kana}</span>
                    {showRomaji && <span className="kana-cell-romaji">{cell.romaji}</span>}
                  </button>
                );
              })
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default function JapaneseAlphabet({ progress, onProgressChange }) {
  const { speakText } = useLanguage();
  const [script, setScript] = useState("hiragana");
  const [mode, setMode] = useState("chart");
  const [showRomaji, setShowRomaji] = useState(true);
  const [scopeId, setScopeId] = useState("basic");
  const [quizType, setQuizType] = useState("read");

  const scope = SCOPES.find((item) => item.id === scopeId);
  const pool = useMemo(() => getKanaList(script, scope.sections), [script, scope]);

  const handleAnswer = (isCorrect) => {
    onProgressChange({
      ...progress,
      kanaCorrect: (progress.kanaCorrect || 0) + (isCorrect ? 1 : 0),
      kanaWrong: (progress.kanaWrong || 0) + (isCorrect ? 0 : 1),
    });
  };

  return (
    <>
      <h2>ひらがな・カタカナ</h2>
      <p className="subtitle">Learn the Japanese writing systems, then test yourself.</p>

      <div className="buttons">
        {KANA_SCRIPTS.map((item) => (
          <Button
            key={item.id}
            variant="secondary"
            active={script === item.id}
            onClick={() => setScript(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>

      <div className="buttons">
        <Button variant="secondary" active={mode === "chart"} onClick={() => setMode("chart")}>
          Chart
        </Button>
        <Button variant="secondary" active={mode === "practice"} onClick={() => setMode("practice")}>
          Practice
        </Button>

        {mode === "chart" && (
          <Button variant="secondary" onClick={() => setShowRomaji((value) => !value)}>
            {showRomaji ? "Hide romaji" : "Show romaji"}
          </Button>
        )}
      </div>

      {mode === "chart" ? (
        <KanaChart
          key={script}
          script={script}
          showRomaji={showRomaji}
          onSpeak={speakText}
        />
      ) : (
        <>
          <div className="alphabet-options-row">
            <span className="alphabet-options-label">Characters</span>
            {SCOPES.map((item) => (
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
            key={`${script}-${scopeId}-${quizType}`}
            createQuestion={() => createCharacterQuestion(quizType, pool)}
            onAnswer={handleAnswer}
            onSpeak={speakText}
          />
        </>
      )}
    </>
  );
}
