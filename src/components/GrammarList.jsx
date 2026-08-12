import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { GRAMMAR } from "../data/grammar";

function sortLevels(levels) {
  const order = {
    IT: 0,
    N1: 1,
    N2: 2,
    N3: 3,
    N4: 4,
    N5: 5,
  };

  return [...levels].sort((a, b) => {
    return (order[a] || 999) - (order[b] || 999);
  });
}

function getAvailableGrammarLevels() {
  const levels = new Set();

  for (const item of GRAMMAR) {
    if (item.level) {
      levels.add(item.level);
    }
  }

  return sortLevels([...levels]);
}

export default function GrammarList({ onSelectGrammar }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [collapsedLessons, setCollapsedLessons] = useState(new Set());

  const availableLevels = useMemo(() => getAvailableGrammarLevels(), []);

  const defaultLevel = availableLevels.includes("N3")
    ? "N3"
    : availableLevels[0] || "N3";

  const selectedLevel = searchParams.get("level") || defaultLevel;

  const setLevel = (level) => {
    setSearchParams({
      level,
    });

    setCollapsedLessons(new Set());
  };

  const grammarByLevel = useMemo(() => {
    return GRAMMAR.filter((item) => item.level === selectedLevel);
  }, [selectedLevel]);

  const lessonGroups = useMemo(() => {
    const lessonMap = new Map();

    for (const grammar of grammarByLevel) {
      const lesson = grammar.lesson || "Other";

      if (!lessonMap.has(lesson)) {
        lessonMap.set(lesson, []);
      }

      lessonMap.get(lesson).push(grammar);
    }

    return Array.from(lessonMap.entries()).map(([lesson, grammarItems]) => ({
      lesson,
      grammarItems,
    }));
  }, [grammarByLevel]);

  const toggleLesson = (lesson) => {
    setCollapsedLessons((prev) => {
      const next = new Set(prev);

      if (next.has(lesson)) {
        next.delete(lesson);
      } else {
        next.add(lesson);
      }

      return next;
    });
  };

  return (
    <section className="panel">
      <div className="vocabulary-list-header">
        <h2>Grammar Library</h2>

        <p className="subtitle">
          Choose a level and grammar pattern to study.
        </p>
      </div>

      <div className="jlpt-filter">
        {availableLevels.map((level) => (
          <button
            key={level}
            className={
              selectedLevel === level
                ? "level-filter-button active"
                : "level-filter-button"
            }
            onClick={() => setLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="dialogue-simple-list">
        {lessonGroups.length === 0 && (
          <div className="empty-dialogues">
            No grammar found for {selectedLevel}.
          </div>
        )}

        {lessonGroups.map(({ lesson, grammarItems }) => {
          const isCollapsed = collapsedLessons.has(lesson);

          return (
            <div key={lesson} className="lesson-group">
              <button
                type="button"
                className="lesson-header"
                onClick={() => toggleLesson(lesson)}
              >
                <span className="lesson-title">{lesson}</span>

                <span className="lesson-count">
                  {grammarItems.length}{" "}
                  {grammarItems.length === 1 ? "grammar" : "grammar patterns"}
                </span>

                {isCollapsed ? (
                  <ChevronDown size={20} />
                ) : (
                  <ChevronUp size={20} />
                )}
              </button>

              {isCollapsed && (
                <div className="lesson-dialogues">
                  {grammarItems.map((grammar) => (
                    <button
                      key={grammar.id}
                      type="button"
                      className="dialogue-simple-card grammar-simple-card"
                      onClick={() => onSelectGrammar(grammar)}
                    >
                      <div className="grammar-list-card-content">
                        <div className="grammar-list-card-title-row">
                          <span className="dialogue-status-icon">📖</span>

                          <span className="grammar-list-title">
                            {grammar.title}
                          </span>
                        </div>

                        {grammar.meaning && (
                          <p className="grammar-list-meaning">
                            {grammar.meaning}
                          </p>
                        )}

                        {grammar.structure && (
                          <p className="grammar-list-structure">
                            {grammar.structure}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}