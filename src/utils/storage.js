import { fetchRemoteProgress, pushRemoteProgress } from "../services/fileSync";

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

const progressKey = (userId) => `${STORAGE_KEY}:${userId}`;

// Legacy single-user progress goes to the first account that logs in.
function migrateLegacyProgress(userId) {
  const legacy = localStorage.getItem(STORAGE_KEY);

  if (legacy === null || localStorage.getItem(progressKey(userId)) !== null) {
    return false;
  }

  localStorage.setItem(progressKey(userId), legacy);
  localStorage.removeItem(STORAGE_KEY);
  return true;
}

const pendingSyncs = new Map();

// localStorage stays the synchronous cache; userProgress.json is the source of truth when reachable.
export function syncProgress(userId) {
  if (!pendingSyncs.has(userId)) {
    pendingSyncs.set(userId, (async () => {
      const migrated = migrateLegacyProgress(userId);

      if (!migrated) {
        const remote = await fetchRemoteProgress(userId);
        if (remote) {
          localStorage.setItem(progressKey(userId), JSON.stringify(remote));
          return;
        }
      }

      await pushRemoteProgress(userId, loadProgress(userId));
    })());
  }
  return pendingSyncs.get(userId);
}

export function loadProgress(userId) {
  try {
    migrateLegacyProgress(userId);
    const saved = localStorage.getItem(progressKey(userId));

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

export function saveProgress(userId, progress) {
  localStorage.setItem(progressKey(userId), JSON.stringify(progress));
  pushRemoteProgress(userId, progress);
}

export function resetProgress(userId) {
  localStorage.removeItem(progressKey(userId));
  return DEFAULT_PROGRESS;
}

const LANGUAGE_KEY = "learning-language";

export function loadLanguage() {
  return localStorage.getItem(LANGUAGE_KEY) || null;
}

export function saveLanguage(code) {
  localStorage.setItem(LANGUAGE_KEY, code);
}