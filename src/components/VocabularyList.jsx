import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { VOCABULARY } from "../data/vocabulary";
import Badge from "./common/Badge";
import EmptyState from "./common/EmptyState";
import FilterBar from "./common/FilterBar";
import ListCard from "./common/ListCard";
import Panel from "./common/Panel";
import ProgressBar from "./common/ProgressBar";

const STATUS_FILTERS = [
  { value: "all", label: "All" },
  { value: "not-started", label: "Not Started" },
  { value: "learning", label: "Learning" },
  { value: "completed", label: "Completed" },
  { value: "favorite", label: "Favorite" },
  { value: "review", label: "Review" },
];

function sortJlptLevels(levels) {
  const order = {
    N1: 1,
    N2: 2,
    N3: 3,
    N4: 4,
    N5: 5,
  };

  return [...levels].sort((a, b) => {
    return (order[a] || 999) - (order[b] || 999);
  });
}

function getAvailableLevels() {
  const levels = new Set();

  VOCABULARY.forEach((item) => {
    if (item.level) {
      levels.add(item.level);
    }
  });

  return sortJlptLevels([...levels]);
}

function getTopicStatus(topicInfo) {
  if (topicInfo.favoriteCount > 0) return "favorite";
  if (topicInfo.progressPercent === 100) return "completed";
  if (topicInfo.reviewCount > 0) return "review";
  if (topicInfo.completedCount > 0) return "learning";

  return "not-started";
}

function getTopicStatusIcon(status) {
  if (status === "completed") return "✅";
  if (status === "favorite") return "⭐";
  if (status === "review") return "🔁";
  if (status === "learning") return "📖";

  return "⭕";
}

export default function VocabularyList({ progress = {}, onSelectTopic }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const availableLevels = useMemo(() => getAvailableLevels(), []);

  const defaultLevel = availableLevels[0] || "N5";
  const selectedLevel = searchParams.get("level") || defaultLevel;
  const statusFilter = searchParams.get("status") || "all";

  const completedVocabulary = progress.completedVocabulary || [];
  const favoriteVocabulary = progress.favoriteVocabulary || [];
  const reviewVocabulary = progress.reviewVocabulary || [];

  const setLevel = (level) => {
    setSearchParams({
      level,
      status: "all",
    });
  };

  const setStatus = (status) => {
    setSearchParams({
      level: selectedLevel,
      status,
    });
  };

  const topics = useMemo(() => {
    const vocabularyByLevel = VOCABULARY.filter(
      (item) => item.level === selectedLevel
    );

    const groupedByTopic = vocabularyByLevel.reduce((acc, item) => {
      const topic = item.topic || item.type || "General";

      if (!acc[topic]) {
        acc[topic] = [];
      }

      acc[topic].push(item);

      return acc;
    }, {});

    return Object.entries(groupedByTopic)
      .map(([topic, words]) => {
        const completedCount = words.filter((word) =>
          completedVocabulary.includes(word.id)
        ).length;

        const favoriteCount = words.filter((word) =>
          favoriteVocabulary.includes(word.id)
        ).length;

        const reviewCount = words.filter((word) =>
          reviewVocabulary.includes(word.id)
        ).length;

        const progressPercent =
          words.length === 0
            ? 0
            : Math.round((completedCount / words.length) * 100);

        const topicInfo = {
          topic,
          words,
          count: words.length,
          completedCount,
          favoriteCount,
          reviewCount,
          progressPercent,
        };

        return {
          ...topicInfo,
          status: getTopicStatus(topicInfo),
        };
      })
      .sort((a, b) => a.topic.localeCompare(b.topic));
  }, [
    selectedLevel,
    completedVocabulary,
    favoriteVocabulary,
    reviewVocabulary,
  ]);

  const filteredTopics = topics.filter((topic) => {
    if (statusFilter === "all") return true;

    return topic.status === statusFilter;
  });

  return (
    <Panel>
      <div className="vocabulary-list-header">
        <h2>Vocabulary Library</h2>

        <p className="subtitle">
          Choose a JLPT level and topic to start learning vocabulary.
        </p>
      </div>

      <FilterBar
        items={availableLevels}
        selectedValue={selectedLevel}
        onChange={setLevel}
        className="jlpt-filter"
      />

      <FilterBar
        items={STATUS_FILTERS}
        selectedValue={statusFilter}
        onChange={setStatus}
        className="status-filter"
        buttonClassName="status-button"
      />

      <div className="vocabulary-topic-list">
        {filteredTopics.map((item) => (
          <ListCard
            key={item.topic}
            className="vocabulary-topic-card"
            onClick={() => onSelectTopic(selectedLevel, item.topic)}
          >
            <div className="vocabulary-topic-main">
              <span className="vocabulary-topic-name">
                <span className="dialogue-status-icon">
                  {getTopicStatusIcon(item.status)}
                </span>

                {item.topic}
              </span>

              <Badge variant="primary" className="vocabulary-topic-count">
                {item.count} words
              </Badge>
            </div>

            <div className="vocabulary-topic-meta">
              <span>✅ {item.completedCount}</span>
              <span>⭐ {item.favoriteCount}</span>
              <span>🔁 {item.reviewCount}</span>
              <span>{item.progressPercent}%</span>
            </div>

            <ProgressBar
              value={item.progressPercent}
              className="topic-progress-bar"
              fillClassName="topic-progress-fill"
            />
          </ListCard>
        ))}

        {filteredTopics.length === 0 && (
          <EmptyState>
            No vocabulary found for {selectedLevel}.
          </EmptyState>
        )}
      </div>
    </Panel>
  );
}