import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useLanguage } from "../contexts/LanguageContext";

import Badge from "./common/Badge";
import Button from "./common/Button";
import EmptyState from "./common/EmptyState";
import FilterBar from "./common/FilterBar";
import Panel from "./common/Panel";
import ProgressBar from "./common/ProgressBar";
import CollapseGroup from "./common/CollapseGroup";
import { filterWordsByStatus } from "../utils/buildVocabularyTopics";

const STATUS_FILTERS = [
  { value: "all", label: "All" },
  { value: "not-started", label: "Not Started" },
  { value: "learning", label: "Learning" },
  { value: "completed", label: "Completed" },
  { value: "favorite", label: "Favorite" },
  { value: "review", label: "Review" },
];

function sortLevels(levels, vocabulary) {
  // JLPT levels need explicit ordering; CEFR (A1, A2, B1…) sort fine alphabetically
  const jlptOrder = { N1: 1, N2: 2, N3: 3, N4: 4, N5: 5, IT: 6 };
  const hasJlpt = levels.some((l) => l in jlptOrder);

  if (hasJlpt) {
    return [...levels].sort((a, b) => (jlptOrder[a] || 999) - (jlptOrder[b] || 999));
  }

  return [...levels].sort();
}

function getAvailableLevels(vocabulary) {
  const levels = new Set();

  vocabulary.forEach((item) => {
    if (item.level) {
      levels.add(item.level);
    }
  });

  return sortLevels([...levels], vocabulary);
}


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
  level,
  subjectName,
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
    id: `${level}-${subjectName}-${topicName}`
      .toLowerCase()
      .replace(/\s+/g, "-"),
    level,
    subject: subjectName,
    ...topicInfo,
    status: getTopicStatus(topicInfo),
  };
}

export default function VocabularyList({
  progress = {},
  onSelectTopic = () => { },
}) {
  const navigate = useNavigate();
  const { vocabulary } = useLanguage();
  const [searchParams, setSearchParams] =
    useSearchParams();

  const [expandedSubjects, setExpandedSubjects] = useState({});
  const [selectedTopicIds, setSelectedTopicIds] = useState([]);

  const availableLevels = useMemo(
    () => getAvailableLevels(vocabulary),
    [vocabulary]
  );

  const defaultLevel =
    availableLevels[0] || "N5";

  const selectedLevel =
    searchParams.get("level") || defaultLevel;

  const statusFilter =
    searchParams.get("status") || "all";

  const selectedSubject =
    searchParams.get("subject") || "all";

  const openSubject =
    searchParams.get("open") || "";

  const completedVocabulary = useMemo(
    () => progress.completedVocabulary || [],
    [progress.completedVocabulary]
  );

  const favoriteVocabulary = useMemo(
    () => progress.favoriteVocabulary || [],
    [progress.favoriteVocabulary]
  );

  const reviewVocabulary = useMemo(
    () => progress.reviewVocabulary || [],
    [progress.reviewVocabulary]
  );


  const setLevel = (level) => {
    setSelectedTopicIds([]);
    setSearchParams({
      level,
      status: "all",
      subject: "all",
    });
  };

  const isTopicSelected = (topicId) => selectedTopicIds.includes(topicId);

  const toggleTopicSelection = (event, topicId) => {
    event.stopPropagation();

    setSelectedTopicIds((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const isSubjectFullySelected = (topics) =>
    topics.length > 0 &&
    topics.every((topic) => selectedTopicIds.includes(topic.id));

  const handleSelectAllSubject = (topics) => {
    const topicIds = topics.map((topic) => topic.id);
    const allSelected = topicIds.every((id) => selectedTopicIds.includes(id));

    if (allSelected) {
      setSelectedTopicIds((prev) => prev.filter((id) => !topicIds.includes(id)));
    } else {
      setSelectedTopicIds((prev) => [...new Set([...prev, ...topicIds])]);
    }
  };

  const startTraining = () => {
    if (selectedTopicIds.length === 0) return;

    const ids = selectedTopicIds.join(",");

    navigate(`/training?type=vocabulary&topics=${encodeURIComponent(ids)}`);
  };

  const setStatus = (status) => {
    setSearchParams({
      level: selectedLevel,
      status,
      subject: selectedSubject,
    });
  };

  const subjects = useMemo(() => {
    const vocabularyByLevel =
      vocabulary.filter(
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
        const topicList = Object.entries(topicsMap)
          .map(([topicName, allWords]) => {
            const filteredWords = filterWordsByStatus(
              allWords,
              statusFilter,
              completedVocabulary,
              favoriteVocabulary,
              reviewVocabulary
            );

            if (filteredWords.length === 0) {
              return null;
            }

            const fullTopicInfo = buildTopicInfo(
              selectedLevel,
              subjectName,
              topicName,
              allWords,
              completedVocabulary,
              favoriteVocabulary,
              reviewVocabulary
            );

            return {
              ...fullTopicInfo,

              // Chỉ chứa các từ phù hợp filter hiện tại
              words: filteredWords,

              // Badge hiển thị số từ đã được lọc
              count: filteredWords.length,

              // Giữ tổng số từ để có thể hiển thị nếu cần
              totalCount: allWords.length,
            };
          })
          .filter(Boolean)
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

  const initialExpandedSubjects = useMemo(() => {
    if (subjects.length === 0) {
      return {};
    }

    const subjectToExpand =
      openSubject &&
      subjects.some((subject) => subject.subject === openSubject)
        ? openSubject
        : subjects[0].subject;

    return {
      [subjectToExpand]: subjectToExpand === openSubject,
    };
  }, [subjects, openSubject]);

  const visibleExpandedSubjects =
    Object.keys(expandedSubjects).length > 0
      ? expandedSubjects
      : initialExpandedSubjects;

  const toggleSubject = (subjectName) => {
    const newIsOpen =
      !(visibleExpandedSubjects[subjectName] ?? false);

    setExpandedSubjects((prev) => ({
      ...prev,
      [subjectName]: newIsOpen,
    }));

    setSearchParams(
      {
        level: selectedLevel,
        status: statusFilter,
        subject: selectedSubject,
        ...(newIsOpen ? { open: subjectName } : {}),
      },
      { replace: true }
    );
  };

  return (
    <Panel>
      <div className="vocabulary-list-top-row">
        <div className="vocabulary-list-header">
          <h2>Vocabulary Library</h2>

          <p className="subtitle">
            Choose a JLPT level and topic to start learning vocabulary.
          </p>
        </div>

        <Button
          variant="primary"
          className="vocabulary-training-button"
          disabled={selectedTopicIds.length === 0}
          onClick={startTraining}
        >
          Training
        </Button>
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

      {selectedTopicIds.length > 0 && (
        <div className="vocabulary-selected-summary">
          Selected {selectedTopicIds.length} topic
          {selectedTopicIds.length > 1 ? "s" : ""}
        </div>
      )}

      <div className="grammar-lesson-list">

        {subjects.map((subject) => {

          const expanded =
            visibleExpandedSubjects[
            subject.subject
            ] ?? false;

          return (
            <CollapseGroup
              key={subject.subject}
              title={subject.subject}
              headerActions={
                <Button
                  variant={
                    isSubjectFullySelected(subject.topics)
                      ? "primary"
                      : "secondary"
                  }
                  size="small"
                  onClick={(event) => {
                    event.stopPropagation();

                    handleSelectAllSubject(subject.topics);
                  }}
                >
                  {isSubjectFullySelected(subject.topics)
                    ? "✓ Selected All"
                    : "Select All"}
                </Button>
              }
              count={`${subject.topics.length} ${subject.topics.length === 1 ? "topic" : "topics"
                }`}
              isOpen={expanded}
              onToggle={() => toggleSubject(subject.subject)}
            >
              {expanded && (

                <div className="lesson-group-content">

                  {subject.topics.map(
                    (item) => {
                      const selected = isTopicSelected(item.id);

                      return (
                        <div
                          key={item.topic}
                          className={`list-card vocabulary-topic-card vocabulary-selectable-card ${
                            selected ? "vocabulary-selected-card" : ""
                          }`}
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            onSelectTopic(
                              item.id,
                              statusFilter
                            )
                          }
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              onSelectTopic(item.id, statusFilter);
                            }
                          }}
                        >
                          <div className="vocabulary-topic-card-content">
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
                          </div>

                          <button
                            type="button"
                            className={`vocabulary-select-button ${
                              selected ? "selected" : ""
                            }`}
                            aria-label={
                              selected
                                ? `Unselect ${item.topic}`
                                : `Select ${item.topic}`
                            }
                            onClick={(event) =>
                              toggleTopicSelection(event, item.id)
                            }
                          />
                        </div>
                      );
                    })}

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