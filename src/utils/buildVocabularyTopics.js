export function buildVocabularyTopics(vocabularyList) {
  const topicMap = new Map();

  vocabularyList.forEach((item) => {
    const key =
      `${item.level}-${item.subject}-${item.topic}`;

    if (!topicMap.has(key)) {
      topicMap.set(key, {
        id: key
          .toLowerCase()
          .replace(/\s+/g, "-"),

        level: item.level,

        subject:
          item.subject || "Others",

        title: item.topic,

        description:
          `${item.topic} vocabulary`,

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

  return [...topicMap.values()];
}
export function filterWordsByStatus(
  words,
  statusFilter,
  completedVocabulary,
  favoriteVocabulary,
  reviewVocabulary
) {
  switch (statusFilter) {
    case "favorite":
      return words.filter((word) =>
        favoriteVocabulary.includes(word.id)
      );

    case "review":
      return words.filter((word) =>
        reviewVocabulary.includes(word.id)
      );

    case "completed":
      return words.filter((word) =>
        completedVocabulary.includes(word.id)
      );

    case "learning":
      return words.filter(
        (word) =>
          !completedVocabulary.includes(word.id) &&
          !reviewVocabulary.includes(word.id)
      );

    case "not-started":
      return words.filter(
        (word) =>
          !completedVocabulary.includes(word.id) &&
          !favoriteVocabulary.includes(word.id) &&
          !reviewVocabulary.includes(word.id)
      );

    default:
      return words;
  }
}