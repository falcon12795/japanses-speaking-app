import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const EMPTY_FORM = { username: "", password: "", displayName: "" };

export default function LoginPage() {
  const { login, register } = useAuth();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState(EMPTY_FORM);
  const [notice, setNotice] = useState({ type: "", text: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isLogin = mode === "login";
  const update = (event) => setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  function switchMode() {
    setNotice({ type: "", text: "" });
    setForm((prev) => ({ ...prev, password: "" }));
    setShowPassword(false);
    setMode(isLogin ? "register" : "login");
  }

  function fillDemoAccount() {
    setForm({ ...EMPTY_FORM, username: "admin", password: "admin123" });
    setNotice({ type: "", text: "" });
  }

  async function submit(event) {
    event.preventDefault();
    setNotice({ type: "", text: "" });

    if (!form.username.trim() || !form.password) {
      setNotice({ type: "error", text: "Vui lòng nhập đầy đủ username và password." });
      return;
    }

    setLoading(true);
    try {
      if (isLogin) {
        await login(form.username, form.password);
      } else {
        await register(form);
        setForm((prev) => ({ ...prev, password: "", displayName: "" }));
        setShowPassword(false);
        setMode("login");
        setNotice({ type: "success", text: "Đăng ký thành công. Hãy đăng nhập." });
      }
    } catch (e) {
      setNotice({ type: "error", text: e.message || "Có lỗi xảy ra." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-shell">
      <form className="auth-card" onSubmit={submit} noValidate>
        <h1>{isLogin ? "ログイン" : "新規登録"}</h1>
        <p className="muted">Mỗi tài khoản có tiến độ, từ yêu thích và lịch sử quiz riêng.</p>
        {!isLogin && (
          <input name="displayName" value={form.displayName} onChange={update} placeholder="Tên hiển thị" autoComplete="name" />
        )}
        <input name="username" value={form.username} onChange={update} placeholder="Username" autoComplete="username" autoFocus required />
        <div className="password-field">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={update}
            placeholder="Password"
            autoComplete={isLogin ? "current-password" : "new-password"}
            required
          />
          <button
            type="button"
            className="secondary password-toggle"
            onClick={() => setShowPassword((value) => !value)}
            aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          >
            {showPassword ? "Ẩn" : "Hiện"}
          </button>
        </div>
        {notice.text && (
          <div className={`message ${notice.type}`} role={notice.type === "error" ? "alert" : "status"}>
            {notice.text}
          </div>
        )}
        <button disabled={loading}>{loading ? "Đang xử lý..." : isLogin ? "Đăng nhập" : "Đăng ký"}</button>
        <button type="button" className="secondary" onClick={switchMode} disabled={loading}>
          {isLogin ? "Tạo tài khoản" : "Quay lại đăng nhập"}
        </button>
        {isLogin && (
          <small>
            Tài khoản mẫu: admin / admin123{" "}
            <button type="button" className="link-button" onClick={fillDemoAccount}>Điền sẵn</button>
          </small>
        )}
      </form>
    </main>
  );
}
