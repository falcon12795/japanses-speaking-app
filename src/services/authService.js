import seedUsers from "../data/users.json";
import { createRemoteUser, fetchRemoteUsers } from "./fileSync";
import { KEYS, readJson, remove, writeJson } from "./storage";
import { DEFAULT_PROGRESS } from "../utils/storage";

function normalizeUsername(value) {
  return value.trim().toLowerCase();
}

export async function hashPassword(password) {
  const bytes = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function publicUser(user) {
  const { passwordHash, ...safeUser } = user;
  return safeUser;
}

export function initializeUsers() {
  const current = readJson(KEYS.USERS, null);
  if (!current?.users) {
    writeJson(KEYS.USERS, seedUsers);
    return seedUsers;
  }
  return current;
}

export function getUsersDocument() {
  return initializeUsers();
}

// users.json is the source of truth when the server is reachable.
export async function syncUsers() {
  const remote = await fetchRemoteUsers();
  if (remote) writeJson(KEYS.USERS, remote);
}

export function getCurrentUser() {
  return readJson(KEYS.SESSION, null);
}

export async function login(username, password) {
  const normalized = normalizeUsername(username);
  const passwordHash = await hashPassword(password);
  const document = getUsersDocument();
  const user = document.users.find(
    (item) => item.username === normalized && item.passwordHash === passwordHash
  );

  if (!user) throw new Error("Tên đăng nhập hoặc mật khẩu không đúng.");

  const session = publicUser(user);
  writeJson(KEYS.SESSION, session);
  return session;
}

export async function register({ username, password, displayName }) {
  const normalized = normalizeUsername(username);
  if (!/^[a-z0-9._-]{3,30}$/.test(normalized)) {
    throw new Error("Username gồm 3-30 ký tự: a-z, 0-9, dấu chấm, gạch dưới hoặc gạch ngang.");
  }
  if (password.length < 8) throw new Error("Mật khẩu phải có ít nhất 8 ký tự.");

  const document = getUsersDocument();
  if (document.users.some((item) => item.username === normalized)) {
    throw new Error("Tài khoản đã tồn tại.");
  }

  const user = {
    id: crypto.randomUUID(),
    username: normalized,
    displayName: displayName.trim() || normalized,
    role: "user",
    passwordHash: await hashPassword(password),
    createdAt: new Date().toISOString()
  };

  const result = await createRemoteUser(user, { ...DEFAULT_PROGRESS });
  if (result === "conflict") throw new Error("Tài khoản đã tồn tại.");

  document.users.push(user);
  writeJson(KEYS.USERS, document);
  return publicUser(user);
}

export function logout() {
  remove(KEYS.SESSION);
}
