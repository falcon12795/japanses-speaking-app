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

import Badge from "./common/Badge";
import Button from "./common/Button";
import IconButton from "./common/IconButton";
import Panel from "./common/Panel";
import ScoreBox from "./common/ScoreBox";

export default function DialoguePractice({
  dialogue,
  progress = {},
  onProgressChange = () => {},
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
  const [listenAllProgress, setListenAllProgress] = useState({
    current: 0,
    total: 0,
  });
  const [isPausedListenAll, setIsPausedListenAll] = useState(false);
  const listenAllAbortRef = useRef(false);

  const [isPracticing, setIsPracticing] = useState(false);
  const [practiceProgress, setPracticeProgress] = useState({
    current: 0,
    total: 0,
  });
  const [practiceRetryLineId, setPracticeRetryLineId] = useState(null);
  const [practiceStartIndex, setPracticeStartIndex] = useState(0);
  const practiceAbortRef = useRef(false);

  const currentDialogue = dialogue;

  const getCompletedPracticeRoles = (sourceProgress = progress) => {
    if (!currentDialogue) return [];

    return sourceProgress.practiceCompletedRoles?.[currentDialogue.id] || [];
  };

  const isPracticeRoleCompleted = (targetRole, sourceProgress = progress) => {
    return getCompletedPracticeRoles(sourceProgress).includes(targetRole);
  };

  const areBothPracticeRolesCompleted = (sourceProgress = progress) => {
    const completedRoles = getCompletedPracticeRoles(sourceProgress);

    return completedRoles.includes("A") && completedRoles.includes("B");
  };

  const activeLine = useMemo(() => {
    if (!currentDialogue) return null;

    return currentDialogue.lines.find((line) => line.id === activeLineId);
  }, [currentDialogue, activeLineId]);

  const dialogueStatus = useMemo(() => {
    if (!currentDialogue) {
      return {
        label: "Not Started",
        icon: "⭕",
        linesCompleted: 0,
        total: 0,
        avgScore: null,
      };
    }

    const total = currentDialogue.lines.length;

    const spokenLines = currentDialogue.lines.filter(
      (line) => lineResults[line.id]?.transcript
    );

    const linesCompleted = spokenLines.length;
    const allLinesSpoken = total > 0 && linesCompleted === total;

    const avgScore = allLinesSpoken
      ? Math.round(
          spokenLines.reduce(
            (sum, line) => sum + (lineResults[line.id]?.score || 0),
            0
          ) / total
        )
      : null;

    const savedCompleted = (progress.completedDialogues || []).includes(
      currentDialogue.id
    );

    const bothPracticeRolesCompleted =
      areBothPracticeRolesCompleted(progress);

    const isCompleted =
      savedCompleted ||
      bothPracticeRolesCompleted ||
      (allLinesSpoken && avgScore >= 80);

    const savedScore = progress.dialogueScores?.[currentDialogue.id] || 0;
    const hasAnyResult = linesCompleted > 0 || savedScore > 0;

    const isFavorite = (progress.favoriteDialogues || []).includes(
      currentDialogue.id
    );

    if (isFavorite) {
      return {
        label: "Favorite",
        icon: "⭐",
        linesCompleted,
        total,
        avgScore,
      };
    }

    if (isCompleted) {
      return {
        label: "Completed",
        icon: "✅",
        linesCompleted,
        total,
        avgScore,
      };
    }

    if (hasAnyResult) {
      return {
        label: "Learning",
        icon: "📖",
        linesCompleted,
        total,
        avgScore,
      };
    }

    return {
      label: "Not Started",
      icon: "⭕",
      linesCompleted,
      total,
      avgScore: null,
    };
  }, [currentDialogue, lineResults, progress]);

  if (!currentDialogue) {
    return (
      <Panel>
        <h2>Dialogue Practice</h2>
        <p>No dialogue selected.</p>
      </Panel>
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
    if (showAllScript) return false;
    if (manualVisibleLineIds.includes(line.id)) return false;
    if (manualHiddenLineIds.includes(line.id)) return true;

    return line.speaker === role;
  };

  const resetPracticeState = () => {
    window.speechSynthesis?.cancel();

    listenAllAbortRef.current = true;
    practiceAbortRef.current = true;

    setIsListeningAll(false);
    setIsPausedListenAll(false);
    setIsPracticing(false);

    setPracticeProgress({
      current: 0,
      total: 0,
    });

    setPracticeRetryLineId(null);
    setPracticeStartIndex(0);

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
    setPracticeRetryLineId(null);
    setPracticeStartIndex(0);
    setPracticeProgress({
      current: 0,
      total: 0,
    });
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
    setPracticeRetryLineId(null);
    setPracticeStartIndex(0);
    setPracticeProgress({
      current: 0,
      total: 0,
    });
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

  const speakLineText = (line) => {
    return new Promise((resolve) => {
      if (!window.speechSynthesis) {
        resolve();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(line.japanese);
      utterance.lang = "ja-JP";
      utterance.rate = 0.85;
      utterance.pitch = 1;
      utterance.onend = resolve;
      utterance.onerror = resolve;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    });
  };

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

    setListenAllProgress({
      current: 0,
      total: currentDialogue.lines.length,
    });

    for (const [idx, line] of currentDialogue.lines.entries()) {
      if (listenAllAbortRef.current) break;

      setActiveLineId(line.id);

      setListenAllProgress({
        current: idx + 1,
        total: currentDialogue.lines.length,
      });

      setStatus(
        `(${idx + 1}/${currentDialogue.lines.length}) Playing ${line.speaker}...`
      );

      await speakLineText(line);
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

    const allLinesSpoken =
      spokenLines.length === currentDialogue.lines.length;

    const avgScore = allLinesSpoken
      ? spokenLines.reduce(
          (sum, line) => sum + (nextLineResults[line.id]?.score || 0),
          0
        ) / spokenLines.length
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

  const buildNextProgressAfterPracticeRole = (
    completedRole,
    nextLineResults
  ) => {
    const currentPracticeCompletedRoles =
      progress.practiceCompletedRoles?.[currentDialogue.id] || [];

    const nextPracticeCompletedRoles = currentPracticeCompletedRoles.includes(
      completedRole
    )
      ? currentPracticeCompletedRoles
      : [...currentPracticeCompletedRoles, completedRole];

    const isBothRolesCompleted =
      nextPracticeCompletedRoles.includes("A") &&
      nextPracticeCompletedRoles.includes("B");

    const completedDialogues = progress.completedDialogues || [];

    const nextCompletedDialogues =
      isBothRolesCompleted && !completedDialogues.includes(currentDialogue.id)
        ? [...completedDialogues, currentDialogue.id]
        : completedDialogues;

    const roleLines = currentDialogue.lines.filter(
      (line) => line.speaker === completedRole
    );

    const roleScores = roleLines
      .map((line) => nextLineResults[line.id]?.score)
      .filter((score) => typeof score === "number");

    const roleAverageScore =
      roleScores.length > 0
        ? Math.round(
            roleScores.reduce((sum, score) => sum + score, 0) /
              roleScores.length
          )
        : 0;

    const currentBestScore =
      progress.dialogueScores?.[currentDialogue.id] || 0;

    return {
      ...progress,

      dialoguePractice:
        (progress.dialoguePractice || 0) + roleScores.length,

      dialogueScores: {
        ...(progress.dialogueScores || {}),
        [currentDialogue.id]: Math.max(currentBestScore, roleAverageScore),
      },

      dialogueRoleScores: {
        ...(progress.dialogueRoleScores || {}),
        [currentDialogue.id]: {
          ...(progress.dialogueRoleScores?.[currentDialogue.id] || {}),
          roleAverageScore,
        },
      },

      practiceCompletedRoles: {
        ...(progress.practiceCompletedRoles || {}),
        [currentDialogue.id]: nextPracticeCompletedRoles,
      },

      completedDialogues: nextCompletedDialogues,
    };
  };

  const practiceDialogue = async () => {
    if (isPracticing) {
      practiceAbortRef.current = true;
      window.speechSynthesis?.cancel();
      setIsPracticing(false);
      setStatus("Practice stopped.");
      return;
    }

    if (!currentDialogue?.lines?.length) {
      setStatus("No dialogue lines to practice.");
      return;
    }

    practiceAbortRef.current = false;
    listenAllAbortRef.current = true;
    window.speechSynthesis?.cancel();

    setIsListeningAll(false);
    setIsPausedListenAll(false);
    setIsPracticing(true);

    const startIndex = practiceStartIndex || 0;
    let nextLineResults = { ...lineResults };

    setPracticeProgress({
      current: startIndex,
      total: currentDialogue.lines.length,
    });

    setManualVisibleLineIds([]);
    setManualHiddenLineIds([]);

    try {
      for (let idx = startIndex; idx < currentDialogue.lines.length; idx += 1) {
        if (practiceAbortRef.current) break;

        const line = currentDialogue.lines[idx];

        setActiveLineId(line.id);

        setPracticeProgress({
          current: idx + 1,
          total: currentDialogue.lines.length,
        });

        if (line.speaker === role) {
          setStatus(
            `Practice Speaker ${role}: Line ${line.id}. Please speak this sentence.`
          );

          setLineResults((prev) => ({
            ...prev,
            [line.id]: {
              transcript: "",
              score: 0,
              status: "Listening...",
            },
          }));

          const transcript = await recognizeJapaneseSpeech();

          if (practiceAbortRef.current) break;

          const score = calculateSpeechScoreWithAcceptedAnswers(
            transcript,
            getAcceptedAnswers(line)
          );

          const nextLineResult = {
            transcript,
            score,
            status: score >= 80 ? "Passed" : "Need retry",
          };

          nextLineResults = {
            ...nextLineResults,
            [line.id]: nextLineResult,
          };

          setLineResults(nextLineResults);

          const nextProgress = buildNextProgressAfterSpeak(
            score,
            nextLineResults
          );

          onProgressChange(nextProgress);

          if (score < 80) {
            setPracticeStartIndex(idx);
            setPracticeRetryLineId(line.id);
            setIsPracticing(false);
            setStatus(
              `Line ${line.id}: ${score}/100. Need ≥80 to continue. Press Practice again to retry this line.`
            );
            return;
          }

          setPracticeStartIndex(idx + 1);
          setPracticeRetryLineId(null);
          setStatus(
            `Line ${line.id}: ${score}/100 ✅ Passed. Moving to next line...`
          );
        } else {
          setStatus(
            `Speaker ${line.speaker}: Auto reading line ${line.id}...`
          );

          await speakLineText(line);
        }
      }

      if (!practiceAbortRef.current) {
        const nextProgress = buildNextProgressAfterPracticeRole(
          role,
          nextLineResults
        );

        onProgressChange(nextProgress);

        const completedRoles =
          nextProgress.practiceCompletedRoles?.[currentDialogue.id] || [];

        const isBothDone =
          completedRoles.includes("A") && completedRoles.includes("B");

        setPracticeStartIndex(0);
        setPracticeRetryLineId(null);

        setPracticeProgress({
          current: currentDialogue.lines.length,
          total: currentDialogue.lines.length,
        });

        setActiveLineId(null);

        if (isBothDone) {
          setStatus(
            "Practice completed for both Speaker A and Speaker B. Dialogue completed ✅"
          );
        } else {
          const otherRole = role === "A" ? "B" : "A";

          setStatus(
            `Practice Speaker ${role} done ✅. Please practice Speaker ${otherRole} to complete this dialogue.`
          );
        }
      }
    } catch (error) {
      setStatus(error.message || "Practice failed.");
    } finally {
      setIsPracticing(false);
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

      const allLinesSpoken =
        spokenLines.length === currentDialogue.lines.length;

      if (allLinesSpoken) {
        const avgScore = Math.round(
          spokenLines.reduce(
            (sum, line) => sum + (nextLineResults[line.id]?.score || 0),
            0
          ) / spokenLines.length
        );

        if (avgScore >= 80) {
          setStatus(`Dialogue completed! Average score: ${avgScore}/100 ✅`);
        } else {
          setStatus(
            `All lines spoken. Average score: ${avgScore}/100. Need ≥80 to complete.`
          );
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
    <Panel>
      <div className="dialogue-fixed-header">
        <div className="dialogue-header">
          <div className="dialogue-title-row">
            <h3>{currentDialogue.title}</h3>

            <span className="dialogue-status-badge">
              <span className="dialogue-status-icon">
                {dialogueStatus.icon}
              </span>

              <span className="dialogue-status-label">
                {dialogueStatus.label}
              </span>

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
          <Button
            variant={role === "A" ? "primary" : "secondary"}
            onClick={() => changeRole("A")}
          >
            Speak A {isPracticeRoleCompleted("A") ? "✅" : ""}
          </Button>

          <Button
            variant={role === "B" ? "primary" : "secondary"}
            onClick={() => changeRole("B")}
          >
            Speak B {isPracticeRoleCompleted("B") ? "✅" : ""}
          </Button>

          <Button
            variant={isListeningAll ? "primary" : "secondary"}
            onClick={listenAll}
          >
            {isListeningAll ? "⏹ Stop" : "🔊 Listen All"}
          </Button>

          <Button
            variant={isPracticing ? "success" : "secondary"}
            onClick={practiceDialogue}
          >
            {isPracticing
              ? "⏹ Stop Practice"
              : practiceRetryLineId
                ? `🔁 Retry line ${practiceRetryLineId}`
                : "🎯 Practice"}
          </Button>

          <Button variant="secondary" onClick={hideMyRoleLines}>
            Hide my lines
          </Button>

          <Button variant="secondary" onClick={showAllLines}>
            Show all
          </Button>

          <Button variant="secondary" onClick={toggleSubtitle}>
            {showSubtitle ? "Hide Sub" : "Show Sub"}
          </Button>

          <Button variant="danger" onClick={resetAllSpeakResults}>
            Reset All
          </Button>
        </div>

        {isListeningAll && (
          <div className="listen-all-bar">
            <div className="listen-all-track">
              <div
                className="listen-all-fill"
                style={{
                  width: `${
                    listenAllProgress.total > 0
                      ? (listenAllProgress.current / listenAllProgress.total) *
                        100
                      : 0
                  }%`,
                }}
              />
            </div>

            <span className="listen-all-counter">
              {listenAllProgress.current}/{listenAllProgress.total}
            </span>

            <IconButton title="Pause or resume" onClick={togglePauseListenAll}>
              {isPausedListenAll ? (
                <Play size={16} strokeWidth={2.5} />
              ) : (
                <Pause size={16} strokeWidth={2.5} />
              )}
            </IconButton>
          </div>
        )}

        {isPracticing && (
          <div className="listen-all-bar practice-bar">
            <div className="listen-all-track">
              <div
                className="listen-all-fill practice-fill"
                style={{
                  width: `${
                    practiceProgress.total > 0
                      ? (practiceProgress.current / practiceProgress.total) *
                        100
                      : 0
                  }%`,
                }}
              />
            </div>

            <span className="listen-all-counter">
              {practiceProgress.current}/{practiceProgress.total}
            </span>

            <Badge variant="success" className="practice-role-badge">
              Practicing Speaker {role}
            </Badge>
          </div>
        )}
      </div>

      <div className="dialogue-scroll-area">
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
                      <IconButton
                        title="Listen"
                        onClick={() => listenLine(line)}
                      >
                        <Volume2 size={22} strokeWidth={2.5} />
                      </IconButton>

                      <IconButton
                        title="Speak"
                        onClick={() => speakLine(line)}
                      >
                        <Mic size={22} strokeWidth={2.5} />
                      </IconButton>

                      <IconButton
                        title={
                          hidden ? "Show this sentence" : "Hide this sentence"
                        }
                        onClick={() => toggleLineHidden(line)}
                      >
                        {hidden ? (
                          <EyeOff size={22} strokeWidth={2.5} />
                        ) : (
                          <Eye size={22} strokeWidth={2.5} />
                        )}
                      </IconButton>

                      <IconButton
                        title="Reset this sentence"
                        className="reset-icon-button"
                        onClick={() => resetLineSpeakResult(line.id)}
                      >
                        <RotateCcw size={22} strokeWidth={2.5} />
                      </IconButton>
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
                              <p className="dialogue-reading">
                                {line.reading}
                              </p>
                            )}

                            {line.romaji && (
                              <p className="dialogue-romaji">
                                {line.romaji}
                              </p>
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

                    <div className="score-inline-row">
                      <ScoreBox score={score} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {activeLine && (
        <div className="surface-card dialogue-result">
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
        <Button variant="secondary" onClick={handlePreviousDialogue}>
          ← Previous Dialogue
        </Button>

        <Button variant="secondary" onClick={handleNextDialogue}>
          Next Dialogue →
        </Button>
      </div>

      <p className="status">{status}</p>
    </Panel>
  );
}