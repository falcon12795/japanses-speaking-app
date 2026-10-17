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
      const progress = { ...DEFAULT_PROGRESS, ...snapshot.data() };
      writeLocalProgress(userId, progress);
      return progress;
    }

    // Recover progress saved locally while Firestore rules or connectivity were unavailable.
    const initialProgress = readLocalProgress(userId);
    await setDoc(progressRef(userId), {
      ...initialProgress,
      updatedAt: serverTimestamp(),
    });
    return initialProgress;
  } catch (error) {
    if (isPermissionDenied(error)) {
      console.warn(
        "Firestore denied progress access. Check that firestore.rules is published and allows userProgress/{uid} for the signed-in user.",
      );
      return readLocalProgress(userId);
    }

    throw error;
  }
}

export async function saveUserProgress(userId, progress) {
  // Keep a recoverable copy even if the remote write is denied or the device goes offline.
  writeLocalProgress(userId, progress);
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
          console.warn(
            "Firestore denied the progress write. Progress is saved locally; publish firestore.rules to enable cloud sync.",
          );
          return;
        }

        throw error;
      }
    });
  return writeChain;
}

let writeChain = Promise.resolve();
