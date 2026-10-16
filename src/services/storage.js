const KEYS = {
  USERS: "jsa_users_v1",
  SESSION: "jsa_session_v1",
  PROGRESS: "jsa_progress_v1"
};

export function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error(`Cannot read localStorage key ${key}`, error);
    return fallback;
  }
}

export function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function remove(key) {
  localStorage.removeItem(key);
}

export { KEYS };
