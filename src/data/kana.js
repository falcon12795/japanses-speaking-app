// Each cell is [hiragana, romaji] or null for an empty slot in the chart.
// Katakana is derived from hiragana (same code point offset by 0x60).
const BASIC_ROWS = [
  [["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"]],
  [["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"]],
  [["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"]],
  [["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"]],
  [["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"]],
  [["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"]],
  [["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"]],
  [["や", "ya"], null, ["ゆ", "yu"], null, ["よ", "yo"]],
  [["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"]],
  [["わ", "wa"], null, null, null, ["を", "wo"]],
  [["ん", "n"], null, null, null, null],
];

const DAKUTEN_ROWS = [
  [["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"]],
  [["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"]],
  [["だ", "da"], ["ぢ", "ji"], ["づ", "zu"], ["で", "de"], ["ど", "do"]],
  [["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"]],
  [["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"]],
];

const COMBINATION_ROWS = [
  [["きゃ", "kya"], ["きゅ", "kyu"], ["きょ", "kyo"]],
  [["しゃ", "sha"], ["しゅ", "shu"], ["しょ", "sho"]],
  [["ちゃ", "cha"], ["ちゅ", "chu"], ["ちょ", "cho"]],
  [["にゃ", "nya"], ["にゅ", "nyu"], ["にょ", "nyo"]],
  [["ひゃ", "hya"], ["ひゅ", "hyu"], ["ひょ", "hyo"]],
  [["みゃ", "mya"], ["みゅ", "myu"], ["みょ", "myo"]],
  [["りゃ", "rya"], ["りゅ", "ryu"], ["りょ", "ryo"]],
  [["ぎゃ", "gya"], ["ぎゅ", "gyu"], ["ぎょ", "gyo"]],
  [["じゃ", "ja"], ["じゅ", "ju"], ["じょ", "jo"]],
  [["びゃ", "bya"], ["びゅ", "byu"], ["びょ", "byo"]],
  [["ぴゃ", "pya"], ["ぴゅ", "pyu"], ["ぴょ", "pyo"]],
];

export const KANA_SECTIONS = [
  { id: "basic", title: "Basic", subtitle: "Gojūon", columns: 5, rows: BASIC_ROWS },
  { id: "dakuten", title: "Voiced", subtitle: "Dakuten & Handakuten", columns: 5, rows: DAKUTEN_ROWS },
  { id: "combination", title: "Combinations", subtitle: "Yōon", columns: 3, rows: COMBINATION_ROWS },
];

export const KANA_SCRIPTS = [
  { id: "hiragana", label: "Hiragana" },
  { id: "katakana", label: "Katakana" },
];

export function toKatakana(text) {
  return text.replace(/[\u3041-\u3096]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) + 0x60)
  );
}

function convert(kana, script) {
  return script === "katakana" ? toKatakana(kana) : kana;
}

/** Chart sections for a script, with null slots preserved. */
export function getKanaSections(script) {
  return KANA_SECTIONS.map((section) => ({
    ...section,
    rows: section.rows.map((row) =>
      row.map((cell) =>
        cell
          ? { id: `${script}-${cell[0]}`, kana: convert(cell[0], script), romaji: cell[1], section: section.id }
          : null
      )
    ),
  }));
}

/** Flat list of characters for the given script and section ids. */
export function getKanaList(script, sectionIds) {
  return getKanaSections(script)
    .filter((section) => sectionIds.includes(section.id))
    .flatMap((section) => section.rows.flat().filter(Boolean));
}
