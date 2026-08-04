export function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    // eslint-disable-next-line no-irregular-whitespace
    .replace(/[。、！？!?,.\s　]/g, "")
    .replace(/[〜～]/g, "")
    .trim();
}

function calculateCharacterScore(userText, targetText) {
  const user = normalizeText(userText);
  const target = normalizeText(targetText);

  if (!user || !target) return 0;
  if (user === target) return 100;

  const userChars = Array.from(user);
  const targetChars = Array.from(target);

  let matched = 0;
  const usedIndexes = new Set();

  for (const targetChar of targetChars) {
    const foundIndex = userChars.findIndex((userChar, index) => {
      return userChar === targetChar && !usedIndexes.has(index);
    });

    if (foundIndex !== -1) {
      matched++;
      usedIndexes.add(foundIndex);
    }
  }

  return Math.round((matched / targetChars.length) * 100);
}

export function calculateSimpleSpeechScore(userText, targetText) {
  return calculateCharacterScore(userText, targetText);
}

export function calculateSpeechScoreWithAcceptedAnswers(userText, acceptedAnswers) {
  if (!Array.isArray(acceptedAnswers) || acceptedAnswers.length === 0) {
    return 0;
  }

  const scores = acceptedAnswers.map((answer) =>
    calculateCharacterScore(userText, answer)
  );

  return Math.max(...scores);
}