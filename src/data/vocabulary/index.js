import { N1_VOCABULARY } from "./n1";
import { N2_VOCABULARY } from "./n2";
import { N3_VOCABULARY } from "./n3";
import { N4_VOCABULARY } from "./n4";
import { N5_VOCABULARY } from "./n5";

export const VOCABULARY = [
  ...N1_VOCABULARY,
  ...N2_VOCABULARY,
  ...N3_VOCABULARY,
  ...N4_VOCABULARY,
  ...N5_VOCABULARY,
];

export const VOCABULARY_BY_LEVEL = {
  N1: N1_VOCABULARY,
  N2: N2_VOCABULARY,
  N3: N3_VOCABULARY,
  N4: N4_VOCABULARY,
  N5: N5_VOCABULARY,
};