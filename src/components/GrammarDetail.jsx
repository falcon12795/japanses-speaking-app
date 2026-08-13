import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp, Volume2 } from "lucide-react";
import { speakJapaneseText } from "../utils/speech";

function toLines(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  return String(value)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function normalizeExamples(examples = []) {
  if (!Array.isArray(examples)) return [];

  return examples
    .map((example) => {
      if (typeof example === "string") {
        return {
          japanese: example,
          reading: "",
          english: "",
          vietnamese: "",
        };
      }

      return example;
    })
    .filter((example) => example?.japanese);
}

function normalizeMeaningItems(grammar) {
  if (Array.isArray(grammar?.meanings) && grammar.meanings.length > 0) {
    return grammar.meanings;
  }

  return [
    {
      id: `${grammar.id}-meaning-01`,
      title: "Ý nghĩa 1",
      meaning: grammar.meaning || "",
      usage: grammar.usage || grammar.structure || "",
      examples: grammar.examples || [],
      note: grammar.note || grammar.explanation || "",
    },
  ];
}

function normalizeGrammarNotes(grammar) {
  if (Array.isArray(grammar?.notes) && grammar.notes.length > 0) {
    return grammar.notes;
  }

  if (grammar?.note) {
    return [
      {
        title: "注意",
        lines: toLines(grammar.note),
      },
    ];
  }

  return [];
}

export default function GrammarDetail({ grammar, onBack }) {
  const [collapsedMeaningIds, setCollapsedMeaningIds] = useState(new Set());

  const meaningItems = useMemo(() => {
    if (!grammar) return [];
    return normalizeMeaningItems(grammar);
  }, [grammar]);

  const grammarNotes = useMemo(() => {
    if (!grammar) return [];
    return normalizeGrammarNotes(grammar);
  }, [grammar]);

  if (!grammar) {
    return (
      <section className="panel">
        <h2>Grammar not found</h2>

        <div className="buttons">
          <button type="button" onClick={onBack}>
            ← Back to Grammar List
          </button>
        </div>
      </section>
    );
  }

  const getMeaningId = (meaningItem, meaningIndex) => {
    return meaningItem.id || `${grammar.id}-meaning-${meaningIndex}`;
  };

  const toggleMeaning = (meaningId) => {
    setCollapsedMeaningIds((prev) => {
      const next = new Set(prev);

      if (next.has(meaningId)) {
        next.delete(meaningId);
      } else {
        next.add(meaningId);
      }

      return next;
    });
  };

  const handleListen = (text) => {
    try {
      speakJapaneseText(text);
    } catch {
      // Browser speech may not be supported.
    }
  };

  return (
    <section className="panel grammar-detail-panel">
      <div className="grammar-detail-title-area">
        <h2>{grammar.title}</h2>
      </div>

      {grammar.usage && (
        <div className="grammar-section-block">
          <div className="grammar-section-heading">
            <span className="grammar-section-number">1</span>
            <h3>Cách sử dụng</h3>
          </div>

          <div className="grammar-detail-usage-list">
            {toLines(grammar.usage).map((line, index) => (
              <p key={index} className="grammar-detail-usage-line">
                {line}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="grammar-section-block">
        <div className="grammar-section-heading">
          <span className="grammar-section-number">2</span>
          <h3>Ý nghĩa, cách sử dụng và ví dụ</h3>
        </div>

        <div className="grammar-meaning-card-list">
          {meaningItems.map((meaningItem, meaningIndex) => {
            const meaningId = getMeaningId(meaningItem, meaningIndex);
            const isCollapsed = collapsedMeaningIds.has(meaningId);

            const usageLines = toLines(
              meaningItem.usage || meaningItem.structure
            );

            const noteLines = toLines(
              meaningItem.note || meaningItem.explanation
            );

            const examples = normalizeExamples(meaningItem.examples);

            return (
              <article key={meaningId} className="grammar-meaning-card">
                <button
                  type="button"
                  className="grammar-meaning-card-toggle"
                  onClick={() => toggleMeaning(meaningId)}
                >
                    <span className="grammar-meaning-index">
                      Ý nghĩa {meaningIndex + 1}
                    </span>

                  <span className="grammar-meaning-toggle-icon">
                    {isCollapsed ? (
                      <ChevronDown size={22} strokeWidth={2.5} />
                    ) : (
                      <ChevronUp size={22} strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {!isCollapsed && (
                  <div className="grammar-meaning-card-body">
                    {meaningItem.meaning && (
                      <div className="grammar-meaning-row">
                        <p className="grammar-detail-meaning">
                          {meaningItem.meaning}
                        </p>
                      </div>
                    )}

                    {usageLines.length > 0 && (
                      <div className="grammar-meaning-row">
                        <p className="grammar-label">Cách sử dụng</p>

                        <div className="grammar-detail-usage-list">
                          {usageLines.map((line, index) => (
                            <p key={index} className="grammar-detail-usage-line">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {examples.length > 0 && (
                      <div className="grammar-meaning-row">
                        <p className="grammar-label">Ví dụ</p>

                        <div className="grammar-example-list">
                          {examples.map((example, index) => (
                            <div key={index} className="grammar-example-card">
                              <button
                                type="button"
                                className="dialogue-icon-button"
                                title="Listen"
                                onClick={() => handleListen(example.japanese)}
                              >
                                <Volume2 size={22} strokeWidth={2.5} />
                              </button>

                              <div className="grammar-example-content">
                                <p className="grammar-example-japanese">
                                  {example.japanese}
                                </p>

                                {example.reading && (
                                  <p className="grammar-example-reading">
                                    {example.reading}
                                  </p>
                                )}

                                {example.english && (
                                  <p className="grammar-example-meaning">
                                    {example.english}
                                  </p>
                                )}

                                {example.vietnamese && (
                                  <p className="grammar-example-meaning">
                                    {example.vietnamese}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {noteLines.length > 0 && (
                      <div className="grammar-meaning-row">
                        <p className="grammar-label">Chú ý cho ý nghĩa này</p>

                        <div className="grammar-note-box grammar-meaning-note-box">
                          {noteLines.map((line, index) => (
                            <p key={index}>{line}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {grammarNotes.length > 0 && (
        <div className="grammar-section-block grammar-common-note-section">
          <div className="grammar-section-heading">
            <span className="grammar-section-number">!</span>
            <h3>Chú ý chung</h3>
          </div>

          <div className="grammar-common-note-list">
            {grammarNotes.map((noteItem, noteIndex) => {
              const lines = toLines(noteItem.lines || noteItem.text || noteItem.note);

              return (
                <div
                  key={noteIndex}
                  className="grammar-note-box grammar-common-note-box"
                >
                  {noteItem.title && <h4>{noteItem.title}</h4>}

                  {lines.map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}