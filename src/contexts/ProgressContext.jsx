import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";
import * as progressService from "../services/progressService";

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState(progressService.emptyProgress());

  useEffect(() => {
    setProgress(user ? progressService.getProgress(user.id) : progressService.emptyProgress());
  }, [user]);

  const value = useMemo(() => ({
    progress,
    isFavorite(id) { return progress.favoriteWords.includes(id); },
    isLearned(id) { return progress.learnedWords.includes(id); },
    isLessonCompleted(id) { return progress.completedLessons.includes(id); },
    toggleFavorite(id) {
      if (!user) return;
      setProgress(progressService.toggleArrayValue(user.id, "favoriteWords", id));
    },
    toggleLearned(id) {
      if (!user) return;
      setProgress(progressService.toggleArrayValue(user.id, "learnedWords", id));
    },
    toggleLessonCompleted(id) {
      if (!user) return;
      setProgress(progressService.toggleArrayValue(user.id, "completedLessons", id));
    },
    addQuizResult(result) {
      if (!user) return;
      setProgress(progressService.addQuizResult(user.id, result));
    },
    exportJson() {
      if (user) progressService.downloadUserData(user);
    },
    async importJson(file) {
      if (!user) return;
      setProgress(await progressService.importUserData(user.id, file));
    }
  }), [progress, user]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const value = useContext(ProgressContext);
  if (!value) throw new Error("useProgress must be used inside ProgressProvider");
  return value;
}
