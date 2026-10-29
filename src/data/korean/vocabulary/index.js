import { buildVocabulary } from "../builders";

import s01 from "./topik1/s01";
import s02 from "./topik1/s02";
import s03 from "./topik1/s03";
import s04 from "./topik1/s04";
import s05 from "./topik1/s05";
import s06 from "./topik1/s06";
import s07 from "./topik1/s07";
import s08 from "./topik1/s08";
import s09 from "./topik1/s09";
import s10 from "./topik1/s10";

import t2s01 from "./topik2/s01";
import t2s02 from "./topik2/s02";
import t2s03 from "./topik2/s03";
import t2s04 from "./topik2/s04";
import t2s05 from "./topik2/s05";

const TOPIK_1 = buildVocabulary({
  level: "TOPIK 1",
  code: "t1",
  subjects: [s01, s02, s03, s04, s05, s06, s07, s08, s09, s10],
});

const TOPIK_2 = buildVocabulary({
  level: "TOPIK 2",
  code: "t2",
  subjects: [t2s01, t2s02, t2s03, t2s04, t2s05],
});

export const KO_VOCABULARY = [...TOPIK_1, ...TOPIK_2];

export const KO_VOCABULARY_BY_LEVEL = {
  "TOPIK 1": TOPIK_1,
  "TOPIK 2": TOPIK_2,
};
