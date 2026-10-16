import fs from "node:fs/promises";
import path from "node:path";

const MAX_BODY_BYTES = 1024 * 1024;
const USERNAME_PATTERN = /^[a-z0-9._-]{3,30}$/;
const ID_PATTERN = /^[\w-]{1,64}$/;
const HASH_PATTERN = /^[0-9a-f]{64}$/;

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

function httpError(status, message) {
  return Object.assign(new Error(message), { status });
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;

    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(httpError(413, "Payload too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "null"));
      } catch {
        reject(httpError(400, "Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

// Persists accounts to src/data/users.json and per-user progress to src/data/userProgress.json.
export default function userDataPlugin() {
  let dataDir = "";
  let queue = Promise.resolve();

  const usersFile = () => path.join(dataDir, "users.json");
  const progressFile = () => path.join(dataDir, "userProgress.json");

  // Serialises read-modify-write cycles so concurrent requests cannot corrupt the files.
  const enqueue = (task) => {
    const run = queue.then(task);
    queue = run.catch(() => {});
    return run;
  };

  async function readJson(file, fallback) {
    try {
      return JSON.parse(await fs.readFile(file, "utf8"));
    } catch (error) {
      if (error.code === "ENOENT") return fallback;
      throw error;
    }
  }

  async function writeJson(file, value) {
    const tmp = `${file}.tmp`;
    await fs.writeFile(tmp, `${JSON.stringify(value, null, 2)}\n`);
    await fs.rename(tmp, file);
  }

  async function readUsers() {
    const doc = await readJson(usersFile(), { users: [] });
    return Array.isArray(doc.users) ? doc : { ...doc, users: [] };
  }

  async function readProgress() {
    const doc = await readJson(progressFile(), {});
    return isPlainObject(doc) ? doc : {};
  }

  async function createUser(body) {
    const candidate = body?.user;
    if (
      !isPlainObject(candidate) ||
      !ID_PATTERN.test(candidate.id ?? "") ||
      !USERNAME_PATTERN.test(candidate.username ?? "") ||
      typeof candidate.displayName !== "string" ||
      !HASH_PATTERN.test(candidate.passwordHash ?? "") ||
      !isPlainObject(body.progress)
    ) {
      throw httpError(400, "Invalid user");
    }

    // Role is never taken from the client.
    const user = {
      id: candidate.id,
      username: candidate.username,
      displayName: candidate.displayName.slice(0, 100),
      role: "user",
      passwordHash: candidate.passwordHash,
      createdAt: new Date().toISOString()
    };

    return enqueue(async () => {
      const users = await readUsers();
      if (users.users.some((item) => item.username === user.username || item.id === user.id)) {
        throw httpError(409, "User already exists");
      }

      const progress = await readProgress();
      users.users.push(user);
      progress[user.id] = body.progress;

      await writeJson(usersFile(), users);
      await writeJson(progressFile(), progress);
      return { user };
    });
  }

  async function handle(req, res) {
    const url = new URL(req.url, "http://localhost");
    const segments = url.pathname.split("/").filter(Boolean);
    const [resource, userId] = segments;

    if (resource === "users" && segments.length === 1) {
      if (req.method === "GET") return send(res, 200, await enqueue(readUsers));
      if (req.method === "POST") return send(res, 201, await createUser(await readBody(req)));
    }

    if (resource === "progress" && segments.length === 2 && ID_PATTERN.test(userId)) {
      if (req.method === "GET") {
        const progress = await enqueue(readProgress);
        if (!Object.hasOwn(progress, userId)) throw httpError(404, "Not found");
        return send(res, 200, { progress: progress[userId] });
      }

      if (req.method === "PUT") {
        const body = await readBody(req);
        if (!isPlainObject(body?.progress)) throw httpError(400, "Invalid progress");

        await enqueue(async () => {
          const users = await readUsers();
          if (!users.users.some((item) => item.id === userId)) throw httpError(404, "Unknown user");

          const progress = await readProgress();
          progress[userId] = body.progress;
          await writeJson(progressFile(), progress);
        });
        return send(res, 200, { ok: true });
      }
    }

    throw httpError(404, "Not found");
  }

  const middleware = async (req, res) => {
    try {
      await handle(req, res);
    } catch (error) {
      const status = error.status || 500;
      send(res, status, { error: status === 500 ? "Internal error" : error.message });
    }
  };

  return {
    name: "user-data-files",
    config() {
      // Writing these files must not trigger a full reload of the running app.
      return {
        server: {
          watch: { ignored: ["**/src/data/users.json", "**/src/data/userProgress.json"] }
        }
      };
    },
    configResolved(config) {
      dataDir = path.resolve(config.root, "src/data");
    },
    configureServer(server) {
      server.middlewares.use("/api", middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use("/api", middleware);
    }
  };
}
