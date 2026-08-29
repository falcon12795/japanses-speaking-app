import { EN_A1_DIALOGUES } from "./a1";
import { EN_A2_DIALOGUES } from "./a2";
import { EN_GENERAL } from "./general";

export const EN_DIALOGUES = [
  ...EN_A1_DIALOGUES,
  ...EN_A2_DIALOGUES,
  ...EN_GENERAL,
];

export const EN_DIALOGUES_BY_LEVEL = {
  A1: EN_A1_DIALOGUES,
  A2: EN_A2_DIALOGUES,
  GENERAL: EN_GENERAL,
};
