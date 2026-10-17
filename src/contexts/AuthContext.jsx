import { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as authService from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => authService.subscribeToAuth(
    (nextUser) => {
      setUser(nextUser);
      setLoading(false);
    },
    (error) => {
      console.error("Firebase auth state failed:", error);
      setLoading(false);
    }
  ), []);

  const value = useMemo(() => ({
    user,
    loading,
    async login(username, password) {
      return authService.login(username, password);
    },
    async register(payload) {
      return authService.register(payload);
    },
    async logout() {
      await authService.logout();
    }
  }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// The hook is intentionally exported beside its provider/context.
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
