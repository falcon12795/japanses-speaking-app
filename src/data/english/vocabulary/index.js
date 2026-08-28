import { EN_A1_VOCABULARY } from "./a1";
import { EN_A2_VOCABULARY } from "./a2";
import { EN_B1_VOCABULARY } from "./b1";
import { EN_SUBJECTS } from "./subjects";

export const EN_VOCABULARY = [
  ...EN_A1_VOCABULARY,
  ...EN_A2_VOCABULARY,
  ...EN_B1_VOCABULARY,
  ...EN_SUBJECTS,
];

export const EN_VOCABULARY_BY_LEVEL = {
  A1: EN_A1_VOCABULARY,
  A2: EN_A2_VOCABULARY,
  B1: EN_B1_VOCABULARY,
  SUBJECTS: EN_SUBJECTS,
};
