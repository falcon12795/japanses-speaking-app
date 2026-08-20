export function buildVocabularyTopics(vocabularyList) {
  const topicMap = new Map();

  vocabularyList.forEach((item) => {
    const key = `${item.level}-${item.topic}`;

    if (!topicMap.has(key)) {
      topicMap.set(key, {
        id: `${item.level}-${item.topic}`
          .toLowerCase()
          .replace(/\s+/g, "-"),

        level: item.level,

        title: item.topic,

        description: `${item.topic} vocabulary`,

        words: [],
      });
    }

    topicMap.get(key).words.push({
      id: item.id,
      japanese: item.japanese,
      reading: item.reading,
      meaning: item.vietnamese,

      example:
        item.example?.japanese || "",

      exampleVietnamese:
        item.example?.vietnamese || "",
    });
  });

  return [...topicMap.values()].sort((a, b) => {
    if (a.level !== b.level) {
      return a.level.localeCompare(b.level);
    }

    return a.title.localeCompare(b.title);
  });
}