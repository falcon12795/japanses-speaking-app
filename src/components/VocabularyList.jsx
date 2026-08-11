import { useMemo, useState } from "react";
import { VOCABULARY } from "../data/vocabulary";

const LEVELS = ["N1", "N2", "N3", "N4", "N5"];

const STATUS_FILTERS = [
  { value: "all", label: "All" },
  { value: "not-started", label: "Not Started" },
  { value: "learning", label: "Learning" },
  { value: "completed", label: "Completed" },
  { value: "favorite", label: "Favorite" },
  { value: "review", label: "Review" },
];

function getTopicStatus(topicInfo) {
  if (topicInfo.favoriteCount > 0) {
    return "favorite";
  }

  if (topicInfo.progressPercent === 100) {
    return "completed";
  }

  if (topicInfo.reviewCount > 0) {
    return "review";
  }

  if (topicInfo.completedCount > 0) {
    return "learning";
  }

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
  const [selectedLevel, setSelectedLevel] = useState("N5");
  const [statusFilter, setStatusFilter] = useState("all");

  const completedVocabulary = progress.completedVocabulary || [];
  const favoriteVocabulary = progress.favoriteVocabulary || [];
  const reviewVocabulary = progress.reviewVocabulary || [];

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
    if (statusFilter === "all") {
      return true;
    }

    return topic.status === statusFilter;
  });

  return (
    <section className="panel">
      <div className="vocabulary-list-header">
        <h2>Vocabulary Library</h2>

        <p className="subtitle">
          Choose a JLPT level and topic to start learning vocabulary.
        </p>
      </div>

      <div className="jlpt-filter">
        {LEVELS.map((level) => (
          <button
            key={level}
            className={
              selectedLevel === level
                ? "level-filter-button active"
                : "level-filter-button"
            }
            onClick={() => {
              setSelectedLevel(level);
              setStatusFilter("all");
            }}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="status-filter">
        {STATUS_FILTERS.map((filter) => (
          <button
            key={filter.value}
            className={
              statusFilter === filter.value
                ? "status-button active"
                : "status-button"
            }
            onClick={() => setStatusFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="vocabulary-topic-list">
        {filteredTopics.map((item) => (
          <button
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

              <span className="vocabulary-topic-count">
                {item.count} words
              </span>
            </div>

            <div className="vocabulary-topic-meta">
              <span>✅ {item.completedCount}</span>
              <span>⭐ {item.favoriteCount}</span>
              <span>🔁 {item.reviewCount}</span>
              <span>{item.progressPercent}%</span>
            </div>

            <div className="topic-progress-bar">
              <div
                className="topic-progress-fill"
                style={{ width: `${item.progressPercent}%` }}
              />
            </div>
          </button>
        ))}

        {filteredTopics.length === 0 && (
          <div className="empty-dialogues">
            No vocabulary found for {selectedLevel}.
          </div>
        )}
      </div>
    </section>
  );
}