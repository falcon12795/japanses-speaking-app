const STORAGE_KEY = "japanese-learning-progress";

export const DEFAULT_PROGRESS = {
  vocabularyLearned: 0,
  vocabularyNeedReview: 0,
  vocabularySpeakPractice: 0,
  vocabularyExampleSpeakPractice: 0,

  completedVocabulary: [],
  favoriteVocabulary: [],
  reviewVocabulary: [],

  kanaCorrect: 0,
  kanaWrong: 0,

  speakingPractice: 0,
  dialoguePractice: 0,

  completedDialogues: [],
  favoriteDialogues: [],
  dialogueScores: {},

  jlptCorrect: 0,
  jlptWrong: 0,
};

export function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return DEFAULT_PROGRESS;
    }

    return {
      ...DEFAULT_PROGRESS,
      ...JSON.parse(saved),
    };
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

const LANGUAGE_KEY = "learning-language";

export function loadLanguage() {
  return localStorage.getItem(LANGUAGE_KEY) || null;
}

export function saveLanguage(code) {
  localStorage.setItem(LANGUAGE_KEY, code);
}