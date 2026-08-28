import { useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";

import Button from "./common/Button";
import IconButton from "./common/IconButton";
import Panel from "./common/Panel";

import { useLanguage } from "../contexts/LanguageContext";
import Badge from "./common/Badge";

export default function VocabularyTopicDetail({
  topic,
  filter = "all",
  onPreviousTopic,
  onNextTopic,
  onPractice,
  onSelectWord,
  hasPrevious = true,
  hasNext = true,
}) {
    const { speakText } = useLanguage();
    const [activeWordId, setActiveWordId] = useState(null);
    const [isListeningAll, setIsListeningAll] = useState(false);

    const stopRef = useRef(false);
    const wordRefs = useRef({});

    useEffect(() => {
        return () => {
            window.speechSynthesis?.cancel();
        };
    }, []);

    useEffect(() => {
        if (!activeWordId) return;

        const element = wordRefs.current[activeWordId];

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [activeWordId]);

    if (!topic) {
        return (
            <Panel>
                <h3>No vocabulary topic found.</h3>
            </Panel>
        );
    }

    const speakWord = async (word) => {
        try {
            setActiveWordId(word.id);

            await new Promise((resolve) => {
                speakText(word.japanese, {
                    onEnd: resolve,
                    onError: resolve,
                });
            });

            if (word.example) {
                await new Promise((resolve) => {
                    speakText(word.example, {
                        cancelBeforeSpeak: false,
                        onEnd: resolve,
                        onError: resolve,
                    });
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const listenAll = async () => {
        if (isListeningAll) {
            stopRef.current = true;
            window.speechSynthesis?.cancel();
            setIsListeningAll(false);
            return;
        }

        stopRef.current = false;
        setIsListeningAll(true);

        try {
            for (const word of topic.words || []) {
                if (stopRef.current) break;

                setActiveWordId(word.id);

                await new Promise((resolve) => {
                    speakText(word.japanese, {
                        onEnd: resolve,
                        onError: resolve,
                    });
                });

                if (stopRef.current) break;

                await new Promise((resolve) => {
                    speakText(word.example || "", {
                        cancelBeforeSpeak: false,
                        onEnd: resolve,
                        onError: resolve,
                    });
                });
            }
        } finally {
            setIsListeningAll(false);
            setActiveWordId(null);
        }
    };

    return (
        <Panel>
            {/* Header */}
            <div className="topic-detail-header">
                <div className="topic-header">
                    <Badge>
                        {topic.level}
                    </Badge>

                    <Badge variant="secondary">
                        {topic.subject}
                    </Badge>

                    {filter !== "all" && (
                        <Badge variant="warning">
                            {filter === "favorite"
                                ? `⭐ Favorite: ${topic.words.length}`
                                : filter === "review"
                                    ? `🔁 Review: ${topic.words.length}`
                                    : `${filter}: ${topic.words.length}`}
                        </Badge>
                    )}
                </div>

                <h2>{topic.title}</h2>

                <div className="topic-nav-buttons">
                    {hasPrevious && (
                        <Button
                        variant="secondary"
                        onClick={onPreviousTopic}
                    >
                        Prev
                        </Button>
                    )}

                    {hasNext && (
                        <Button
                            variant="secondary"
                            onClick={onNextTopic}
                        >
                            Next
                        </Button>
                    )}
                </div>
            </div>

            {/* Toolbar */}
            <div className="buttons">
                <Button
                    variant={isListeningAll ? "danger" : "secondary"}
                    onClick={listenAll}
                >
                    {isListeningAll ? "Stop" : "Listen All"}
                </Button>

                <Button
                    variant="primary"
                    onClick={onPractice}
                >
                    Practice
                </Button>
            </div>

            {/* Word List */}
            <div className="topic-word-list">
                {(topic.words || []).map((word) => (
                    <div
                        key={word.id}
                        ref={(element) => {
                            if (element) {
                                wordRefs.current[word.id] = element;
                            }
                        }}
                        className={`topic-word-card ${activeWordId === word.id
                                ? "active-word-card"
                                : ""
                            }`}
                        role="button"
                        tabIndex={0}
                        onClick={() => onSelectWord?.(word)}
                        onKeyDown={(event) => {
                            if (
                                event.key === "Enter" ||
                                event.key === " "
                            ) {
                                event.preventDefault();
                                onSelectWord?.(word);
                            }
                        }}
                    >
                        <div className="topic-word-content">
                            <div className="topic-word-main">
                                <h3>{word.japanese}</h3>

                                {word.reading && (
                                    <p className="reading">
                                        {word.reading}
                                    </p>
                                )}

                                {word.meaning && (
                                    <p className="meaning">
                                        {word.meaning}
                                    </p>
                                )}

                                {word.example && (
                                    <p className="example">
                                        {word.example}
                                    </p>
                                )}

                                {word.exampleVietnamese && (
                                    <p className="example-vietnamese">
                                        {word.exampleVietnamese}
                                    </p>
                                )}
                            </div>

                            <IconButton
                                title="Listen to example"
                                onClick={(event) => {
                                    // Không navigate khi chỉ bấm nút nghe
                                    event.stopPropagation();
                                    speakWord(word);
                                }}
                            >
                                <Volume2
                                    size={22}
                                    strokeWidth={2.5}
                                />
                            </IconButton>
                        </div>
                    </div>
                ))}
            </div>
        </Panel>
    );
}