// Talks to the dev/preview server that persists data into src/data/*.json.
// Every call resolves to null/"offline" when the server is unavailable (e.g. static hosting).
async function call(path, options) {
  try {
    const response = await fetch(`/api${path}`, {
      headers: { "Content-Type": "application/json" },
      ...options
    });
    const isJson = response.headers.get("content-type")?.includes("application/json");
    const data = isJson ? await response.json() : null;
    return { status: response.status, ok: response.ok && isJson, data };
  } catch {
    return null;
  }
}

export async function fetchRemoteUsers() {
  const result = await call("/users");
  return result?.ok && Array.isArray(result.data?.users) ? result.data : null;
}

export async function createRemoteUser(user, progress) {
  const result = await call("/users", {
    method: "POST",
    body: JSON.stringify({ user, progress })
  });
  if (result?.ok) return "created";
  if (result?.status === 409 && result.data) return "conflict";
  return "offline";
}

// Resolves null when the server has no entry; throws when the server is unreachable.
export async function fetchRemoteProgress(userId) {
  const result = await call(`/progress/${encodeURIComponent(userId)}`);
  if (result?.status === 404 && result.data) return null;
  if (!result?.ok) throw new Error("Progress server unreachable");
  return result.data?.progress ?? null;
}

export async function pushRemoteProgress(userId, progress) {
  const result = await call(`/progress/${encodeURIComponent(userId)}`, {
    method: "PUT",
    body: JSON.stringify({ progress })
  });
  return Boolean(result?.ok);
}
