import { buildDialogues } from "../builders";

import topik1 from "./topik1";
import topik1b from "./topik1b";
import topik1c from "./topik1c";
import topik1d from "./topik1d";
import topik2 from "./topik2";
import topik2b from "./topik2b";
import topik2c from "./topik2c";
import topik2d from "./topik2d";
import topik2e from "./topik2e";

const TOPIK_1 = buildDialogues({
  level: "TOPIK 1",
  code: "t1",
  lessons: [...topik1, ...topik1b, ...topik1c, ...topik1d],
});

const TOPIK_2 = buildDialogues({
  level: "TOPIK 2",
  code: "t2",
  lessons: [...topik2, ...topik2b, ...topik2c, ...topik2d, ...topik2e],
});

export const KO_DIALOGUES = [...TOPIK_1, ...TOPIK_2];

export const KO_DIALOGUES_BY_LEVEL = {
  "TOPIK 1": TOPIK_1,
  "TOPIK 2": TOPIK_2,
};
