import { useState } from "react";
import "./App.css";

import VocabularyFlashcard from "./components/VocabularyFlashcard";
import KanaLearning from "./components/KanaLearning";
import SpeakingPractice from "./components/SpeakingPractice";
import DialogueList from "./components/DialogueList";
import DialoguePractice from "./components/DialoguePractice";
import JLPTQuiz from "./components/JLPTQuiz";
import ProgressPanel from "./components/ProgressPanel";

import { loadProgress, saveProgress } from "./utils/storage";
import { DIALOGUES } from "./data/dialogues";

const MENU_ITEMS = [
  {
    key: "vocabulary",
    label: "Vocabulary",
    icon: "📚",
  },
  {
    key: "kana",
    label: "Kana",
    icon: "あ",
  },
  {
    key: "speaking",
    label: "Speaking",
    icon: "🎤",
  },
  {
    key: "dialogue",
    label: "Dialogue",
    icon: "💬",
  },
  {
    key: "jlpt",
    label: "JLPT Quiz",
    icon: "📝",
  },
  {
    key: "progress",
    label: "Progress",
    icon: "📈",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("dialogue");
  const [progress, setProgress] = useState(() => loadProgress());
  const [selectedDialogueIndex, setSelectedDialogueIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectedDialogue =
    selectedDialogueIndex === null ? null : DIALOGUES[selectedDialogueIndex];

  const handleProgressChange = (nextProgress) => {
    setProgress(nextProgress);
    saveProgress(nextProgress);
  };

  const handleChangeTab = (tabName) => {
    setActiveTab(tabName);
    setSidebarOpen(false);

    if (tabName !== "dialogue") {
      setSelectedDialogueIndex(null);
    }
  };

  const handleSelectDialogue = (dialogue) => {
    const index = DIALOGUES.findIndex((item) => item.id === dialogue.id);

    if (index === -1) {
      console.error("Dialogue not found:", dialogue);
      return;
    }

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

  // const getPageTitle = () => {
  //   if (activeTab === "vocabulary") return "Vocabulary";
  //   if (activeTab === "kana") return "Kana Learning";
  //   if (activeTab === "speaking") return "Speaking Practice";
  //   if (activeTab === "dialogue") return "Dialogue";
  //   if (activeTab === "jlpt") return "JLPT Quiz";
  //   if (activeTab === "progress") return "Progress";
  //   return "Japanese Learning App";
  // };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-logo">日</div>

          <div>
            <h1>日本語</h1>
            <p>Learning App</p>
          </div>
        </div>

        <nav className="sidebar-menu">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.key}
              className={
                activeTab === item.key
                  ? "sidebar-menu-item active"
                  : "sidebar-menu-item"
              }
              onClick={() => handleChangeTab(item.key)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>今日も頑張りましょう！</p>
        </div>
      </aside>

      {sidebarOpen && (
        <button
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      <main className="main-content">
        <header className="topbar">
          <button
            className="mobile-menu-button"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

        </header>

        <section className="content-area">
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

          {activeTab === "dialogue" && selectedDialogueIndex === null && (
            <DialogueList
              progress={progress}
              onSelectDialogue={handleSelectDialogue}
            />
          )}

          {activeTab === "dialogue" &&
            selectedDialogueIndex !== null &&
            selectedDialogue && (
              <DialoguePractice
                dialogue={selectedDialogue}
                dialogueIndex={selectedDialogueIndex}
                totalDialogues={DIALOGUES.length}
                progress={progress}
                onProgressChange={handleProgressChange}
                onBack={handleBackToDialogueList}
                onPreviousDialogue={handlePreviousDialogue}
                onNextDialogue={handleNextDialogue}
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
        </section>
      </main>
    </div>
  );
}