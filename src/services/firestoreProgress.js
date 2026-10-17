import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { DEFAULT_PROGRESS } from "../utils/progressDefaults";

const STORAGE_PREFIX = "japanese-speaking-progress";

function progressRef(userId) {
  return doc(firestore, "userProgress", userId);
}

function progressStorageKey(userId) {
  return `${STORAGE_PREFIX}:${userId}`;
}

function isPermissionDenied(error) {
  return Boolean(
    error && (
      error.code === "permission-denied" ||
      error.message?.includes("permission") ||
      error.message?.includes("Missing or insufficient permissions")
    )
  );
}

function readLocalProgress(userId) {
  const raw = localStorage.getItem(progressStorageKey(userId));
  if (!raw) return { ...DEFAULT_PROGRESS };

  try {
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

function writeLocalProgress(userId, progress) {
  localStorage.setItem(progressStorageKey(userId), JSON.stringify(progress));
}

export async function loadUserProgress(userId) {
  try {
    const snapshot = await getDoc(progressRef(userId));
    if (snapshot.exists()) {
      return { ...DEFAULT_PROGRESS, ...snapshot.data() };
    }

    const initialProgress = { ...DEFAULT_PROGRESS };
    await setDoc(progressRef(userId), {
      ...initialProgress,
      updatedAt: serverTimestamp(),
    });
    return initialProgress;
  } catch (error) {
    if (isPermissionDenied(error)) {
      return readLocalProgress(userId);
    }

    throw error;
  }
}

export async function saveUserProgress(userId, progress) {
  writeChain = writeChain
    .catch(() => {})
    .then(async () => {
      try {
        await setDoc(progressRef(userId), {
          ...progress,
          updatedAt: serverTimestamp(),
        });
      } catch (error) {
        if (isPermissionDenied(error)) {
          writeLocalProgress(userId, progress);
          return;
        }

        throw error;
      }
    });
  return writeChain;
}

let writeChain = Promise.resolve();
