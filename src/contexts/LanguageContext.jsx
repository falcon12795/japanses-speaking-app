import { createContext, useContext, useMemo } from "react";

import { VOCABULARY, VOCABULARY_BY_LEVEL } from "../data/vocabulary";
import { GRAMMAR } from "../data/grammar";
import { DIALOGUES, DIALOGUES_BY_LEVEL } from "../data/dialogues";
import { JLPT_QUIZ } from "../data/jlptQuiz";

import { EN_VOCABULARY, EN_VOCABULARY_BY_LEVEL } from "../data/english/vocabulary";
import { EN_GRAMMAR } from "../data/english/grammar";
import { EN_DIALOGUES, EN_DIALOGUES_BY_LEVEL } from "../data/english/dialogues";
import { EN_QUIZ } from "../data/english/quiz";

import { speakText, recognizeSpeech } from "../utils/speech";

const MENU_LABELS = {
  ja: {
    vocabulary: "言葉",
    grammar: "文法",
    dialogue: "会話",
    quiz: "JLPT Quiz",
    progress: "進捗",
    quizTitle: "JLPT Quiz",
    footerNote: "今日も頑張りましょう！",
  },
  en: {
    vocabulary: "Vocabulary",
    grammar: "Grammar",
    dialogue: "Dialogues",
    quiz: "English Quiz",
    progress: "Progress",
    quizTitle: "English Quiz",
    footerNote: "Keep up the great work!",
  },
};

const DEFAULT_LABELS = MENU_LABELS.en;

const LanguageContext = createContext(null);

export function LanguageProvider({ language, children }) {
  const value = useMemo(() => {
    const isJa = language === "ja";
    const isEn = language === "en";

    return {
      language,

      vocabulary: isJa ? VOCABULARY : isEn ? EN_VOCABULARY : [],
      vocabularyByLevel: isJa ? VOCABULARY_BY_LEVEL : isEn ? EN_VOCABULARY_BY_LEVEL : {},

      grammar: isJa ? GRAMMAR : isEn ? EN_GRAMMAR : [],

      dialogues: isJa ? DIALOGUES : isEn ? EN_DIALOGUES : [],
      dialoguesByLevel: isJa ? DIALOGUES_BY_LEVEL : isEn ? EN_DIALOGUES_BY_LEVEL : {},

      quiz: isJa ? JLPT_QUIZ : isEn ? EN_QUIZ : [],

      menuLabels: MENU_LABELS[language] || DEFAULT_LABELS,

      speakText: (text, options) => speakText(text, language, options),
      recognizeSpeech: () => recognizeSpeech(language),
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }

  return ctx;
}
