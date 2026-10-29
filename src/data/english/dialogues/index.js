import { EN_A1_DIALOGUES } from "./a1";
import { EN_A2_DIALOGUES } from "./a2";
import { EN_B1_DIALOGUES } from "./b1";
import { EN_B2_DIALOGUES } from "./b2";
import { EN_C1_DIALOGUES } from "./c1";
import { EN_C2_DIALOGUES } from "./c2";
import { EN_GENERAL } from "./general";

export const EN_DIALOGUES = [
  ...EN_A1_DIALOGUES,
  ...EN_A2_DIALOGUES,
  ...EN_B1_DIALOGUES,
  ...EN_B2_DIALOGUES,
  ...EN_C1_DIALOGUES,
  ...EN_C2_DIALOGUES,
  ...EN_GENERAL,
];

export const EN_DIALOGUES_BY_LEVEL = {
  A1: EN_A1_DIALOGUES,
  A2: EN_A2_DIALOGUES,
  B1: EN_B1_DIALOGUES,
  B2: EN_B2_DIALOGUES,
  C1: EN_C1_DIALOGUES,
  C2: EN_C2_DIALOGUES,
  GENERAL: EN_GENERAL,
};
