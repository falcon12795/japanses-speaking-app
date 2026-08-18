import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_FILE = path.join(
  __dirname,
  "../src/data/grammar/n1.js"
);

const OUTPUT_DIR = path.join(
  __dirname,
  "../src/data/grammar/n1"
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

const match = content.match(
  /export\s+const\s+\w+\s*=\s*(\[[\s\S]*\]);?/
);

if (!match) {
  throw new Error(
    "Cannot find grammar array"
  );
}

const grammarArray = Function(
  `"use strict";
   return (${match[1]});
`
)();

console.log(
  `Found ${grammarArray.length} grammar items`
);

const chunkSize = 10;

let generatedFiles = 0;
const importLines = [];
const mergeLines = [];

for (
  let i = 0;
  i < grammarArray.length;
  i += chunkSize
) {
  const chunk = grammarArray.slice(
    i,
    i + chunkSize
  );

  generatedFiles++;

  const partName =
    `n1_part_${String(
      generatedFiles
    ).padStart(2, "0")}`;

  const fileName =
    `n1-part-${String(
      generatedFiles
    ).padStart(2, "0")}.js`;

  fs.writeFileSync(
    path.join(
      OUTPUT_DIR,
      fileName
    ),
    `export default ${JSON.stringify(
      chunk,
      null,
      2
    )};`,
    "utf8"
  );

  importLines.push(
    `import ${partName} from "./${fileName.replace(
      ".js",
      ""
    )}";`
  );

  mergeLines.push(
    `  ...${partName},`
  );
}

const indexContent =
`${importLines.join("\n")}

export const N5_GRAMMAR = [
${mergeLines.join("\n")}
];
`;

fs.writeFileSync(
  path.join(
    OUTPUT_DIR,
    "index.js"
  ),
  indexContent,
  "utf8"
);

console.log(
  `Generated ${generatedFiles} files`
);