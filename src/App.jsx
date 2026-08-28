import { useMemo, useState } from "react";
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

import { loadProgress, saveProgress, loadLanguage, saveLanguage } from "./utils/storage";
import LanguageSelector, { LANGUAGES } from "./components/LanguageSelector";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import GrammarList from "./components/GrammarList";
import GrammarDetail from "./components/GrammarDetail";
import GrammarTraining from "./components/GrammarTraining";
import { buildVocabularyTopics, filterWordsByStatus } from "./utils/buildVocabularyTopics";

function Sidebar({ sidebarOpen, setSidebarOpen, language, onChangeLang }) {
  const lang = LANGUAGES.find((l) => l.code === language);
  const { menuLabels } = useLanguage();

  const menuItems = [
    { to: "/vocabulary", label: menuLabels.vocabulary, icon: "📚" },
    { to: "/grammar",    label: menuLabels.grammar,    icon: "📖" },
    { to: "/dialogue",   label: menuLabels.dialogue,   icon: "💬" },
    { to: "/jlpt",       label: menuLabels.quiz,       icon: "📝" },
    { to: "/progress",   label: menuLabels.progress,   icon: "📈" },
  ];

  return (
    <>
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-logo">{lang ? lang.flag : "🌐"}</div>

          <div>
            <h1>{lang ? lang.nativeName : "Learn"}</h1>
            <p>Learning App</p>
          </div>
        </div>

        <nav className="sidebar-menu">
          {menuItems.map((item) => (
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
          <button
            className="sidebar-lang-btn"
            onClick={onChangeLang}
            aria-label="Change language"
          >
            <span className="sidebar-lang-flag">{lang ? lang.flag : "🌐"}</span>
            <span className="sidebar-lang-text">
              <span className="sidebar-lang-label">Learning</span>
              <span className="sidebar-lang-name">{lang ? lang.name : "Choose language"}</span>
            </span>
            <span className="sidebar-lang-chevron">▼</span>
          </button>
          <div className="sidebar-footer-note">
            <p>{menuLabels.footerNote}</p>
          </div>
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

function VocabularyTopicDetailPage({
  progress = {},
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { topicId } = useParams();
  const { vocabulary } = useLanguage();

  const decodedTopicId = decodeURIComponent(
    topicId || ""
  );

  const vocabularyTopics = useMemo(
    () => buildVocabularyTopics(vocabulary),
    [vocabulary]
  );

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const vocabularyFilter =
    searchParams.get("filter") ||
    location.state?.vocabularyFilter ||
    "all";

  const topic =
    vocabularyTopics.find(
      (item) =>
        String(item.id) ===
        String(decodedTopicId)
    ) || null;

  const filteredTopicWords = useMemo(
    () =>
      filterWordsByStatus(
        topic?.words || [],
        vocabularyFilter,
        progress.completedVocabulary || [],
        progress.favoriteVocabulary || [],
        progress.reviewVocabulary || []
      ),
    [
      topic,
      vocabularyFilter,
      progress.completedVocabulary,
      progress.favoriteVocabulary,
      progress.reviewVocabulary,
    ]
  );

  const displayedTopic = topic
    ? {
      ...topic,
      words: filteredTopicWords,
    }
    : null;

  /*
   * Prev / Next chỉ sử dụng các topic cùng level.
   * Khi đang dùng Favorite hoặc Review, chỉ giữ lại
   * những topic có ít nhất một từ phù hợp filter.
   */
  const topicsInLevel = useMemo(() => {
    if (!topic) {
      return [];
    }

    return vocabularyTopics.filter(
      (candidateTopic) => {
        if (
          String(candidateTopic.level) !==
          String(topic.level)
        ) {
          return false;
        }

        const matchingWords =
          filterWordsByStatus(
            candidateTopic.words || [],
            vocabularyFilter,
            progress.completedVocabulary || [],
            progress.favoriteVocabulary || [],
            progress.reviewVocabulary || []
          );

        return matchingWords.length > 0;
      }
    );
  }, [
    topic,
    vocabularyTopics,
    vocabularyFilter,
    progress.completedVocabulary,
    progress.favoriteVocabulary,
    progress.reviewVocabulary,
  ]);

  const currentIndex =
    topic
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
    if (!targetTopic) {
      return;
    }

    navigate(
      `/vocabulary-topic/${encodeURIComponent(
        targetTopic.id
      )}?filter=${encodeURIComponent(
        vocabularyFilter
      )}`,
      {
        state: {
          from:
            location.state?.from ||
            "/vocabulary",
          vocabularyFilter,
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
    if (!displayedTopic) {
      return;
    }

    navigate(
      `/vocabulary-flashcard/${encodeURIComponent(
        displayedTopic.level
      )}/${encodeURIComponent(
        displayedTopic.subject || "Others"
      )}/${encodeURIComponent(
        displayedTopic.title
      )}`,
      {
        state: {
          from:
            `${location.pathname}${location.search}`,
          startWordId,
          vocabularyFilter,

          /*
           * Truyền đúng danh sách ID đang hiển thị.
           * Flashcard có thể sử dụng danh sách này
           * để chỉ luyện các từ Favorite/Review.
           */
          filteredWordIds:
            displayedTopic.words.map(
              (word) => word.id
            ),
        },
      }
    );
  };

  const handlePractice = () => {
    navigateToFlashcard(
      displayedTopic?.words?.[0]?.id ?? null
    );
  };

  const handleSelectWord = (word) => {
    if (!word) {
      return;
    }

    navigateToFlashcard(word.id);
  };

  if (!topic) {
    return (
      <div className="page-container">
        <h3>Topic not found</h3>

        <p>
          Topic ID:{" "}
          {decodedTopicId || "Empty"}
        </p>

        <button
          type="button"
          onClick={() =>
            navigate(
              location.state?.from ||
              "/vocabulary"
            )
          }
        >
          Back to Vocabulary Library
        </button>
      </div>
    );
  }

  if (
    vocabularyFilter !== "all" &&
    filteredTopicWords.length === 0
  ) {
    return (
      <div className="page-container">
        <h3>No matching vocabulary</h3>

        <p>
          No words in this topic match the{" "}
          <strong>{vocabularyFilter}</strong>{" "}
          filter.
        </p>

        <button
          type="button"
          onClick={() =>
            navigate(
              location.state?.from ||
              "/vocabulary"
            )
          }
        >
          Back to Vocabulary Library
        </button>
      </div>
    );
  }

  return (
    <VocabularyTopicDetail
      topic={displayedTopic}
      filter={vocabularyFilter}
      onPreviousTopic={
        handlePreviousTopic
      }
      onNextTopic={handleNextTopic}
      onPractice={handlePractice}
      onSelectWord={handleSelectWord}
      hasPrevious={Boolean(previousTopic)}
      hasNext={Boolean(nextTopic)}
    />
  );
}


function VocabularyFlashcardPage({
  progress = {},
  onProgressChange,
}) {
  const location = useLocation();
  const { vocabulary } = useLanguage();

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

  const vocabularyFilter =
    location.state?.vocabularyFilter || "all";

  const filteredWordIds = useMemo(
    () => location.state?.filteredWordIds || [],
    [location.state?.filteredWordIds]
  );

  const topicVocabulary = useMemo(() => {
    return vocabulary.filter((item) => {
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
  }, [
    decodedLevel,
    decodedSubject,
    decodedTopic,
  ]);

  /*
   * Ưu tiên filteredWordIds được truyền từ màn Detail.
   * Trường hợp refresh trang làm mất location.state,
   * app sẽ tự lọc lại dựa trên vocabularyFilter.
   */
  const filteredVocabulary = useMemo(() => {
    if (filteredWordIds.length > 0) {
      const filteredIdSet = new Set(
        filteredWordIds.map(String)
      );

      return topicVocabulary.filter((word) =>
        filteredIdSet.has(String(word.id))
      );
    }

    return filterWordsByStatus(
      topicVocabulary,
      vocabularyFilter,
      progress.completedVocabulary || [],
      progress.favoriteVocabulary || [],
      progress.reviewVocabulary || []
    );
  }, [
    topicVocabulary,
    filteredWordIds,
    vocabularyFilter,
    progress.completedVocabulary,
    progress.favoriteVocabulary,
    progress.reviewVocabulary,
  ]);

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
        <h3>No matching vocabulary</h3>

        <p>Level: {decodedLevel}</p>
        <p>Subject: {decodedSubject}</p>
        <p>Topic: {decodedTopic}</p>
        <p>Filter: {vocabularyFilter}</p>
      </div>
    );
  }

  return (
    <VocabularyFlashcard
      /*
       * key giúp reset currentIndex khi danh sách
       * filter thay đổi.
       */
      key={[
        decodedLevel,
        decodedSubject,
        decodedTopic,
        vocabularyFilter,
        filteredVocabulary
          .map((word) => word.id)
          .join(","),
      ].join("|")}
      vocabulary={filteredVocabulary}
      progress={progress}
      onProgressChange={onProgressChange}
      level={decodedLevel}
      subject={decodedSubject}
      topic={decodedTopic}
      filter={vocabularyFilter}
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
  const { grammar: grammarList } = useLanguage();
  const decodedLevel = decodeURIComponent(level || "");
  const decodedGrammarId = decodeURIComponent(grammarId || "");
  const grammarListByLevel = grammarList.filter(
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

  const handleSelectTopic = (
    topicId,
    vocabularyFilter = "all"
  ) => {
    navigate(
      `/vocabulary-topic/${encodeURIComponent(
        topicId
      )}?filter=${encodeURIComponent(
        vocabularyFilter
      )}`,
      {
        state: {
          from: `${location.pathname}${location.search}`,
          vocabularyFilter,
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
  const { dialogues } = useLanguage();

  const decodedDialogueId = decodeURIComponent(dialogueId || "");

  const dialogueIndex = dialogues.findIndex(
    (item) => String(item.id) === String(decodedDialogueId)
  );

  const selectedDialogue =
    dialogueIndex === -1 ? null : dialogues[dialogueIndex];


  const handlePreviousDialogue = () => {
    if (dialogues.length === 0) return;

    const previousIndex =
      dialogueIndex <= 0 ? dialogues.length - 1 : dialogueIndex - 1;

    navigate(`/dialogue/${encodeURIComponent(dialogues[previousIndex].id)}`, {
      state: {
        from: location.state?.from || "/dialogue",
      },
    });
  };

  const handleNextDialogue = () => {
    if (dialogues.length === 0) return;

    const nextIndex = (dialogueIndex + 1) % dialogues.length;

    navigate(`/dialogue/${encodeURIComponent(dialogues[nextIndex].id)}`, {
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
      totalDialogues={dialogues.length}
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
  const [language, setLanguage] = useState(() => loadLanguage());
  const [showLangSelector, setShowLangSelector] = useState(false);

  const handleProgressChange = (nextProgress) => {
    setProgress(nextProgress);
    saveProgress(nextProgress);
  };

  const handleSelectLanguage = (code) => {
    saveLanguage(code);
    setLanguage(code);
    setShowLangSelector(false);
  };

  if (!language) {
    return (
      <LanguageProvider language="ja">
        <LanguageSelector
          currentCode={null}
          onSelect={handleSelectLanguage}
        />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider language={language}>
      <div className="app-shell">
        {showLangSelector && (
          <LanguageSelector
            currentCode={language}
            onSelect={handleSelectLanguage}
            onClose={() => setShowLangSelector(false)}
          />
        )}

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        language={language}
        onChangeLang={() => setShowLangSelector(true)}
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
            element={
              <VocabularyTopicDetailPage
                progress={progress}
              />
            }
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
    </LanguageProvider>
  );
}