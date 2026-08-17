import { N2_001_GRAMMAR } from "./n2/n2_001";
import { N2_002_GRAMMAR } from "./n2/n2_002";
import { N2_003_GRAMMAR } from "./n2/n2_003";
import { N2_004_GRAMMAR } from "./n2/n2_004";
import { N2_005_GRAMMAR } from "./n2/n2_005";

export const N2_GRAMMAR = N2_001_GRAMMAR
    .concat(N2_002_GRAMMAR)
    .concat(N2_003_GRAMMAR)
    .concat(N2_004_GRAMMAR)
    .concat(N2_005_GRAMMAR);    