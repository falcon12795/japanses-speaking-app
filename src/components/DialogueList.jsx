import { useState } from "react";
import { DIALOGUES_BY_LEVEL } from "../data/dialogues";

const LEVELS = ["N1", "N2", "N3", "N4", "N5"];

export default function DialogueList({
  onSelectDialogue,
}) {
  const [selectedLevel, setSelectedLevel] =
    useState("N3");

  const dialoguesByLevel = DIALOGUES_BY_LEVEL[selectedLevel] || [];

  const filteredDialogues =
    dialoguesByLevel.filter(
      (dialogue) =>
        dialogue.level === selectedLevel
    );

  return (
    <section className="panel">
      <h2>Dialogue Library</h2>

      <div className="jlpt-filter">
        {LEVELS.map((level) => (
          <button
            key={level}
            className={
              selectedLevel === level
                ? "level-filter-button active"
                : "level-filter-button"
            }
            onClick={() =>
              setSelectedLevel(level)
            }
          >
            {level}
          </button>
        ))}
      </div>

      <div className="dialogue-simple-list">
        {filteredDialogues.map(
          (dialogue) => (
            <div
              key={dialogue.id}
              className="dialogue-simple-card"
              onClick={() =>
                onSelectDialogue(dialogue)
              }
            >
              <span>
                {dialogue.title}
              </span>
            </div>
          )
        )}

        {filteredDialogues.length === 0 && (
          <div className="empty-dialogues">
            No dialogues found.
          </div>
        )}
      </div>
    </section>
  );
}