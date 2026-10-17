import { loadUserProgress, saveUserProgress } from "../services/firestoreProgress";
import { DEFAULT_PROGRESS } from "./progressDefaults";

export { DEFAULT_PROGRESS };

export const loadRemoteProgress = loadUserProgress;
export const saveProgress = saveUserProgress;

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