const STORAGE_KEY = "japanese-learning-progress";

export const DEFAULT_PROGRESS = {
  vocabularyLearned: 0,
  vocabularyNeedReview: 0,
  kanaCorrect: 0,
  kanaWrong: 0,
  speakingPractice: 0,
  jlptCorrect: 0,
  jlptWrong: 0,
};

export function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_PROGRESS;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  return DEFAULT_PROGRESS;
}