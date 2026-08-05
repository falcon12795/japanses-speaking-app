import { useState } from "react";
import { DIALOGUES } from "../data/dialogues";

export default function DialogueList({ onSelectDialogue }) {
  const [search, setSearch] = useState("");

  const filteredDialogues = DIALOGUES.filter((dialogue) =>
    (
      dialogue.title +
      dialogue.description +
      dialogue.level
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="panel">
      <h2>Dialogue Library</h2>

      <input
        className="dialogue-search"
        placeholder="Search dialogue..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="dialogue-list">
        {filteredDialogues.map((dialogue) => (
          <div
            key={dialogue.id}
            className="dialogue-card"
            onClick={() => onSelectDialogue(dialogue)}
          >
            <div className="dialogue-card-header">
              <span className="level">
                {dialogue.level}
              </span>

              <span>
                {dialogue.lines.length} lines
              </span>
            </div>

            <h3>{dialogue.title}</h3>

            <p>{dialogue.description}</p>

            <button>
              Start Practice →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}