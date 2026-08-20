import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { VOCABULARY } from "../data/vocabulary";

import Badge from "./common/Badge";
import EmptyState from "./common/EmptyState";
import FilterBar from "./common/FilterBar";
import ListCard from "./common/ListCard";
import Panel from "./common/Panel";
import ProgressBar from "./common/ProgressBar";
import CollapseGroup from "./common/CollapseGroup";

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

  return [...levels].sort(
    (levelA, levelB) =>
      (order[levelA] || 999) -
      (order[levelB] || 999)
  );
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

function getAvailableSubjects(level) {
  const subjects = new Set();

  VOCABULARY.forEach((item) => {
    if (
      String(item.level) === String(level) &&
      item.subject
    ) {
      subjects.add(item.subject);
    }
  });

  return [...subjects].sort((subjectA, subjectB) =>
    subjectA.localeCompare(subjectB, "ja")
  );
}

function getTopicStatus(topicInfo) {
  if (topicInfo.progressPercent === 100) {
    return "completed";
  }

  if (topicInfo.reviewCount > 0) {
    return "review";
  }

  if (topicInfo.completedCount > 0) {
    return "learning";
  }

  if (topicInfo.favoriteCount > 0) {
    return "favorite";
  }

  return "not-started";
}

function getTopicStatusIcon(status) {
  switch (status) {
    case "completed":
      return "✅";

    case "favorite":
      return "⭐";

    case "review":
      return "🔁";

    case "learning":
      return "📖";

    default:
      return "⭕";
  }
}

function buildTopicInfo(
  topicName,
  words,
  completedVocabulary,
  favoriteVocabulary,
  reviewVocabulary
) {
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
    words.length > 0
      ? Math.round(
        (completedCount / words.length) * 100
      )
      : 0;

  const topicInfo = {
    topic: topicName,
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
}

export default function VocabularyList({
  progress = {},
  onSelectTopic = () => { },
}) {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const [expandedSubjects, setExpandedSubjects] = useState({});

  const availableLevels = useMemo(
    () => getAvailableLevels(),
    []
  );

  const defaultLevel =
    availableLevels[0] || "N5";

  const selectedLevel =
    searchParams.get("level") || defaultLevel;

  const statusFilter =
    searchParams.get("status") || "all";

  const selectedSubject =
    searchParams.get("subject") || "all";

  const completedVocabulary =
    progress.completedVocabulary || [];

  const favoriteVocabulary =
    progress.favoriteVocabulary || [];

  const reviewVocabulary =
    progress.reviewVocabulary || [];

  const availableSubjects = useMemo(
    () => getAvailableSubjects(selectedLevel),
    [selectedLevel]
  );

  const setLevel = (level) => {
    setSearchParams({
      level,
      status: "all",
      subject: "all",
    });
  };

  const setStatus = (status) => {
    setSearchParams({
      level: selectedLevel,
      status,
      subject: selectedSubject,
    });
  };

  const setSubject = (subject) => {
    setSearchParams({
      level: selectedLevel,
      status: statusFilter,
      subject,
    });
  };

  const subjects = useMemo(() => {
    const vocabularyByLevel =
      VOCABULARY.filter(
        (item) =>
          String(item.level) ===
          String(selectedLevel)
      );

    const groupedBySubject =
      vocabularyByLevel.reduce(
        (subjectMap, item) => {
          const subject =
            item.subject || "Others";

          const topic =
            item.topic ||
            item.type ||
            "General";

          if (!subjectMap[subject]) {
            subjectMap[subject] = {};
          }

          if (!subjectMap[subject][topic]) {
            subjectMap[subject][topic] = [];
          }

          subjectMap[subject][topic].push(item);

          return subjectMap;
        },
        {}
      );

    return Object.entries(groupedBySubject)
      .map(([subjectName, topicsMap]) => {
        const topicList = Object.entries(
          topicsMap
        )
          .map(([topicName, words]) =>
            buildTopicInfo(
              topicName,
              words,
              completedVocabulary,
              favoriteVocabulary,
              reviewVocabulary
            )
          )
          .filter((topicInfo) => {
            if (statusFilter === "all") {
              return true;
            }

            return (
              topicInfo.status === statusFilter
            );
          })
          .sort((topicA, topicB) =>
            topicA.topic.localeCompare(
              topicB.topic,
              "ja"
            )
          );

        return {
          subject: subjectName,
          topics: topicList,
        };
      })
      .filter((subjectInfo) => {
        const matchesSubject =
          selectedSubject === "all" ||
          subjectInfo.subject === selectedSubject;

        return (
          matchesSubject &&
          subjectInfo.topics.length > 0
        );
      })
      .sort((subjectA, subjectB) =>
        subjectA.subject.localeCompare(
          subjectB.subject,
          "ja"
        )
      );
  }, [
    selectedLevel,
    selectedSubject,
    statusFilter,
    completedVocabulary,
    favoriteVocabulary,
    reviewVocabulary,
  ]);

  useEffect(() => {
    if (
      subjects.length > 0 &&
      Object.keys(expandedSubjects).length === 0
    ) {
      setExpandedSubjects({
        [subjects[0].subject]: false,
      });
    }
  }, [subjects]);

  const topicCount = subjects.reduce(
    (total, subject) =>
      total + subject.topics.length,
    0
  );

  const toggleSubject = (subjectName) => {
    setExpandedSubjects((prev) => ({
      ...prev,
      [subjectName]: !(prev[subjectName] ?? false),
    }));
  };

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

      <div className="grammar-lessons-list">

        {subjects.map((subject) => {

          const expanded =
            expandedSubjects[
            subject.subject
            ] ?? false;

          return (
            <CollapseGroup
              key={subject.subject}
              title={subject.subject}
              count={`${subject.topics.length} ${subject.topics.length === 1 ? "topic" : "topics"
                }`}
              isOpen={expanded}
              onToggle={() => toggleSubject(subject.subject)}
            >
              {expanded && (

                <div className="lesson-group-content">

                  {subject.topics.map(
                    (item) => (

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

                  {
                    subject.topics.length === 0 && (
                      <EmptyState>
                        No topics found for this subject.
                      </EmptyState>
                    )
                  }
                </div>

              )}
            </CollapseGroup>
            
          );
        })}
      </div>
    </Panel>
  );
}