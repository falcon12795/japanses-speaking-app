import { IT_DIALOGUES } from "./it";
import { N1_DIALOGUES } from "./n1";
import { N2_DIALOGUES } from "./n2";
import { N3_DIALOGUES } from "./n3";
import { N4_DIALOGUES } from "./n4";
import { N5_DIALOGUES } from "./n5";

export const DIALOGUES = [
  ...IT_DIALOGUES,
  ...N1_DIALOGUES,
  ...N2_DIALOGUES,
  ...N3_DIALOGUES,
  ...N4_DIALOGUES,
  ...N5_DIALOGUES,
];

export const DIALOGUES_BY_LEVEL = {
  IT: IT_DIALOGUES,
  N1: N1_DIALOGUES,
  N2: N2_DIALOGUES,
  N3: N3_DIALOGUES,
  N4: N4_DIALOGUES,
  N5: N5_DIALOGUES,
};