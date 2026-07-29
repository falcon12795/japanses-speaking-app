import { useMemo, useState } from "react";
import { DIALOGUES } from "../data/dialogues";
import { speakJapaneseText, recognizeJapaneseSpeech } from "../utils/speech";
import { calculateSimpleSpeechScore } from "../utils/scoring";

export default function DialoguePractice({ progress, onProgressChange }) {
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [role, setRole] = useState("A");
  const [hiddenLineIds, setHiddenLineIds] = useState([]);
  const [activeLineId, setActiveLineId] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [status, setStatus] = useState("Ready");

  const currentDialogue = DIALOGUES[dialogueIndex];

  const activeLine = useMemo(() => {
    return currentDialogue.lines.find((line) => line.id === activeLineId);
  }, [currentDialogue, activeLineId]);

  const score = useMemo(() => {
    if (!activeLine) return 0;
    return calculateSimpleSpeechScore(transcript, activeLine.japanese);
  }, [transcript, activeLine]);

  const isLineHidden = (line) => {
    return hiddenLineIds.includes(line.id);
  };

  const shouldHideByRole = (line) => {
    return line.speaker === role;
  };

  const toggleLineHidden = (lineId) => {
    setHiddenLineIds((prev) => {
      if (prev.includes(lineId)) {
        return prev.filter((id) => id !== lineId);
      }

      return [...prev, lineId];
    });
  };

  const hideMyRoleLines = () => {
    const myLineIds = currentDialogue.lines
      .filter((line) => line.speaker === role)
      .map((line) => line.id);

    setHiddenLineIds(myLineIds);
    setTranscript("");
    setStatus(`Hidden all lines for role ${role}.`);
  };

  const showAllLines = () => {
    setHiddenLineIds([]);
    setTranscript("");
    setStatus("All lines are visible.");
  };

  const listenLine = (line) => {
    try {
      speakJapaneseText(line.japanese);
      setActiveLineId(line.id);
      setStatus(`Playing line ${line.id} by speaker ${line.speaker}...`);
    } catch (error) {
      setStatus(error.message);
    }
  };

  const speakLine = async (line) => {
    try {
      setActiveLineId(line.id);
      setTranscript("");
      setStatus(`Listening for speaker ${line.speaker} line ${line.id}...`);

      const result = await recognizeJapaneseSpeech();

      setTranscript(result);
      setStatus("Finished speaking practice.");

      onProgressChange({
        ...progress,
        dialoguePractice: progress.dialoguePractice + 1,
      });
    } catch (error) {
      setStatus(error.message);
    }
  };

  const nextDialogue = () => {
    setDialogueIndex((prev) => (prev + 1) % DIALOGUES.length);
    setHiddenLineIds([]);
    setActiveLineId(null);
    setTranscript("");
    setStatus("Ready");
  };

  const previousDialogue = () => {
    setDialogueIndex((prev) =>
      prev === 0 ? DIALOGUES.length - 1 : prev - 1
    );
    setHiddenLineIds([]);
    setActiveLineId(null);
    setTranscript("");
    setStatus("Ready");
  };

  const changeRole = (nextRole) => {
    setRole(nextRole);
    setHiddenLineIds([]);
    setActiveLineId(null);
    setTranscript("");
    setStatus(`Selected role ${nextRole}.`);
  };

  return (
    <section className="panel">
      <div className="dialogue-header">
        <div>
          <span className="level">{currentDialogue.level}</span>
          <h2>Dialogue Practice</h2>
          <h3>{currentDialogue.title}</h3>
          <p className="subtitle">{currentDialogue.description}</p>
        </div>
      </div>

      <div className="buttons">
        <button
          className={role === "A" ? "active" : ""}
          onClick={() => changeRole("A")}
        >
          Practice as A
        </button>

        <button
          className={role === "B" ? "active" : ""}
          onClick={() => changeRole("B")}
        >
          Practice as B
        </button>

        <button onClick={hideMyRoleLines}>Hide my lines</button>
        <button onClick={showAllLines}>Show all</button>
      </div>

      <div className="dialogue-box">
        {currentDialogue.lines.map((line) => {
          const manuallyHidden = isLineHidden(line);
          const rolePracticeLine = shouldHideByRole(line);
          const hidden = manuallyHidden || rolePracticeLine;

          return (
            <div
              key={line.id}
              className={`dialogue-line ${
                line.speaker === "A" ? "speaker-a" : "speaker-b"
              } ${activeLineId === line.id ? "active-line" : ""}`}
            >
              <div className="speaker-badge">Speaker {line.speaker}</div>

              {hidden ? (
                <div className="hidden-dialogue-line">
                  <p>Hidden line. Try to speak this sentence.</p>
                </div>
              ) : (
                <div>
                  <p className="dialogue-japanese">{line.japanese}</p>
                  <p className="dialogue-romaji">{line.romaji}</p>
                  <p className="dialogue-meaning">
                    {line.english} / {line.vietnamese}
                  </p>
                </div>
              )}

              <div className="buttons compact-buttons">
                <button onClick={() => listenLine(line)}>GG Speech</button>
                <button onClick={() => speakLine(line)}>Speak</button>
                <button onClick={() => toggleLineHidden(line.id)}>
                  {manuallyHidden ? "Show line" : "Hide line"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dialogue-result">
        <h3>Speaking Result</h3>

        <p className="label">Target:</p>
        <p className="transcript">
          {activeLine ? activeLine.japanese : "Select a line to practice."}
        </p>

        <p className="label">You said:</p>
        <p className="transcript">{transcript || "—"}</p>

        <p className="label">Score:</p>
        <div className="score-box">
          <span>{score}</span>/100
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${score}%` }} />
        </div>
      </div>

      <div className="buttons">
        <button onClick={previousDialogue}>Previous Dialogue</button>
        <button onClick={nextDialogue}>Next Dialogue</button>
      </div>

      <p className="status">{status}</p>
    </section>
  );
}