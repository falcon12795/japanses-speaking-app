import { useState } from "react";
import "./App.css";

import VocabularyFlashcard from "./components/VocabularyFlashcard";
import KanaLearning from "./components/KanaLearning";
import SpeakingPractice from "./components/SpeakingPractice";
import DialoguePractice from "./components/DialoguePractice";
import JLPTQuiz from "./components/JLPTQuiz";
import ProgressPanel from "./components/ProgressPanel";

import { loadProgress, saveProgress } from "./utils/storage";
import DialogueList from "./components/DialogueList";
import { DIALOGUES } from "./data/dialogues";

export default function App() {
  const [activeTab, setActiveTab] = useState("vocabulary");
  const [progress, setProgress] = useState(() => loadProgress());
  const [selectedDialogueIndex, setSelectedDialogueIndex] = useState(null);

  const selectedDialogue =
  selectedDialogueIndex === null ? null : DIALOGUES[selectedDialogueIndex];

    const handleSelectDialogue = (dialogue) => {
      const index = DIALOGUES.findIndex((item) => item.id === dialogue.id);
      setSelectedDialogueIndex(index);
    };

    const handleBackToDialogueList = () => {
      setSelectedDialogueIndex(null);
    };

    const handlePreviousDialogue = () => {
      setSelectedDialogueIndex((prev) => {
        if (prev === null) return 0;
        return prev === 0 ? DIALOGUES.length - 1 : prev - 1;
      });
    };

    const handleNextDialogue = () => {
      setSelectedDialogueIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % DIALOGUES.length;
      });
    };

  const handleProgressChange = (nextProgress) => {
    setProgress(nextProgress);
    saveProgress(nextProgress);
  };

  return (
    <div className="app">
      <header className="header">
        <div>
          <p className="badge">日本語 Learning App</p>
          <h1>Japanese Learning Dashboard</h1>
          <p className="subtitle">
            Learn vocabulary, kana, speaking, JLPT, and track progress.
          </p>
        </div>
      </header>

      <nav className="tabs">
        <button
          className={activeTab === "vocabulary" ? "active" : ""}
          onClick={() => setActiveTab("vocabulary")}
        >
          Vocabulary
        </button>

        <button
          className={activeTab === "kana" ? "active" : ""}
          onClick={() => setActiveTab("kana")}
        >
          Kana
        </button>

        <button
          className={activeTab === "speaking" ? "active" : ""}
          onClick={() => setActiveTab("speaking")}
        >
          Speaking
        </button>

        <button
          className={activeTab === "dialogue" ? "active" : ""}
          onClick={() => setActiveTab("dialogue")}
        >
          Dialogue
        </button>

        <button
          className={activeTab === "jlpt" ? "active" : ""}
          onClick={() => setActiveTab("jlpt")}
        >
          JLPT Quiz
        </button>

        <button
          className={activeTab === "progress" ? "active" : ""}
          onClick={() => setActiveTab("progress")}
        >
          Progress
        </button>
      </nav>

      <main className="layout">
        {activeTab === "vocabulary" && (
          <VocabularyFlashcard
            progress={progress}
            onProgressChange={handleProgressChange}
          />
        )}

        {activeTab === "kana" && (
          <KanaLearning
            progress={progress}
            onProgressChange={handleProgressChange}
          />
        )}

        {activeTab === "speaking" && (
          <SpeakingPractice
            progress={progress}
            onProgressChange={handleProgressChange}
          />
        )}

        {activeTab === "jlpt" && (
          <JLPTQuiz
            progress={progress}
            onProgressChange={handleProgressChange}
          />
        )}

        {activeTab === "progress" && (
          <ProgressPanel
            progress={progress}
            onProgressChange={handleProgressChange}
          />
        )}

        {activeTab === "dialogue" && selectedDialogueIndex === null && (
          <DialogueList onSelectDialogue={handleSelectDialogue} />
        )}

        {activeTab === "dialogue" && selectedDialogueIndex !== null && (
          <DialoguePractice
            dialogue={selectedDialogue}
            progress={progress}
            onProgressChange={handleProgressChange}
            onBack={handleBackToDialogueList}
            onPreviousDialogue={handlePreviousDialogue}
            onNextDialogue={handleNextDialogue}
          />
        )}
      </main>
    </div>
  );
}