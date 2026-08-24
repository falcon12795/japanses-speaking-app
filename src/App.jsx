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
import VocabularyTopicDetail from "./components/VocabularyTopicDetail";
import DialogueList from "./components/DialogueList";
import DialoguePractice from "./components/DialoguePractice";
import JLPTQuiz from "./components/JLPTQuiz";
import ProgressPanel from "./components/ProgressPanel";

import { loadProgress, saveProgress } from "./utils/storage";
import { DIALOGUES } from "./data/dialogues";
import { VOCABULARY } from "./data/vocabulary";
import GrammarList from "./components/GrammarList";
import GrammarDetail from "./components/GrammarDetail";
import { GRAMMAR } from "./data/grammar";
import GrammarTraining from "./components/GrammarTraining";
import { buildVocabularyTopics } from "./utils/buildVocabularyTopics";

const MENU_ITEMS = [
  {
    to: "/vocabulary",
    label: "言葉",
    icon: "📚",
  },
  {
    to: "/grammar",
    label: "文法",
    icon: "📖",
  },
  {
    to: "/dialogue",
    label: "会話",
    icon: "💬",
  },
  {
    to: "/jlpt",
    label: "JLPT Quiz",
    icon: "📝",
  },
  {
    to: "/progress",
    label: "進捗",
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

function PageHeader({ setSidebarOpen }) {
  return (
    <header className="topbar">
      <button
        className="mobile-menu-button"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>
    </header>
  );
}

function VocabularyTopicDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { topicId } = useParams();

  const decodedTopicId = decodeURIComponent(
    topicId || ""
  );

  const vocabularyTopics = useMemo(
    () => buildVocabularyTopics(VOCABULARY),
    []
  );

  const topic = vocabularyTopics.find(
    (item) =>
      String(item.id) ===
      String(decodedTopicId)
  );

  const topicsInLevel = topic
    ? vocabularyTopics.filter(
      (item) =>
        String(item.level) ===
        String(topic.level)
    )
    : [];

  const currentIndex = topic
    ? topicsInLevel.findIndex(
      (item) =>
        String(item.id) ===
        String(topic.id)
    )
    : -1;

  const previousTopic =
    currentIndex > 0
      ? topicsInLevel[currentIndex - 1]
      : null;

  const nextTopic =
    currentIndex >= 0 &&
      currentIndex < topicsInLevel.length - 1
      ? topicsInLevel[currentIndex + 1]
      : null;

  const navigateToTopic = (targetTopic) => {
    if (!targetTopic) return;

    navigate(
      `/vocabulary-topic/${encodeURIComponent(
        targetTopic.id
      )}`,
      {
        state: {
          from:
            location.state?.from ||
            "/vocabulary",
        },
      }
    );
  };

  const handlePreviousTopic = () => {
    navigateToTopic(previousTopic);
  };

  const handleNextTopic = () => {
    navigateToTopic(nextTopic);
  };

  const navigateToFlashcard = (
    startWordId = null
  ) => {
    if (!topic) return;

    navigate(
      `/vocabulary-flashcard/${encodeURIComponent(
        topic.level
      )}/${encodeURIComponent(
        topic.subject
      )}/${encodeURIComponent(
        topic.title
      )}`,
      {
        state: {
          from: `${location.pathname}${location.search}`,
          startWordId,
        },
      }
    );
  };

  const handlePractice = () => {
    navigateToFlashcard(
      topic?.words?.[0]?.id ?? null
    );
  };

  const handleSelectWord = (word) => {
    if (!word) return;

    navigateToFlashcard(word.id);
  };

  if (!topic) {
    return (
      <div className="page-container">
        <h3>Topic not found</h3>

        <p>
          Topic ID: {decodedTopicId || "Empty"}
        </p>

        <button
          type="button"
          onClick={() => navigate("/vocabulary")}
        >
          Back to Vocabulary Library
        </button>
      </div>
    );
  }

  return (
    <VocabularyTopicDetail
      topic={topic}
      onPreviousTopic={handlePreviousTopic}
      onNextTopic={handleNextTopic}
      onPractice={handlePractice}
      onSelectWord={handleSelectWord}
      hasPrevious={Boolean(previousTopic)}
      hasNext={Boolean(nextTopic)}
    />
  );
}


function VocabularyFlashcardPage({
  progress,
  onProgressChange,
}) {
  const location = useLocation();

  const {
    level,
    subject,
    topic,
  } = useParams();

  const decodedLevel = decodeURIComponent(
    level || ""
  );

  const decodedSubject = decodeURIComponent(
    subject || ""
  );

  const decodedTopic = decodeURIComponent(
    topic || ""
  );

  const filteredVocabulary =
    VOCABULARY.filter((item) => {
      const itemSubject =
        item.subject || "Others";

      const itemTopic =
        item.topic ||
        item.type ||
        "General";

      return (
        String(item.level) ===
        String(decodedLevel) &&
        String(itemSubject) ===
        String(decodedSubject) &&
        String(itemTopic) ===
        String(decodedTopic)
      );
    });

  const startWordId =
    location.state?.startWordId ?? null;

  const initialWordIndex = startWordId
    ? filteredVocabulary.findIndex(
      (word) =>
        String(word.id) ===
        String(startWordId)
    )
    : 0;

  if (filteredVocabulary.length === 0) {
    return (
      <div className="page-container">
        <h3>Vocabulary not found</h3>

        <p>Level: {decodedLevel}</p>
        <p>Subject: {decodedSubject}</p>
        <p>Topic: {decodedTopic}</p>
      </div>
    );
  }

  return (
    <VocabularyFlashcard
      vocabulary={filteredVocabulary}
      progress={progress}
      onProgressChange={onProgressChange}
      level={decodedLevel}
      subject={decodedSubject}
      topic={decodedTopic}
      initialIndex={
        initialWordIndex >= 0
          ? initialWordIndex
          : 0
      }
    />
  );
}


function GrammarListPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectGrammar = (grammar) => {
    navigate(
      `/grammar/${encodeURIComponent(grammar.level)}/${encodeURIComponent(
        grammar.id
      )}`,
      {
        state: {
          from: `${location.pathname}${location.search}`,
        },
      }
    );
  };

  return <GrammarList onSelectGrammar={handleSelectGrammar} />;
}

function GrammarDetailPage() {
  const navigate = useNavigate();
  const { level, grammarId } = useParams();
  const decodedLevel = decodeURIComponent(level || "");
  const decodedGrammarId = decodeURIComponent(grammarId || "");
  const grammarListByLevel = GRAMMAR.filter(
    (item) => item.level === decodedLevel
  );
  const currentIndex =
    grammarListByLevel.findIndex(
      (item) =>
        String(item.id) ===
        String(decodedGrammarId)
    );
  const grammar = currentIndex >= 0
    ? grammarListByLevel[currentIndex]
    : null;
  const previousGrammar =
    currentIndex > 0
      ? grammarListByLevel[currentIndex - 1]
      : null;
  const nextGrammar =
    currentIndex < grammarListByLevel.length - 1
      ? grammarListByLevel[currentIndex + 1]
      : null;
  const handlePreviousGrammar = () => {
    if (!previousGrammar) return;
    navigate(
      `/grammar/${previousGrammar.level}/${previousGrammar.id}`
    );
  };
  const handleNextGrammar = () => {
    if (!nextGrammar) return;

    navigate(
      `/grammar/${nextGrammar.level}/${nextGrammar.id}`
    );
  };

  console.log({
    decodedLevel,
    decodedGrammarId,
    grammarListByLevelLength:
      grammarListByLevel.length,
    currentIndex,
    grammar,
    previousGrammar,
    nextGrammar,
  });
  if (!grammar) {
    return (
      <div>
        Grammar not found:
        {decodedLevel} / {decodedGrammarId}
      </div>
    );
  }

  return (
    <GrammarDetail
      grammar={grammar}
      onPreviousGrammar={handlePreviousGrammar}
      onNextGrammar={handleNextGrammar}
      hasPrevious={!!previousGrammar}
      hasNext={!!nextGrammar}
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

function VocabularyListWithRouteState({
  progress,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectTopic = (topicId) => {
    if (!topicId) {
      console.warn(
        "Cannot navigate because topicId is empty."
      );
      return;
    }

    navigate(
      `/vocabulary-topic/${encodeURIComponent(
        topicId
      )}`,
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
                  setSidebarOpen={setSidebarOpen}
                />

                <section className="content-area">
                  <VocabularyListWithRouteState progress={progress} />
                </section>
              </>
            }
          />

          <Route
            path="/vocabulary-topic/:topicId"
            element={<VocabularyTopicDetailPage />}
          />

          <Route
            path="/vocabulary-flashcard/:level/:subject/:topic"
            element={
              <VocabularyFlashcardPage
                progress={progress}
                onProgressChange={handleProgressChange}
              />
            }
          />

          <Route
            path="/grammar"
            element={
              <>
                <PageHeader
                  setSidebarOpen={setSidebarOpen}
                />

                <section className="content-area">
                  <GrammarListPage />
                </section>
              </>
            }
          />

          <Route
            path="/grammar/:level/:grammarId"
            element={
              <>
                <PageHeader
                  setSidebarOpen={setSidebarOpen}
                />

                <section className="content-area">
                  <GrammarDetailPage />
                </section>
              </>
            }
          />
          <Route
            path="/grammar-training"
            element={<GrammarTraining />}
          />

          <Route
            path="/dialogue"
            element={
              <>
                <PageHeader
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