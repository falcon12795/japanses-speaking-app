import { useMemo, useState } from "react";
import { speakJapaneseText, recognizeJapaneseSpeech } from "../utils/speech";
import { calculateSpeechScoreWithAcceptedAnswers } from "../utils/scoring";

export default function DialoguePractice({
  dialogue,
  dialogueIndex,
  totalDialogues,
  progress,
  onProgressChange,
  onBack,
  onPreviousDialogue,
  onNextDialogue,
}) {
  const [role, setRole] = useState("A");
  const [showAllScript, setShowAllScript] = useState(false);
  const [manualVisibleLineIds, setManualVisibleLineIds] = useState([]);
  const [manualHiddenLineIds, setManualHiddenLineIds] = useState([]);
  const [activeLineId, setActiveLineId] = useState(null);
  const [lineResults, setLineResults] = useState({});
  const [status, setStatus] = useState("Ready");

  const currentDialogue = dialogue;
  const resetPracticeState = () => {
    setShowAllScript(false);
    setManualVisibleLineIds([]);
    setManualHiddenLineIds([]);
    setActiveLineId(null);
    setLineResults({});
    setStatus("Ready");
  };

  const handlePreviousDialogue = () => {
    resetPracticeState();
    onPreviousDialogue();
  };

  const handleNextDialogue = () => {
    resetPracticeState();
    onNextDialogue();
  };

  const activeLine = useMemo(() => {
    if (!currentDialogue) return null;

    return currentDialogue.lines.find((line) => line.id === activeLineId);
  }, [currentDialogue, activeLineId]);

  if (!currentDialogue) {
    return (
      <section className="panel">
        <h2>Dialogue Practice</h2>
        <p>No dialogue selected.</p>

        <button className="back-button" onClick={onBack}>
          ← Back to Dialogue List
        </button>
      </section>
    );
  }

  const getAcceptedAnswers = (line) => {
    const answers = [
      line.japanese,
      line.reading,
      ...(line.acceptedAnswers || []),
    ];

    return answers.filter(Boolean);
  };

  const getLineScore = (line) => {
    const transcript = lineResults[line.id]?.transcript || "";
    const acceptedAnswers = getAcceptedAnswers(line);

    return calculateSpeechScoreWithAcceptedAnswers(
      transcript,
      acceptedAnswers
    );
  };

  const shouldHideLine = (line) => {
    if (showAllScript) {
      return false;
    }

    if (manualVisibleLineIds.includes(line.id)) {
      return false;
    }

    if (manualHiddenLineIds.includes(line.id)) {
      return true;
    }

    return line.speaker === role;
  };

  const toggleLineHidden = (line) => {
    const isHidden = shouldHideLine(line);

    if (isHidden) {
      setManualVisibleLineIds((prev) => {
        if (prev.includes(line.id)) return prev;
        return [...prev, line.id];
      });

      setManualHiddenLineIds((prev) =>
        prev.filter((id) => id !== line.id)
      );
    } else {
      setManualHiddenLineIds((prev) => {
        if (prev.includes(line.id)) return prev;
        return [...prev, line.id];
      });

      setManualVisibleLineIds((prev) =>
        prev.filter((id) => id !== line.id)
      );
    }
  };

  const hideMyRoleLines = () => {
    setShowAllScript(false);
    setManualVisibleLineIds([]);
    setManualHiddenLineIds([]);
    setActiveLineId(null);
    setStatus(`Hidden all lines for role ${role}.`);
  };

  const showAllLines = () => {
    setShowAllScript(true);
    setManualVisibleLineIds([]);
    setManualHiddenLineIds([]);
    setStatus("Showing all script lines.");
  };

  const resetAllSpeakResults = () => {
    setLineResults({});
    setActiveLineId(null);
    setStatus("All speaking results have been reset.");
  };

  const resetLineSpeakResult = (lineId) => {
    setLineResults((prev) => {
      const next = { ...prev };
      delete next[lineId];
      return next;
    });

    if (activeLineId === lineId) {
      setActiveLineId(null);
    }

    setStatus(`Speaking result for line ${lineId} has been reset.`);
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

      setLineResults((prev) => ({
        ...prev,
        [line.id]: {
          transcript: "",
          score: 0,
          status: "Listening...",
        },
      }));

      setStatus(`Listening for speaker ${line.speaker} line ${line.id}...`);

      const transcript = await recognizeJapaneseSpeech();

      const score = calculateSpeechScoreWithAcceptedAnswers(
        transcript,
        getAcceptedAnswers(line)
      );

      setLineResults((prev) => ({
        ...prev,
        [line.id]: {
          transcript,
          score,
          status: "Finished",
        },
      }));

      setStatus("Finished speaking practice.");

      onProgressChange({
        ...progress,
        dialoguePractice: (progress.dialoguePractice || 0) + 1,
      });
    } catch (error) {
      setLineResults((prev) => ({
        ...prev,
        [line.id]: {
          transcript: "",
          score: 0,
          status: error.message,
        },
      }));

      setStatus(error.message);
    }
  };

  const changeRole = (nextRole) => {
    setRole(nextRole);
    setShowAllScript(false);
    setManualVisibleLineIds([]);
    setManualHiddenLineIds([]);
    setActiveLineId(null);
    setLineResults({});
    setStatus(`Selected role ${nextRole}.`);
  };

  return (
    <section className="panel">
      <div className="dialogue-header">
        <div>
          <span className="level">{currentDialogue.level}</span>
          <h2>Dialogue Practice</h2>
          <h3>{currentDialogue.title}</h3>
          <p className="dialogue-counter">
            Dialogue {dialogueIndex + 1} / {totalDialogues}
          </p>
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

        <button className="danger" onClick={resetAllSpeakResults}>
          Reset All
        </button>

        <button className="back-button" onClick={onBack}>
          ← Back to Dialogue List
        </button>
      </div>

      <div className="dialogue-box">
        {currentDialogue.lines.map((line) => {
          const hidden = shouldHideLine(line);
          const lineResult = lineResults[line.id];
          const score = getLineScore(line);

          return (
            <div
              key={line.id}
              className={`dialogue-line ${
                line.speaker === "A" ? "speaker-a" : "speaker-b"
              } ${activeLineId === line.id ? "active-line" : ""}`}
            >
              <div className="speaker-badge">
                Speaker {line.speaker}
              </div>

              {hidden ? (
                <div className="hidden-dialogue-line">
                  <p>Hidden line. Try to speak this sentence.</p>
                </div>
              ) : (
                <div>
                  <p className="dialogue-japanese">{line.japanese}</p>

                  {line.reading && (
                    <p className="dialogue-reading">{line.reading}</p>
                  )}

                  <p className="dialogue-romaji">{line.romaji}</p>

                  <p className="dialogue-meaning">
                    {line.english} / {line.vietnamese}
                  </p>
                </div>
              )}

              <div className="buttons compact-buttons">
                <button onClick={() => listenLine(line)}>
                  GG Speech
                </button>

                <button onClick={() => speakLine(line)}>
                  Speak
                </button>

                <button onClick={() => toggleLineHidden(line)}>
                  {hidden ? "Show line" : "Hide line"}
                </button>

                {lineResult && (
                  <button
                    className="danger"
                    onClick={() => resetLineSpeakResult(line.id)}
                  >
                    Reset
                  </button>
                )}
              </div>

              {lineResult && (
                <div className="line-speaking-result">
                  <p className="label">You said:</p>
                  <p className="transcript">
                    {lineResult.transcript || "—"}
                  </p>

                  <p className="label">Score:</p>
                  <div className="small-score-box">
                    <span>{score}</span>/100
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${score}%` }}
                    />
                  </div>

                  <p className="line-status">{lineResult.status}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {activeLine && (
        <div className="dialogue-result">
          <h3>Current Practice Line</h3>

          <p className="label">Target:</p>
          <p className="transcript">{activeLine.japanese}</p>

          {activeLine.reading && (
            <>
              <p className="label">Reading:</p>
              <p className="transcript">{activeLine.reading}</p>
            </>
          )}

          <p className="label">Speaker:</p>
          <p className="transcript">Speaker {activeLine.speaker}</p>
        </div>
      )}

      <div className="buttons">
        <button onClick={handlePreviousDialogue}>
          ← Previous Dialogue
        </button>

        <button onClick={handleNextDialogue}>
          Next Dialogue →
        </button>
      </div>

      <p className="status">{status}</p>
    </section>
  );
}