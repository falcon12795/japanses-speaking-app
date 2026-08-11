import { useState } from "react";
import {
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import "./App.css";

import VocabularyList from "./components/VocabularyList";
import VocabularyFlashcard from "./components/VocabularyFlashcard";
import KanaLearning from "./components/KanaLearning";
import SpeakingPractice from "./components/SpeakingPractice";
import DialogueList from "./components/DialogueList";
import DialoguePractice from "./components/DialoguePractice";
import JLPTQuiz from "./components/JLPTQuiz";
import ProgressPanel from "./components/ProgressPanel";

import { loadProgress, saveProgress } from "./utils/storage";
import { DIALOGUES } from "./data/dialogues";
import { VOCABULARY } from "./data/vocabulary";

const MENU_ITEMS = [
  {
    to: "/vocabulary",
    label: "Vocabulary",
    icon: "📚",
  },
  {
    to: "/kana",
    label: "Kana",
    icon: "あ",
  },
  {
    to: "/speaking",
    label: "Speaking",
    icon: "🎤",
  },
  {
    to: "/dialogue",
    label: "Dialogue",
    icon: "💬",
  },
  {
    to: "/jlpt",
    label: "JLPT Quiz",
    icon: "📝",
  },
  {
    to: "/progress",
    label: "Progress",
    icon: "📈",
  },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
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
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-menu-item active"
                  : "sidebar-menu-item"
              }
              onClick={() => setSidebarOpen(false)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
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
    </>
  );
}

function PageHeader({ title, setSidebarOpen }) {
  return (
    <header className="topbar">
      <button
        className="mobile-menu-button"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>

      <div>
        <p className="topbar-badge">日本語 Learning App</p>
        <h2>{title}</h2>
      </div>
    </header>
  );
}


function VocabularyFlashcardPage({ progress, onProgressChange }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { level, topic } = useParams();

  const decodedLevel = decodeURIComponent(level || "");
  const decodedTopic = decodeURIComponent(topic || "");

  const filteredVocabulary = VOCABULARY.filter((item) => {
    const itemTopic = item.topic || item.type || "General";

    return item.level === decodedLevel && itemTopic === decodedTopic;
  });

  const backToVocabularyList = () => {
    const fallback = `/vocabulary?level=${encodeURIComponent(
      decodedLevel
    )}&status=all`;

    const from = location.state?.from || fallback;

    navigate(from);
  };

  return (
    <VocabularyFlashcard
      progress={progress}
      onProgressChange={onProgressChange}
      level={decodedLevel}
      topic={decodedTopic}
      vocabulary={filteredVocabulary}
      onBack={backToVocabularyList}
    />
  );
}

function DialogueListPage({ progress }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectDialogue = (dialogue) => {
    navigate(`/dialogue/${encodeURIComponent(dialogue.id)}`, {
      state: {
        from: `${location.pathname}${location.search}`,
      },
    });
  };

  return (
    <DialogueList
      progress={progress}
      onSelectDialogue={handleSelectDialogue}
    />
  );
}

function VocabularyListWithRouteState({ progress }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectTopic = (level, topic) => {
    navigate(
      `/vocabulary/${encodeURIComponent(level)}/${encodeURIComponent(topic)}`,
      {
        state: {
          from: `${location.pathname}${location.search}`,
        },
      }
    );
  };

  return (
    <VocabularyList
      progress={progress}
      onSelectTopic={handleSelectTopic}
    />
  );
}

function DialoguePracticePage({ progress, onProgressChange }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { dialogueId } = useParams();

  const decodedDialogueId = decodeURIComponent(dialogueId || "");

  const dialogueIndex = DIALOGUES.findIndex(
    (item) => String(item.id) === String(decodedDialogueId)
  );

  const selectedDialogue =
    dialogueIndex === -1 ? null : DIALOGUES[dialogueIndex];

  const backToDialogueList = () => {
    const fallback = selectedDialogue?.level
      ? `/dialogue?level=${encodeURIComponent(selectedDialogue.level)}&status=all`
      : "/dialogue";

    const from = location.state?.from || fallback;

    navigate(from);
  };

  const handlePreviousDialogue = () => {
    if (DIALOGUES.length === 0) return;

    const previousIndex =
      dialogueIndex <= 0 ? DIALOGUES.length - 1 : dialogueIndex - 1;

    navigate(`/dialogue/${encodeURIComponent(DIALOGUES[previousIndex].id)}`, {
      state: {
        from: location.state?.from || "/dialogue",
      },
    });
  };

  const handleNextDialogue = () => {
    if (DIALOGUES.length === 0) return;

    const nextIndex = (dialogueIndex + 1) % DIALOGUES.length;

    navigate(`/dialogue/${encodeURIComponent(DIALOGUES[nextIndex].id)}`, {
      state: {
        from: location.state?.from || "/dialogue",
      },
    });
  };

  if (!selectedDialogue) {
    return (
      <section className="panel">
        <h2>Dialogue not found</h2>

        <p className="subtitle">
          The selected dialogue does not exist.
        </p>

        <div className="buttons">
          <button onClick={() => navigate("/dialogue")}>
            ← Back to Dialogue List
          </button>
        </div>
      </section>
    );
  }

  return (
    <DialoguePractice
      dialogue={selectedDialogue}
      dialogueIndex={dialogueIndex}
      totalDialogues={DIALOGUES.length}
      progress={progress}
      onProgressChange={onProgressChange}
      onBack={backToDialogueList}
      onPreviousDialogue={handlePreviousDialogue}
      onNextDialogue={handleNextDialogue}
    />
  );
}

export default function App() {
  const [progress, setProgress] = useState(() => loadProgress());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleProgressChange = (nextProgress) => {
    setProgress(nextProgress);
    saveProgress(nextProgress);
  };

  return (
    <div className="app-shell">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/vocabulary" replace />}
          />

          <Route
            path="/vocabulary"
            element={
              <>
                <PageHeader
                  title="Vocabulary"
                  setSidebarOpen={setSidebarOpen}
                />

                <section className="content-area">
                  <VocabularyListWithRouteState progress={progress} />
                </section>
              </>
            }
          />

          <Route
            path="/vocabulary/:level/:topic"
            element={
              <>
                <PageHeader
                  title="Vocabulary"
                  setSidebarOpen={setSidebarOpen}
                />

                <section className="content-area">
                  <VocabularyFlashcardPage
                    progress={progress}
                    onProgressChange={handleProgressChange}
                  />
                </section>
              </>
            }
          />

          <Route
            path="/kana"
            element={
              <>
                <PageHeader
                  title="Kana Learning"
                  setSidebarOpen={setSidebarOpen}
                />

                <section className="content-area">
                  <KanaLearning
                    progress={progress}
                    onProgressChange={handleProgressChange}
                  />
                </section>
              </>
            }
          />

          <Route
            path="/speaking"
            element={
              <>
                <PageHeader
                  title="Speaking Practice"
                  setSidebarOpen={setSidebarOpen}
                />

                <section className="content-area">
                  <SpeakingPractice
                    progress={progress}
                    onProgressChange={handleProgressChange}
                  />
                </section>
              </>
            }
          />

          <Route
            path="/dialogue"
            element={
              <>
                <PageHeader
                  title="Dialogue"
                  setSidebarOpen={setSidebarOpen}
                />

                <section className="content-area">
                  <DialogueListPage progress={progress} />
                </section>
              </>
            }
          />

          <Route
            path="/dialogue/:dialogueId"
            element={
              <>
                <PageHeader
                  title="Dialogue Practice"
                  setSidebarOpen={setSidebarOpen}
                />

                <section className="content-area">
                  <DialoguePracticePage
                    progress={progress}
                    onProgressChange={handleProgressChange}
                  />
                </section>
              </>
            }
          />

          <Route
            path="/jlpt"
            element={
              <>
                <PageHeader
                  title="JLPT Quiz"
                  setSidebarOpen={setSidebarOpen}
                />

                <section className="content-area">
                  <JLPTQuiz
                    progress={progress}
                    onProgressChange={handleProgressChange}
                  />
                </section>
              </>
            }
          />

          <Route
            path="/progress"
            element={
              <>
                <PageHeader
                  title="Progress"
                  setSidebarOpen={setSidebarOpen}
                />

                <section className="content-area">
                  <ProgressPanel
                    progress={progress}
                    onProgressChange={handleProgressChange}
                  />
                </section>
              </>
            }
          />

          <Route
            path="*"
            element={<Navigate to="/vocabulary" replace />}
          />
        </Routes>
      </main>
    </div>
  );
}