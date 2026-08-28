import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import CollapseGroup from "./common/CollapseGroup";
import EmptyState from "./common/EmptyState";
import FilterBar from "./common/FilterBar";
import Panel from "./common/Panel";
import Button from "./common/Button";

function sortGrammarLevels(levels) {
  const jlptOrder = { IT: 0, N1: 1, N2: 2, N3: 3, N4: 4, N5: 5 };
  const hasJlpt = levels.some((l) => l in jlptOrder);

  if (hasJlpt) {
    return [...levels].sort((a, b) => (jlptOrder[a] || 999) - (jlptOrder[b] || 999));
  }

  return [...levels].sort();
}

function getAvailableGrammarLevels(grammar) {
  const levels = new Set();

  for (const item of grammar) {
    if (item.level) {
      levels.add(item.level);
    }
  }

  return sortGrammarLevels([...levels]);
}

function getOpenLessonFromParams(searchParams) {
  return searchParams.get("openLesson") || "";
}

export default function GrammarList({ onSelectGrammar }) {
  const navigate = useNavigate();
  const { grammar } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedGrammarIds, setSelectedGrammarIds] = useState([]);

  const availableLevels = useMemo(() => getAvailableGrammarLevels(grammar), [grammar]);

  const defaultLevel = availableLevels.includes("N3")
    ? "N3"
    : availableLevels[0] || availableLevels[0] || "A1";

  const selectedLevel = searchParams.get("level") || defaultLevel;
  const openLesson = getOpenLessonFromParams(searchParams);

  const setLevel = (level) => {
    setSelectedGrammarIds([]);
    setSearchParams({
      level,
    });
  };

  const grammarByLevel = useMemo(() => {
    return grammar.filter((item) => item.level === selectedLevel);
  }, [grammar, selectedLevel]);

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

  const isSelected = (grammarId) => {
    return selectedGrammarIds.includes(grammarId);
  };

  const isLessonFullySelected = (grammars) => {
    return grammars.every((grammar) =>
      selectedGrammarIds.includes(grammar.id)
    );
  };
  const handleSelectAllLesson = (
    lessonName,
    lessonGrammars
  ) => {
    const grammarIds = lessonGrammars.map(
      (g) => g.id
    );

    const allSelected =
      grammarIds.every((id) =>
        selectedGrammarIds.includes(id)
      );

    if (allSelected) {
      setSelectedGrammarIds((prev) =>
        prev.filter(
          (id) => !grammarIds.includes(id)
        )
      );
    } else {
      setSelectedGrammarIds((prev) => [
        ...new Set([
          ...prev,
          ...grammarIds,
        ]),
      ]);
    }
  };

  const toggleGrammarSelection = (event, grammarId) => {
    event.stopPropagation();

    setSelectedGrammarIds((prev) => {
      if (prev.includes(grammarId)) {
        return prev.filter((id) => id !== grammarId);
      }

      return [...prev, grammarId];
    });
  };

  const startTraining = () => {
    if (selectedGrammarIds.length === 0) return;

    const ids = selectedGrammarIds.join(",");

    navigate(`/grammar-training?ids=${encodeURIComponent(ids)}`);
  };

  return (
    <Panel>
      <div className="grammar-list-top-row">
        <div className="grammar-list-header-area">
          <h2>Grammar Library</h2>

          <p className="subtitle">
            Choose a level and grammar pattern to study.
          </p>
        </div>

        <Button
          variant="primary"
          className="grammar-training-button"
          disabled={selectedGrammarIds.length === 0}
          onClick={startTraining}
        >
          Training
        </Button>
      </div>

      <FilterBar
        items={availableLevels}
        selectedValue={selectedLevel}
        onChange={setLevel}
        className="jlpt-filter"
      />

      {selectedGrammarIds.length > 0 && (
        <div className="grammar-selected-summary">
          Selected {selectedGrammarIds.length} grammar pattern
          {selectedGrammarIds.length > 1 ? "s" : ""}
        </div>
      )}

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
              headerActions={
                <Button
                  variant={
                    isLessonFullySelected(grammarItems)
                      ? "primary"
                      : "secondary"
                  }
                  size="small"
                  onClick={(event) => {
                    event.stopPropagation();

                    handleSelectAllLesson(
                      lesson,
                      grammarItems
                    );
                  }}
                >
                  {isLessonFullySelected(grammarItems)
                    ? "✓ Selected All"
                    : "Select All"}
                </Button>
              }
              count={`${grammarItems.length} ${grammarItems.length === 1
                  ? "grammar"
                  : "grammar patterns"
                }`}
              isOpen={isOpen}
              onToggle={() => toggleLesson(lesson)}
            >
              {grammarItems.map((grammar) => {
                const firstMeaning = grammar.meanings?.[0];
                const meaningCount = grammar.meanings?.length || 0;
                const selected = isSelected(grammar.id);

                return (
                  <div
                    key={grammar.id}
                    className={`list-card dialogue-simple-card grammar-simple-card grammar-selectable-card ${
                      selected ? "grammar-selected-card" : ""
                    }`}
                    role="button"
                    tabIndex={0}
                    onClick={() => onSelectGrammar(grammar)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        onSelectGrammar(grammar);
                      }
                    }}
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

                    <button
                      type="button"
                      className={`grammar-select-button ${
                        selected ? "selected" : ""
                      }`}
                      aria-label={
                        selected
                          ? `Unselect ${grammar.title}`
                          : `Select ${grammar.title}`
                      }
                      onClick={(event) =>
                        toggleGrammarSelection(event, grammar.id)
                      }
                    />
                  </div>
                );
              })}
            </CollapseGroup>
          );
        })}
      </div>
    </Panel>
  );
}