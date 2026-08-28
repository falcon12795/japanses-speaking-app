import a1Grammar from "./a1";
import a2Grammar from "./a2";
import b1Grammar from "./b1";

export const EN_GRAMMAR = [
  ...a1Grammar,
  ...a2Grammar,
  ...b1Grammar,
];

export const EN_GRAMMAR_BY_LEVEL = {
  A1: a1Grammar,
  A2: a2Grammar,
  B1: b1Grammar,
};
