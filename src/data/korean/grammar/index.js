import { buildGrammar } from "../builders";

import topik1Lessons from "./topik1";
import topik2Lessons from "./topik2";

const TOPIK_1 = buildGrammar({ level: "TOPIK 1", code: "ko1", lessons: topik1Lessons });
const TOPIK_2 = buildGrammar({ level: "TOPIK 2", code: "ko2", lessons: topik2Lessons });

export const KO_GRAMMAR = [...TOPIK_1.grammar, ...TOPIK_2.grammar];

export const KO_GRAMMAR_BY_LEVEL = {
  "TOPIK 1": TOPIK_1.grammar,
  "TOPIK 2": TOPIK_2.grammar,
};

export const KO_GRAMMAR_QUESTIONS = {
  ...TOPIK_1.questions,
  ...TOPIK_2.questions,
};
