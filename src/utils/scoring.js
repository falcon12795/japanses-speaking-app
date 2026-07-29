export function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[。、！？!?,.\s]/g, "")
    .trim();
}

export function calculateSimpleSpeechScore(userText, targetText) {
  const user = normalizeText(userText);
  const target = normalizeText(targetText);

  if (!user || !target) return 0;
  if (user === target) return 100;

  let matched = 0;

  for (const char of target) {
    if (user.includes(char)) {
      matched++;
    }
  }

  return Math.round((matched / target.length) * 100);
}