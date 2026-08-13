import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { DIALOGUES_BY_LEVEL } from "../data/dialogues";
import CollapseGroup from "./common/CollapseGroup";
import EmptyState from "./common/EmptyState";
import FilterBar from "./common/FilterBar";
import ListCard from "./common/ListCard";
import Panel from "./common/Panel";

const STATUS_FILTERS = [
  { value: "all", label: "All" },
  { value: "not-started", label: "Not Started" },
  { value: "learning", label: "Learning" },
  { value: "completed", label: "Completed" },
  { value: "favorite", label: "Favorite" },
];

function sortJlptLevels(levels) {
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

function getAvailableDialogueLevels() {
  return sortJlptLevels(
    Object.entries(DIALOGUES_BY_LEVEL)
      .filter(([, dialogues]) => Array.isArray(dialogues) && dialogues.length > 0)
      .map(([level]) => level)
  );
}

function getDialogueStatus(dialogueId, progress = {}) {
  const favoriteDialogues = progress.favoriteDialogues || [];
  const completedDialogues = progress.completedDialogues || [];
  const dialogueScores = progress.dialogueScores || {};

  if (favoriteDialogues.includes(dialogueId)) return "favorite";
  if (completedDialogues.includes(dialogueId)) return "completed";
  if ((dialogueScores[dialogueId] || 0) > 0) return "learning";

  return "not-started";
}

function getDialogueStatusIcon(status) {
  if (status === "completed") return "✅";
  if (status === "favorite") return "⭐";
  if (status === "learning") return "📖";

  return "⭕";
}

function getOpenLessonFromParams(searchParams) {
  return searchParams.get("openLesson") || "";
}

export default function DialogueList({ progress = {}, onSelectDialogue }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const availableLevels = useMemo(() => getAvailableDialogueLevels(), []);
  const defaultLevel = availableLevels[0] || "N3";

  const selectedLevel = searchParams.get("level") || defaultLevel;
  const statusFilter = searchParams.get("status") || "all";
  const openLesson = getOpenLessonFromParams(searchParams);

  const setLevel = (level) => {
    setSearchParams({
      level,
      status: "all",
    });
  };

  const setStatus = (status) => {
    const nextParams = {
      level: selectedLevel,
      status,
    };

    if (openLesson) {
      nextParams.openLesson = openLesson;
    }

    setSearchParams(nextParams);
  };

  const filteredDialogues = useMemo(() => {
    const dialoguesByLevel = DIALOGUES_BY_LEVEL[selectedLevel] || [];

    return dialoguesByLevel.filter((dialogue) => {
      const status = getDialogueStatus(dialogue.id, progress);

      if (statusFilter === "all") return true;

      return status === statusFilter;
    });
  }, [selectedLevel, progress, statusFilter]);

  const lessonGroups = useMemo(() => {
    const seen = new Map();

    for (const dialogue of filteredDialogues) {
      const key = dialogue.lesson || "Other";

      if (!seen.has(key)) {
        seen.set(key, []);
      }

      seen.get(key).push(dialogue);
    }

    return Array.from(seen.entries()).map(([lesson, dialogues]) => ({
      lesson,
      dialogues,
    }));
  }, [filteredDialogues]);

  const toggleLesson = (lesson) => {
    const nextParams = {
      level: selectedLevel,
      status: statusFilter,
    };

    if (openLesson !== lesson) {
      nextParams.openLesson = lesson;
    }

    setSearchParams(nextParams);
  };

  return (
    <Panel>
      <div className="vocabulary-list-header">
        <h2>Dialogue Library</h2>

        <p className="subtitle">
          Choose a JLPT level and dialogue to start speaking practice.
        </p>
      </div>

      <FilterBar
        items={availableLevels}
        selectedValue={selectedLevel}
        onChange={setLevel}
        className="jlpt-filter"
      />

      <FilterBar
        items={STATUS_FILTERS}
        selectedValue={statusFilter}
        onChange={setStatus}
        className="status-filter"
        buttonClassName="status-button"
      />

      <div className="collapse-list dialogue-simple-list">
        {lessonGroups.length === 0 && (
          <EmptyState>
            No dialogues found for {selectedLevel}.
          </EmptyState>
        )}

        {lessonGroups.map(({ lesson, dialogues: lessonDialogues }) => {
          const isOpen = openLesson === lesson;

          return (
            <CollapseGroup
              key={lesson}
              title={lesson}
              count={`${lessonDialogues.length} ${
                lessonDialogues.length === 1 ? "dialogue" : "dialogues"
              }`}
              isOpen={isOpen}
              onToggle={() => toggleLesson(lesson)}
            >
              {lessonDialogues.map((dialogue) => {
                const status = getDialogueStatus(dialogue.id, progress);

                return (
                  <ListCard
                    key={dialogue.id}
                    className="dialogue-simple-card"
                    onClick={() => onSelectDialogue(dialogue)}
                  >
                    <span className="dialogue-status-icon">
                      {getDialogueStatusIcon(status)}
                    </span>

                    <span>{dialogue.title}</span>
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