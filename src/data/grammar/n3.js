import { N3_001_GRAMMAR } from "./n3/n3_001";
import { N3_002_GRAMMAR } from "./n3/n3_002";
import { N3_003_GRAMMAR } from "./n3/n3_003";

export const N3_GRAMMAR = N3_001_GRAMMAR
  .concat(N3_002_GRAMMAR)
  .concat(N3_003_GRAMMAR);
