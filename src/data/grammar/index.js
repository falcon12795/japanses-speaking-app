import { N1_GRAMMAR } from "./n1";
import { N2_GRAMMAR } from "./n2";
import { N3_GRAMMAR } from "./n3";
import { N4_GRAMMAR } from "./n4";
import { N5_GRAMMAR } from "./n5";

export const GRAMMAR = [
  ...N1_GRAMMAR,
  ...N2_GRAMMAR,
  ...N3_GRAMMAR,
  ...N4_GRAMMAR,
  ...N5_GRAMMAR,
];

export const GRAMMAR_BY_LEVEL = {
  N1: N1_GRAMMAR,
  N2: N2_GRAMMAR,
  N3: N3_GRAMMAR,
  N4: N4_GRAMMAR,
  N5: N5_GRAMMAR,
};