import { N3_001_VOCABULARY } from "./n3/n3_001";
import { N3_002_VOCABULARY } from "./n3/n3_002";
import { N3_003_VOCABULARY } from "./n3/n3_003";
import { N3_004_VOCABULARY } from "./n3/n3_004";
import { N3_005_VOCABULARY } from "./n3/n3_005";
import { N3_006_VOCABULARY } from "./n3/n3_006";

export const N3_VOCABULARY = N3_001_VOCABULARY
    .concat(N3_002_VOCABULARY)
    .concat(N3_003_VOCABULARY)
    .concat(N3_004_VOCABULARY)
    .concat(N3_005_VOCABULARY)
    .concat(N3_006_VOCABULARY);