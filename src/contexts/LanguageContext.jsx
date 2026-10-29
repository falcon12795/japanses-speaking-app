import { createContext, useContext, useMemo } from "react";

import { VOCABULARY, VOCABULARY_BY_LEVEL } from "../data/vocabulary";
import { GRAMMAR } from "../data/grammar";
import { DIALOGUES, DIALOGUES_BY_LEVEL } from "../data/dialogues";
import { JLPT_QUIZ } from "../data/jlptQuiz";

import { EN_VOCABULARY, EN_VOCABULARY_BY_LEVEL } from "../data/english/vocabulary";
import { EN_GRAMMAR } from "../data/english/grammar";
import { EN_DIALOGUES, EN_DIALOGUES_BY_LEVEL } from "../data/english/dialogues";
import { EN_QUIZ } from "../data/english/quiz";

import { KO_VOCABULARY, KO_VOCABULARY_BY_LEVEL } from "../data/korean/vocabulary";
import { KO_GRAMMAR } from "../data/korean/grammar";
import { KO_DIALOGUES, KO_DIALOGUES_BY_LEVEL } from "../data/korean/dialogues";
import { KO_QUIZ } from "../data/korean/quiz";

import { speakText, recognizeSpeech, recognizeSpeechWithAudio } from "../utils/speech";

const MENU_LABELS = {
  ja: {
    alphabet: "かな",
    vocabulary: "言葉",
    grammar: "文法",
    dialogue: "会話",
    quiz: "JLPT Quiz",
    progress: "進捗",
    quizTitle: "JLPT Quiz",
    footerNote: "今日も頑張りましょう！",
  },
  en: {
    alphabet: "Alphabet",
    vocabulary: "Vocabulary",
    grammar: "Grammar",
    dialogue: "Dialogues",
    quiz: "English Quiz",
    progress: "Progress",
    quizTitle: "English Quiz",
    footerNote: "Keep up the great work!",
  },
  ko: {
    alphabet: "한글",
    vocabulary: "어휘",
    grammar: "문법",
    dialogue: "회화",
    quiz: "TOPIK Quiz",
    progress: "진도",
    quizTitle: "TOPIK Quiz",
    footerNote: "오늘도 화이팅!",
  },
};

const DEFAULT_LABELS = MENU_LABELS.en;

const LanguageContext = createContext(null);

export function LanguageProvider({ language, children }) {
  const value = useMemo(() => {
    const isJa = language === "ja";
    const isEn = language === "en";
    const isKo = language === "ko";

    return {
      language,

      vocabulary: isJa ? VOCABULARY : isEn ? EN_VOCABULARY : isKo ? KO_VOCABULARY : [],
      vocabularyByLevel: isJa ? VOCABULARY_BY_LEVEL : isEn ? EN_VOCABULARY_BY_LEVEL : isKo ? KO_VOCABULARY_BY_LEVEL : {},

      grammar: isJa ? GRAMMAR : isEn ? EN_GRAMMAR : isKo ? KO_GRAMMAR : [],

      dialogues: isJa ? DIALOGUES : isEn ? EN_DIALOGUES : isKo ? KO_DIALOGUES : [],
      dialoguesByLevel: isJa ? DIALOGUES_BY_LEVEL : isEn ? EN_DIALOGUES_BY_LEVEL : isKo ? KO_DIALOGUES_BY_LEVEL : {},

      quiz: isJa ? JLPT_QUIZ : isEn ? EN_QUIZ : isKo ? KO_QUIZ : [],

      menuLabels: MENU_LABELS[language] || DEFAULT_LABELS,

      speakText: (text, options) => speakText(text, language, options),
      recognizeSpeech: () => recognizeSpeech(language),
      recognizeSpeechWithAudio: () => recognizeSpeechWithAudio(language),
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
