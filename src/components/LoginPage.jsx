import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const EMPTY_FORM = { email: "", password: "", displayName: "" };

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

  async function submit(event) {
    event.preventDefault();
    setNotice({ type: "", text: "" });

    if (!form.email.trim() || !form.password) {
      setNotice({ type: "error", text: "Vui lòng nhập đầy đủ email và password." });
      return;
    }

    setLoading(true);
    try {
      if (isLogin) {
        await login(form.email, form.password);
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
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <p className="muted">Mỗi tài khoản Firebase có tiến độ học riêng được lưu trên đám mây.</p>
        {!isLogin && (
          <input name="displayName" value={form.displayName} onChange={update} placeholder="Tên hiển thị" autoComplete="name" />
        )}
        <input name="email" type="email" value={form.email} onChange={update} placeholder="Email" autoComplete="email" autoFocus required />
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
      </form>
    </main>
  );
}
