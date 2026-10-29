import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dictionary } from "cmu-pronouncing-dictionary";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..", "..", "..");
const vocabDir = path.join(root, "src", "data", "english", "vocabulary");
const outDir = path.join(vocabDir, "b1");

const EXISTING = new Set();
const scanned = ["a1", "a2"].flatMap((d) => fs.readdirSync(path.join(vocabDir, d)).map((f) => path.join(vocabDir, d, f)));
for (const file of [...scanned, path.join(vocabDir, "b1.js")]) {
  for (const m of fs.readFileSync(file, "utf8").matchAll(/^    japanese: "([^"]+)"/gm)) EXISTING.add(m[1].toLowerCase());
}

const MAP = {
  AA: "ɑː", AE: "æ", AH: "ʌ", AO: "ɔː", AW: "aʊ", AY: "aɪ", B: "b", CH: "tʃ", D: "d", DH: "ð",
  EH: "e", ER: "ɜːr", EY: "eɪ", F: "f", G: "ɡ", HH: "h", IH: "ɪ", IY: "iː", JH: "dʒ", K: "k",
  L: "l", M: "m", N: "n", NG: "ŋ", OW: "oʊ", OY: "ɔɪ", P: "p", R: "r", S: "s", SH: "ʃ",
  T: "t", TH: "θ", UH: "ʊ", UW: "uː", V: "v", W: "w", Y: "j", Z: "z", ZH: "ʒ",
};
const STOPS_FRIC = new Set(["P", "B", "T", "D", "K", "G", "F", "V", "TH", "HH"]);
const LIQ = new Set(["L", "R", "W", "Y"]);
const LAX = new Set(["AE", "EH", "IH", "AH", "UH", "AA", "AO"]);
const VOICELESS = new Set(["P", "T", "K", "F", "TH", "S", "SH", "CH", "HH"]);
const SIBILANT = new Set(["S", "Z", "SH", "ZH", "CH", "JH"]);

const missing = new Set();

function phoneToIpa(p) {
  const m = /^([A-Z]+)([012])?$/.exec(p);
  const base = m[1];
  const stress = m[2];
  if (base === "AH") return stress === "0" ? "ə" : "ʌ";
  if (base === "ER") return stress === "0" ? "ər" : "ɜːr";
  if (base === "IY") return stress === "0" ? "i" : "iː";
  return MAP[base];
}

const OVERRIDE = {
  colour: "color", colours: "colors", favourite: "favorite", neighbour: "neighbor", neighbours: "neighbors",
  centre: "center", programme: "program", grey: "gray", theatre: "theater", metre: "meter", litre: "liter",
  jewellery: "jewelry", pyjamas: "pajamas", trainers: "sneakers", mum: "mom", maths: "math", wifi: "wi fi",
  email: "e mail", smartphone: "smart phone", laptop: "lap top", website: "web site", online: "on line",
  gym: "jim", sushi: "sue she", pizza: "peet suh", tv: "tee vee", dvd: "dee vee dee", ok: "okay",
};

const SUFFIXES = [
  ["ness", ["N", "AH0", "S"]], ["ly", ["L", "IY0"]], ["ing", ["IH0", "NG"]], ["er", ["ER0"]],
];

function joinCompound(parts) {
  return parts.flatMap((p, i) => (i === 0 ? p : p.map((ph) => (ph.endsWith("1") ? ph.slice(0, -1) + "2" : ph))));
}

function phonesOf(word, depth = 0) {
  if (depth > 3) return null;
  if (dictionary[word]) return dictionary[word].split(" ");
  if (OVERRIDE[word]) {
    const parts = OVERRIDE[word].split(" ").map((w) => phonesOf(w, depth + 1));
    return parts.every(Boolean) ? joinCompound(parts) : null;
  }
  const alt = word.replace(/(.)our(s)?$/, "$1or$2").replace(/(.)tre(s)?$/, "$1ter$2");
  if (alt !== word) {
    const p = phonesOf(alt, depth + 1);
    if (p) return p;
  }
  const m = /^(.{3,})(es|s)$/.exec(word) || /^(.+)'s$/.exec(word);
  if (m) {
    for (const stem of [m[1], m[1] + "e", m[1].replace(/i$/, "y")]) {
      const base = dictionary[stem] ? dictionary[stem].split(" ") : phonesOf(stem, depth + 1);
      if (!base) continue;
      const last = base[base.length - 1].replace(/\d/, "");
      return [...base, ...(SIBILANT.has(last) ? ["IH0", "Z"] : VOICELESS.has(last) ? ["S"] : ["Z"])];
    }
  }
  for (const [suf, phones] of SUFFIXES) {
    if (!word.endsWith(suf) || word.length <= suf.length + 2) continue;
    const stemWord = word.slice(0, -suf.length);
    for (const stem of [stemWord, stemWord + "e", stemWord.replace(/(.)\1$/, "$1")]) {
      if (dictionary[stem]) return [...dictionary[stem].split(" "), ...phones];
    }
  }
  for (let i = 3; i <= word.length - 3; i += 1) {
    const a = word.slice(0, i);
    const b = word.slice(i);
    if (dictionary[a] && dictionary[b]) return joinCompound([dictionary[a].split(" "), dictionary[b].split(" ")]);
  }
  return null;
}

function phonesToIpa(phones) {
  const vowelIdx = phones.map((p, i) => (/[012]$/.test(p) ? i : -1)).filter((i) => i >= 0);
  if (vowelIdx.length <= 1) return phones.map(phoneToIpa).join("");

  const starts = new Map(); // phone index -> boundary char
  vowelIdx.forEach((vi, n) => {
    const stress = phones[vi].slice(-1);
    let start;
    if (n === 0) start = 0;
    else {
      const prev = vowelIdx[n - 1];
      const prevBase = phones[prev].replace(/\d/, "");
      const prevStressed = /[12]$/.test(phones[prev]);
      const cluster = [];
      for (let k = vi - 1; k > prev; k -= 1) cluster.unshift(k);
      if (cluster.length === 0) start = vi;
      else if (cluster.length === 1) start = prevStressed && LAX.has(prevBase) ? vi : cluster[0];
      else {
        const a = phones[cluster[cluster.length - 2]];
        const b = phones[cluster[cluster.length - 1]];
        start = STOPS_FRIC.has(a) && LIQ.has(b) ? cluster[cluster.length - 2] : cluster[cluster.length - 1];
      }
    }
    const mark = stress === "1" ? "ˈ" : stress === "2" ? "ˌ" : n === 0 ? "" : ".";
    starts.set(start, mark);
  });
  return phones.map((p, i) => (starts.get(i) ?? "") + phoneToIpa(p)).join("");
}

function wordIpa(token) {
  const parts = token.split("-");
  const all = parts.map((w) => phonesOf(w));
  if (all.some((p) => !p)) {
    missing.add(token);
    return token;
  }
  return phonesToIpa(joinCompound(all));
}

function sentenceIpa(text) {
  const spoken = text.replace(/\d+/g, (d) => ` ${d.split("").map((c) => ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][+c]).join(" ")} `);
  const words = spoken.toLowerCase().match(/[a-z]+(?:['-][a-z]+)*/g) || [];
  return `/${words.map(wordIpa).join(" ")}/`;
}

const q = JSON.stringify;
const errors = [];
const seen = new Map();
const files = fs.readdirSync(path.join(here, "data")).filter((f) => /^s\d\d\.mjs$/.test(f)).sort();
fs.mkdirSync(outDir, { recursive: true });
let total = 0;

for (const f of files) {
  const num = f.slice(1, 3);
  const { subject, topics } = (await import(pathToFileURL(path.join(here, "data", f)).href)).default;
  let seq = 0;
  const out = [];
  for (const [topic, words] of topics) {
    for (const [word, vi, exEn, exVi] of words) {
      seq += 1;
      if (!word || !vi || !exEn || !exVi) errors.push(`${f} #${seq}: missing field`);
      if (EXISTING.has(word.toLowerCase())) errors.push(`${f}: "${word}" already in A1/A2/old b1.js`);
      const key = word.toLowerCase();
      if (seen.has(key)) errors.push(`${f}: "${word}" duplicates ${seen.get(key)}`);
      else seen.set(key, f);
      if (!new RegExp(`\\b${word.split(/[ -]/)[0].slice(0, 3)}`, "i").test(exEn)) errors.push(`${f}: example for "${word}" may not use the word`);
      out.push(
        `  {\n    id: ${q(`en-b1-s${num}-${String(seq).padStart(3, "0")}`)},\n    level: "B1",\n    subject: ${q(subject)},\n    topic: ${q(topic)},\n    japanese: ${q(word)},\n    reading: ${q(sentenceIpa(word))},\n    vietnamese: ${q(vi)},\n    example: {\n      japanese: ${q(exEn)},\n      reading: ${q(sentenceIpa(exEn))},\n      english: ${q(exEn)},\n      vietnamese: ${q(exVi)},\n    },\n  },`,
      );
    }
  }
  total += seq;
  fs.writeFileSync(path.join(outDir, `subject${Number(num)}.js`), `export default [\n${out.join("\n")}\n];\n`);
  console.log(`${f}: ${subject} -> ${seq}`);
}

const nums = files.map((f) => Number(f.slice(1, 3)));
fs.writeFileSync(
  path.join(outDir, "index.js"),
  `${nums.map((n) => `import subject${n} from "./subject${n}";`).join("\n")}\n\nexport default [\n${nums.map((n) => `  ...subject${n},`).join("\n")}\n];\n`,
);

if (missing.size) fs.writeFileSync(path.join(here, "missing.txt"), [...missing].sort().join("\n"));
if (errors.length) fs.writeFileSync(path.join(here, "errors.txt"), errors.join("\n"));
console.log(`total words: ${total}, missing=${missing.size}, errors=${errors.length}`);
