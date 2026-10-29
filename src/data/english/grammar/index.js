import a1Grammar from "./a1";
import a2Grammar from "./a2";
import b1Grammar from "./b1";
import b2Grammar from "./b2";
import c1Grammar from "./c1";
import c2Grammar from "./c2";

export const EN_GRAMMAR = [
  ...a1Grammar,
  ...a2Grammar,
  ...b1Grammar,
  ...b2Grammar,
  ...c1Grammar,
  ...c2Grammar,
];

export const EN_GRAMMAR_BY_LEVEL = {
  A1: a1Grammar,
  A2: a2Grammar,
  B1: b1Grammar,
  B2: b2Grammar,
  C1: c1Grammar,
  C2: c2Grammar,
};
