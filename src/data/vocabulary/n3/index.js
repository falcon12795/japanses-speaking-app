import { N3_ADJ } from "./adjective";
import { N3_ADVERB } from "./adverb";
import { N3_NOUNTS } from "./noun";
import { N3_VERB } from "./verb";

export const N3_VOCABULARY = [
    ...N3_ADVERB,
    ...N3_VERB,
    ...N3_NOUNTS,
    ...N3_ADJ,
];