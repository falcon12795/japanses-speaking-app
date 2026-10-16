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

// Pre-account progress; moved to the first account that logs in.
function readLegacyProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

const isDefaultProgress = (progress) =>
  Object.keys(DEFAULT_PROGRESS).every(
    (key) => JSON.stringify(progress[key] ?? DEFAULT_PROGRESS[key]) === JSON.stringify(DEFAULT_PROGRESS[key])
  );

// userProgress.json is the only store; throws when the server is unreachable.
export async function loadRemoteProgress(userId) {
  const remote = await fetchRemoteProgress(userId);

  // Real progress already on the server wins over this device's legacy data.
  if (remote && !isDefaultProgress(remote)) {
    return { ...DEFAULT_PROGRESS, ...remote };
  }

  const legacy = readLegacyProgress();
  const progress = { ...DEFAULT_PROGRESS, ...(legacy ?? remote) };

  if (await pushRemoteProgress(userId, progress)) {
    if (legacy) localStorage.removeItem(STORAGE_KEY);
  } else {
    throw new Error("Cannot save progress");
  }

  return progress;
}

// Writes are chained so they reach the server in the order they were made.
let pushChain = Promise.resolve();

export function saveProgress(userId, progress) {
  pushChain = pushChain
    .then(() => pushRemoteProgress(userId, progress))
    .then((ok) => {
      if (!ok) console.error("Could not save progress to the server.");
    });
  return pushChain;
}

export function resetProgress() {
  return DEFAULT_PROGRESS;
}

const LANGUAGE_KEY = "learning-language";

export function loadLanguage() {
  return localStorage.getItem(LANGUAGE_KEY) || null;
}

export function saveLanguage(code) {
  localStorage.setItem(LANGUAGE_KEY, code);
}