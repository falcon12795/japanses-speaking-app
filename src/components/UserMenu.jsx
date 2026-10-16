import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useProgress } from "../contexts/ProgressContext";

export default function UserMenu() {
  const { user, logout } = useAuth();
  const { progress, exportJson, importJson } = useProgress();
  const inputRef = useRef(null);
  const [error, setError] = useState("");

  async function handleImport(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      await importJson(file);
      setError("Import thành công.");
    } catch (e) {
      setError(e.message || "Import thất bại.");
    } finally {
      event.target.value = "";
    }
  }

  return (
    <section className="user-panel">
      <div><strong>{user.displayName}</strong><div className="muted">@{user.username}</div></div>
      <div className="stats">
        <span>Đã học: {progress.learnedWords.length}</span>
        <span>Yêu thích: {progress.favoriteWords.length}</span>
        <span>Bài hoàn thành: {progress.completedLessons.length}</span>
      </div>
      <button onClick={exportJson}>Xuất JSON</button>
      <button className="secondary" onClick={() => inputRef.current?.click()}>Nhập JSON</button>
      <input ref={inputRef} hidden type="file" accept="application/json,.json" onChange={handleImport} />
      <button className="danger" onClick={logout}>Đăng xuất</button>
      {error && <small>{error}</small>}
    </section>
  );
}
