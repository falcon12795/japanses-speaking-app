import { useMemo, useRef, useState } from "react";
import {
  Eye,
  EyeOff,
  Volume2,
  Mic,
  RotateCcw,
  Pause,
  Play,
} from "lucide-react";

import { speakJapaneseText, recognizeJapaneseSpeech } from "../utils/speech";
import { calculateSpeechScoreWithAcceptedAnswers } from "../utils/scoring";

export default function DialoguePractice({
  dialogue,
  progress,
  onProgressChange,
  onBack,
  onPreviousDialogue,
  onNextDialogue,
}) {
  const [role, setRole] = useState("B");
  const [showAllScript, setShowAllScript] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [manualVisibleLineIds, setManualVisibleLineIds] = useState([]);
  const [manualHiddenLineIds, setManualHiddenLineIds] = useState([]);
  const [activeLineId, setActiveLineId] = useState(null);
  const [lineResults, setLineResults] = useState({});
  const [status, setStatus] = useState("Ready");
  const [isListeningAll, setIsListeningAll] = useState(false);
  const [listenAllProgress, setListenAllProgress] = useState({ current: 0, total: 0 });
  const [isPausedListenAll, setIsPausedListenAll] = useState(false);
  const listenAllAbortRef = useRef(false);

  const currentDialogue = dialogue;

  const activeLine = useMemo(() => {
    if (!currentDialogue) return null;

    return currentDialogue.lines.find((line) => line.id === activeLineId);
  }, [currentDialogue, activeLineId]);

  const dialogueStatus = useMemo(() => {
    if (!currentDialogue) return { label: "Not Started", icon: "⭕", linesCompleted: 0, total: 0, avgScore: null };

    const total = currentDialogue.lines.length;
    const spokenLines = currentDialogue.lines.filter(
      (line) => lineResults[line.id]?.transcript
    );
    const linesCompleted = spokenLines.length;
    const allLinesSpoken = total > 0 && linesCompleted === total;

    const avgScore = allLinesSpoken
      ? Math.round(spokenLines.reduce((sum, line) => sum + (lineResults[line.id]?.score || 0), 0) / total)
      : null;

    const savedCompleted = (progress.completedDialogues || []).includes(currentDialogue.id);
    const isCompleted = savedCompleted || (allLinesSpoken && avgScore >= 80);

    const savedScore = progress.dialogueScores?.[currentDialogue.id] || 0;
    const hasAnyResult = linesCompleted > 0 || savedScore > 0;

    const isFavorite = (progress.favoriteDialogues || []).includes(currentDialogue.id);

    if (isFavorite) return { label: "Favorite", icon: "⭐", linesCompleted, total, avgScore };
    if (isCompleted) return { label: "Completed", icon: "✅", linesCompleted, total, avgScore };
    if (hasAnyResult) return { label: "Learning", icon: "📖", linesCompleted, total, avgScore };
    return { label: "Not Started", icon: "⭕", linesCompleted, total, avgScore: null };
  }, [currentDialogue, lineResults, progress]);

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

  const resetPracticeState = () => {
    window.speechSynthesis?.cancel();
    listenAllAbortRef.current = true;
    setIsListeningAll(false);
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

  const changeRole = (nextRole) => {
    setRole(nextRole);
    setShowAllScript(false);
    setManualVisibleLineIds([]);
    setManualHiddenLineIds([]);
    setActiveLineId(null);
    setLineResults({});
    setStatus(`Selected role ${nextRole}.`);
  };

  const toggleSubtitle = () => {
    setShowSubtitle((prev) => !prev);
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

  // Plays every line in order, waiting for each utterance to finish before advancing
  const listenAll = async () => {
    if (isListeningAll) {
      window.speechSynthesis?.cancel();
      listenAllAbortRef.current = true;
      setIsListeningAll(false);
      setIsPausedListenAll(false);
      setStatus("Listen All stopped.");
      return;
    }

    if (!window.speechSynthesis) {
      setStatus("Text-to-speech is not supported in this browser.");
      return;
    }

    listenAllAbortRef.current = false;
    setIsListeningAll(true);
    setIsPausedListenAll(false);
    setListenAllProgress({ current: 0, total: currentDialogue.lines.length });

    for (const [idx, line] of currentDialogue.lines.entries()) {
      if (listenAllAbortRef.current) break;

      setActiveLineId(line.id);
      setListenAllProgress({ current: idx + 1, total: currentDialogue.lines.length });
      setStatus(`(${idx + 1}/${currentDialogue.lines.length}) Playing ${line.speaker}...`);

      await new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(line.japanese);
        utterance.lang = "ja-JP";
        utterance.rate = 0.85;
        utterance.pitch = 1;
        utterance.onend = resolve;
        utterance.onerror = resolve;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      });
    }

    if (!listenAllAbortRef.current) {
      setStatus("Finished listening to all lines.");
      setActiveLineId(null);
    }

    setIsListeningAll(false);
    setIsPausedListenAll(false);
  };

  const togglePauseListenAll = () => {
    if (!window.speechSynthesis) return;
    if (isPausedListenAll) {
      window.speechSynthesis.resume();
      setIsPausedListenAll(false);
    } else {
      window.speechSynthesis.pause();
      setIsPausedListenAll(true);
    }
  };

  const buildNextProgressAfterSpeak = (score, nextLineResults) => {
    const currentBest = progress.dialogueScores?.[currentDialogue.id] || 0;
    const nextBest = Math.max(currentBest, score);

    const spokenLines = currentDialogue.lines.filter(
      (line) => nextLineResults[line.id]?.transcript
    );
    const allLinesSpoken = spokenLines.length === currentDialogue.lines.length;
    const avgScore = allLinesSpoken
      ? spokenLines.reduce((sum, line) => sum + (nextLineResults[line.id]?.score || 0), 0) / spokenLines.length
      : 0;

    const isCompleted = allLinesSpoken && avgScore >= 80;
    const completedDialogues = progress.completedDialogues || [];

    const nextCompletedDialogues =
      isCompleted && !completedDialogues.includes(currentDialogue.id)
        ? [...completedDialogues, currentDialogue.id]
        : completedDialogues;

    return {
      ...progress,
      dialoguePractice: (progress.dialoguePractice || 0) + 1,
      dialogueScores: {
        ...(progress.dialogueScores || {}),
        [currentDialogue.id]: nextBest,
      },
      completedDialogues: nextCompletedDialogues,
    };
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

      const nextLineResult = {
        transcript,
        score,
        status: "Finished",
      };

      const nextLineResults = {
        ...lineResults,
        [line.id]: nextLineResult,
      };

      setLineResults(nextLineResults);

      const nextProgress = buildNextProgressAfterSpeak(
        score,
        nextLineResults
      );

      onProgressChange(nextProgress);

      const spokenLines = currentDialogue.lines.filter(
        (dialogueLine) => nextLineResults[dialogueLine.id]?.transcript
      );
      const allLinesSpoken = spokenLines.length === currentDialogue.lines.length;

      if (allLinesSpoken) {
        const avgScore = Math.round(
          spokenLines.reduce((sum, line) => sum + (nextLineResults[line.id]?.score || 0), 0) / spokenLines.length
        );
        if (avgScore >= 80) {
          setStatus(`Dialogue completed! Average score: ${avgScore}/100 ✅`);
        } else {
          setStatus(`All lines spoken. Average score: ${avgScore}/100. Need ≥80 to complete.`);
        }
      } else {
        setStatus("Finished speaking practice.");
      }
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

  return (
    <section className="panel">
      <div className="dialogue-header">

        <div className="dialogue-title-row">
          <h3>{currentDialogue.title}</h3>

          <span className="dialogue-status-badge">
            <span className="dialogue-status-icon">{dialogueStatus.icon}</span>
            <span className="dialogue-status-label">{dialogueStatus.label}</span>
            {dialogueStatus.total > 0 && (
              <span className="dialogue-lines-progress">
                {dialogueStatus.linesCompleted}/{dialogueStatus.total}
                {dialogueStatus.avgScore !== null && (
                  <> · avg {dialogueStatus.avgScore}/100</>
                )}
              </span>
            )}
          </span>
        </div>

        {currentDialogue.description && (
          <p className="subtitle">{currentDialogue.description}</p>
        )}
      </div>

      <div className="buttons dialogue-top-actions">
        <button
          className={role === "A" ? "active" : ""}
          onClick={() => changeRole("A")}
        >
          Speak A
        </button>

        <button
          className={role === "B" ? "active" : ""}
          onClick={() => changeRole("B")}
        >
          Speak B
        </button>

        <button
          className={isListeningAll ? "active" : ""}
          onClick={listenAll}
        >
          {isListeningAll ? "⏹ Stop" : "🔊 Listen All"}
        </button>

        <button onClick={hideMyRoleLines}>Hide my lines</button>

        <button onClick={showAllLines}>Show all</button>

        <button onClick={toggleSubtitle}>
          {showSubtitle ? "Hide Sub" : "Show Sub"}
        </button>

        <button className="danger" onClick={resetAllSpeakResults}>
          Reset All
        </button>

        <button className="back-button" onClick={onBack}>
          ← Back to Dialogue List
        </button>
      </div>

      {isListeningAll && (
        <div className="listen-all-bar">
          <div className="listen-all-track">
            <div
              className="listen-all-fill"
              style={{
                width: `${
                  listenAllProgress.total > 0
                    ? (listenAllProgress.current / listenAllProgress.total) * 100
                    : 0
                }%`,
              }}
            />
          </div>
          <span className="listen-all-counter">
            {listenAllProgress.current}/{listenAllProgress.total}
          </span>
          <button className="dialogue-icon-button" onClick={togglePauseListenAll}>
            {isPausedListenAll ? <Play size={16} strokeWidth={2.5} /> : <Pause size={16} strokeWidth={2.5} />}
          </button>
        </div>
      )}

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
              <div className="speaker-toolbar">
                <div className="speaker-action-area">
                  <div className="speaker-action-icons">
                    <button
                      type="button"
                      className="dialogue-icon-button"
                      title="Listen"
                      onClick={() => listenLine(line)}
                    >
                      <Volume2 size={22} strokeWidth={2.5} />
                    </button>

                    <button
                      type="button"
                      className="dialogue-icon-button"
                      title="Speak"
                      onClick={() => speakLine(line)}
                    >
                      <Mic size={22} strokeWidth={2.5} />
                    </button>

                    <button
                      type="button"
                      className="dialogue-icon-button"
                      title={hidden ? "Show this sentence" : "Hide this sentence"}
                      onClick={() => toggleLineHidden(line)}
                    >
                      {hidden ? (
                        <EyeOff size={22} strokeWidth={2.5} />
                      ) : (
                        <Eye size={22} strokeWidth={2.5} />
                      )}
                    </button>

                    <button
                      type="button"
                      className="dialogue-icon-button reset-icon-button"
                      title="Reset this sentence"
                      onClick={() => resetLineSpeakResult(line.id)}
                    >
                      <RotateCcw size={22} strokeWidth={2.5} />
                    </button>
                  </div>

                  {hidden ? (
                    <p className="hidden-dialogue-line">
                      Hidden line. Try to speak this sentence.
                    </p>
                  ) : (
                    <div>
                      <p className="dialogue-japanese">{line.japanese}</p>

                      {showSubtitle && (
                        <>
                          {line.reading && (
                            <p className="dialogue-reading">{line.reading}</p>
                          )}

                          {line.romaji && (
                            <p className="dialogue-romaji">{line.romaji}</p>
                          )}

                          {(line.english || line.vietnamese) && (
                            <p className="dialogue-meaning">
                              {line.english} / {line.vietnamese}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>

              </div>

              {lineResult && (
                <div className="line-speaking-result">

                  <p className="transcript">
                    {lineResult.transcript || "—"}
                  </p>

                  <p className="label">Score:</p>

                  <div className="small-score-box">
                    <span>{score}</span>/100
                  </div>
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
        <button onClick={handlePreviousDialogue}>← Previous Dialogue</button>
        <button onClick={handleNextDialogue}>Next Dialogue →</button>
      </div>

      <p className="status">{status}</p>
    </section>
  );
}