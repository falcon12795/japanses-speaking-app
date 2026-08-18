// splitN2Questions.js

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_FILE = path.join(
  __dirname,
  "../src/data/training/n1Ques.js"
);

const OUTPUT_DIR = path.join(
  __dirname,
  "../src/data/training/n1"
);

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, {
    recursive: true,
  });
}

const content = fs.readFileSync(
  INPUT_FILE,
  "utf8"
);

const start = content.indexOf("{");
const end = content.lastIndexOf("}");

const objectText = content.substring(
  start,
  end + 1
);

const data = Function(`
  "use strict";
  return (${objectText});
`)();

const chunkSize = 20;
const entries = Object.entries(data);

let generatedFiles = 0;

for (
  let i = 0;
  i < entries.length;
  i += chunkSize
) {
  const chunk = Object.fromEntries(
    entries.slice(i, i + chunkSize)
  );

  const fileName =
    `n1-part-${String(
      generatedFiles + 1
    ).padStart(2, "0")}.js`;

  fs.writeFileSync(
    path.join(OUTPUT_DIR, fileName),
    `export default ${JSON.stringify(
      chunk,
      null,
      2
    )};`,
    "utf8"
  );

  generatedFiles++;
}

console.log(
  `Generated ${generatedFiles} files from ${entries.length} grammar items.`
);