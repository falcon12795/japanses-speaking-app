import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { GRAMMAR } from "../data/grammar";
import CollapseGroup from "./common/CollapseGroup";
import EmptyState from "./common/EmptyState";
import FilterBar from "./common/FilterBar";
import ListCard from "./common/ListCard";
import Panel from "./common/Panel";

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

function getOpenLessonFromParams(searchParams) {
  return searchParams.get("openLesson") || "";
}

export default function GrammarList({ onSelectGrammar }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const availableLevels = useMemo(() => getAvailableGrammarLevels(), []);

  const defaultLevel = availableLevels.includes("N3")
    ? "N3"
    : availableLevels[0] || "N3";

  const selectedLevel = searchParams.get("level") || defaultLevel;
  const openLesson = getOpenLessonFromParams(searchParams);

  const setLevel = (level) => {
    setSearchParams({
      level,
    });
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
    const nextParams = {
      level: selectedLevel,
    };

    if (openLesson !== lesson) {
      nextParams.openLesson = lesson;
    }

    setSearchParams(nextParams);
  };

  return (
    <Panel>
      <div className="vocabulary-list-header">
        <h2>Grammar Library</h2>

        <p className="subtitle">
          Choose a level and grammar pattern to study.
        </p>
      </div>

      <FilterBar
        items={availableLevels}
        selectedValue={selectedLevel}
        onChange={setLevel}
        className="jlpt-filter"
      />

      <div className="collapse-list dialogue-simple-list">
        {lessonGroups.length === 0 && (
          <EmptyState>
            No grammar found for {selectedLevel}.
          </EmptyState>
        )}

        {lessonGroups.map(({ lesson, grammarItems }) => {
          const isOpen = openLesson === lesson;

          return (
            <CollapseGroup
              key={lesson}
              title={lesson}
              count={`${grammarItems.length} ${
                grammarItems.length === 1 ? "grammar" : "grammar patterns"
              }`}
              isOpen={isOpen}
              onToggle={() => toggleLesson(lesson)}
            >
              {grammarItems.map((grammar) => {
                const firstMeaning = grammar.meanings?.[0];
                const meaningCount = grammar.meanings?.length || 0;

                return (
                  <ListCard
                    key={grammar.id}
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

                      {firstMeaning?.meaning && (
                        <p className="grammar-list-meaning">
                          {firstMeaning.meaning}
                        </p>
                      )}

                      {meaningCount > 1 && (
                        <p className="grammar-list-meaning-count">
                          {meaningCount} meanings
                        </p>
                      )}
                    </div>
                  </ListCard>
                );
              })}
            </CollapseGroup>
          );
        })}
      </div>
    </Panel>
  );
}