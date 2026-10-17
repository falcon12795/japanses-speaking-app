import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { firebaseAuth, firestore, isFirebaseConfigured } from "../firebase";

function requireFirebase() {
  if (!isFirebaseConfigured) {
    throw new Error("Firebase chưa được cấu hình. Hãy thêm các biến VITE_FIREBASE_* vào môi trường rồi tải lại ứng dụng.");
  }
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

function profileRef(uid) {
  return doc(firestore, "userProfiles", uid);
}

async function appUser(firebaseUser) {
  if (!firebaseUser) return null;

  let profile = {};
  try {
    const snapshot = await getDoc(profileRef(firebaseUser.uid));
    profile = snapshot.exists() ? snapshot.data() : {};
  } catch (error) {
    if (!isPermissionDenied(error)) {
      throw error;
    }
  }

  const email = firebaseUser.email || "";
  return {
    id: firebaseUser.uid,
    uid: firebaseUser.uid,
    email,
    username: email.split("@")[0],
    displayName: profile.displayName || firebaseUser.displayName || email.split("@")[0],
  };
}

export function subscribeToAuth(callback, onError) {
  if (!isFirebaseConfigured) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(firebaseAuth, async (firebaseUser) => {
    try {
      callback(await appUser(firebaseUser));
    } catch (error) {
      onError?.(error);
    }
  }, onError);
}

export async function login(email, password) {
  requireFirebase();
  const credential = await signInWithEmailAndPassword(firebaseAuth, email.trim(), password);
  return appUser(credential.user);
}

export async function register({ email, password, displayName }) {
  requireFirebase();
  const name = displayName.trim() || email.trim().split("@")[0];
  const credential = await createUserWithEmailAndPassword(firebaseAuth, email.trim(), password);
  await updateProfile(credential.user, { displayName: name });

  try {
    await setDoc(profileRef(credential.user.uid), {
      uid: credential.user.uid,
      email: credential.user.email,
      displayName: name,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    if (!isPermissionDenied(error)) {
      throw error;
    }
  }

  return appUser(credential.user);
}

export async function logout() {
  requireFirebase();
  await signOut(firebaseAuth);
}
