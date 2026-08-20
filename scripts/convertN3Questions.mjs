import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_FILE = path.join(
  __dirname,
  "../src/data/n3Ques.json"
);

const OUTPUT_FILE = path.join(
  __dirname,
  "../src/data/n3Ques.js"
);

const grammarMap = {
  "受身形": "n3-grammar-format-001",
  "使役形": "n3-grammar-format-002",
  "〜ように、〜ような": "n3-grammar-format-003",
  "〜ないと、〜なくちゃ": "n3-grammar-format-004",
  "〜ちゃう": "n3-grammar-format-005",
  "〜とく": "n3-grammar-format-006",
  "〜みたい": "n3-grammar-format-007",
  "〜らしい": "n3-grammar-format-008",
  "〜っぽい": "n3-grammar-format-009",
  "まるで〜よう/みたい": "n3-grammar-format-010",
};

const raw = fs.readFileSync(INPUT_FILE, "utf8");
const data = JSON.parse(raw);

const result = {};

data.forEach((item) => {
  const title = item.structure.split(" (")[0].trim();

  const grammarId = grammarMap[title];

  if (!grammarId) {
    console.warn(`Missing mapping: ${title}`);
    return;
  }

  result[grammarId] = {
    grammarId,
    title,
    questions: item.questions.map((q, index) => {
      let choices =
        q.options_fix ||
        q.options_jp ||
        q.options ||
        [];

      const answerIndex = choices.findIndex(
        (c) => c === q.answer
      );

      return {
        id: `${grammarId}-q${String(index + 1).padStart(2, "0")}`,
        grammarId,

        question: q.question,

        choices,

        answer:
          answerIndex >= 0
            ? answerIndex
            : 0,

        explanation:
          q.comment || "",
      };
    }),
  };
});

const output =
  "export const N3_GRAMMAR_QUESTIONS = " +
  JSON.stringify(result, null, 2) +
  ";\n";

fs.writeFileSync(
  OUTPUT_FILE,
  output,
  "utf8"
);

console.log("✅ Created:");
console.log(OUTPUT_FILE);