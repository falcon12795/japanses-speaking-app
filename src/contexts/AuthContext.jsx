import { createContext, useContext, useMemo, useState } from "react";
import * as authService from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    authService.initializeUsers();
    return authService.getCurrentUser();
  });

  const value = useMemo(() => ({
    user,
    async login(username, password) {
      const next = await authService.login(username, password);
      setUser(next);
      return next;
    },
    async register(payload) {
      return authService.register(payload);
    },
    logout() {
      authService.logout();
      setUser(null);
    }
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
