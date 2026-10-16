import seedProgress from "../data/userProgress.json";
import { KEYS, readJson, writeJson } from "./storage";

export function emptyProgress() {
  return {
    favoriteWords: [],
    learnedWords: [],
    completedLessons: [],
    quizHistory: [],
    updatedAt: null
  };
}

export function initializeProgress() {
  const current = readJson(KEYS.PROGRESS, null);
  if (!current || typeof current !== "object" || Array.isArray(current)) {
    writeJson(KEYS.PROGRESS, seedProgress);
    return seedProgress;
  }
  return current;
}

export function getProgress(userId) {
  const all = initializeProgress();
  if (!all[userId]) {
    all[userId] = emptyProgress();
    writeJson(KEYS.PROGRESS, all);
  }
  return structuredClone(all[userId]);
}

export function saveProgress(userId, progress) {
  const all = initializeProgress();
  all[userId] = { ...progress, updatedAt: new Date().toISOString() };
  writeJson(KEYS.PROGRESS, all);
  return structuredClone(all[userId]);
}

export function toggleArrayValue(userId, field, value) {
  const progress = getProgress(userId);
  const values = new Set(progress[field] || []);
  values.has(value) ? values.delete(value) : values.add(value);
  progress[field] = [...values];
  return saveProgress(userId, progress);
}

export function addQuizResult(userId, result) {
  const progress = getProgress(userId);
  progress.quizHistory.unshift({
    id: crypto.randomUUID(),
    ...result,
    completedAt: new Date().toISOString()
  });
  progress.quizHistory = progress.quizHistory.slice(0, 100);
  return saveProgress(userId, progress);
}

export function exportUserData(user) {
  return {
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    user,
    progress: getProgress(user.id)
  };
}

export function downloadUserData(user) {
  const blob = new Blob([JSON.stringify(exportUserData(user), null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${user.username}-learning-progress.json`;
  link.click();
  URL.revokeObjectURL(url);
}

export async function importUserData(userId, file) {
  const text = await file.text();
  const data = JSON.parse(text);
  if (!data?.progress || typeof data.progress !== "object") {
    throw new Error("File JSON không có progress hợp lệ.");
  }
  return saveProgress(userId, { ...emptyProgress(), ...data.progress });
}
