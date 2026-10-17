import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { DEFAULT_PROGRESS } from "../utils/progressDefaults";

function progressRef(userId) {
  return doc(firestore, "userProgress", userId);
}

export async function loadUserProgress(userId) {
  const snapshot = await getDoc(progressRef(userId));
  if (snapshot.exists()) {
    return { ...DEFAULT_PROGRESS, ...snapshot.data() };
  }

  await setDoc(progressRef(userId), {
    ...DEFAULT_PROGRESS,
    updatedAt: serverTimestamp(),
  });
  return { ...DEFAULT_PROGRESS };
}

export async function saveUserProgress(userId, progress) {
  writeChain = writeChain
    .catch(() => {})
    .then(() => setDoc(progressRef(userId), {
      ...progress,
      updatedAt: serverTimestamp(),
    }));
  return writeChain;
}

let writeChain = Promise.resolve();
