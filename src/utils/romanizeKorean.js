// Revised Romanization of Korean that follows pronunciation (liaison, nasalization, etc.).

const INITIALS = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

const INITIAL_ROMAN = {
  "ㄱ": "g", "ㄲ": "kk", "ㄴ": "n", "ㄷ": "d", "ㄸ": "tt", "ㄹ": "r", "ㅁ": "m", "ㅂ": "b", "ㅃ": "pp",
  "ㅅ": "s", "ㅆ": "ss", "ㅇ": "", "ㅈ": "j", "ㅉ": "jj", "ㅊ": "ch", "ㅋ": "k", "ㅌ": "t", "ㅍ": "p", "ㅎ": "h",
};

const VOWELS = [
  "a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "wo", "we", "wi", "yu", "eu", "ui", "i",
];

const TAILS = [
  [], ["ㄱ"], ["ㄲ"], ["ㄱ", "ㅅ"], ["ㄴ"], ["ㄴ", "ㅈ"], ["ㄴ", "ㅎ"], ["ㄷ"], ["ㄹ"], ["ㄹ", "ㄱ"], ["ㄹ", "ㅁ"],
  ["ㄹ", "ㅂ"], ["ㄹ", "ㅅ"], ["ㄹ", "ㅌ"], ["ㄹ", "ㅍ"], ["ㄹ", "ㅎ"], ["ㅁ"], ["ㅂ"], ["ㅂ", "ㅅ"], ["ㅅ"], ["ㅆ"],
  ["ㅇ"], ["ㅈ"], ["ㅊ"], ["ㅋ"], ["ㅌ"], ["ㅍ"], ["ㅎ"],
];

const TAIL_REPRESENTATIVE = {
  "ㄱ": "ㄱ", "ㄲ": "ㄱ", "ㅋ": "ㄱ", "ㄴ": "ㄴ", "ㄷ": "ㄷ", "ㅅ": "ㄷ", "ㅆ": "ㄷ", "ㅈ": "ㄷ", "ㅊ": "ㄷ",
  "ㅌ": "ㄷ", "ㅎ": "ㄷ", "ㄹ": "ㄹ", "ㅁ": "ㅁ", "ㅂ": "ㅂ", "ㅍ": "ㅂ", "ㅇ": "ㅇ",
};

const CLUSTER_REPRESENTATIVE = {
  "ㄱㅅ": "ㄱ", "ㄴㅈ": "ㄴ", "ㄴㅎ": "ㄴ", "ㄹㄱ": "ㄱ", "ㄹㅁ": "ㅁ", "ㄹㅂ": "ㄹ", "ㄹㅅ": "ㄹ",
  "ㄹㅌ": "ㄹ", "ㄹㅍ": "ㅂ", "ㄹㅎ": "ㄹ", "ㅂㅅ": "ㅂ",
};

const TAIL_ROMAN = { "ㄱ": "k", "ㄴ": "n", "ㄷ": "t", "ㄹ": "l", "ㅁ": "m", "ㅂ": "p", "ㅇ": "ng" };

const ASPIRATED = { "ㄱ": "ㅋ", "ㄷ": "ㅌ", "ㅂ": "ㅍ", "ㅈ": "ㅊ" };
const NASAL = { "ㄱ": "ㅇ", "ㄷ": "ㄴ", "ㅂ": "ㅁ" };
const HANGUL_PATTERN = /[가-힣]/;

function decompose(char) {
  const index = char.charCodeAt(0) - 0xac00;
  const initialIndex = Math.floor(index / 588);
  const vowelIndex = Math.floor((index % 588) / 28);

  return {
    initial: INITIALS[initialIndex],
    vowel: VOWELS[vowelIndex],
    tail: [...TAILS[index % 28]],
  };
}

function representative(tail) {
  if (tail.length === 0) return "";
  if (tail.length === 1) return TAIL_REPRESENTATIVE[tail[0]];

  return CLUSTER_REPRESENTATIVE[tail.join("")];
}

function applyLiaison(current, next) {
  const last = current.tail[current.tail.length - 1];

  if (last === "ㅇ") return;

  if (last === "ㅎ") {
    current.tail.pop();
    return;
  }

  let moved = current.tail.pop();

  // 같이 -> gachi, 굳이 -> guji
  if (next.vowel === "i" && moved === "ㄷ") moved = "ㅈ";
  if (next.vowel === "i" && moved === "ㅌ") moved = "ㅊ";

  next.initial = moved;
}

function applyConsonantRules(current, next) {
  const last = current.tail[current.tail.length - 1];

  if (last === "ㅎ" || (current.tail.length === 2 && current.tail[1] === "ㅎ")) {
    if (ASPIRATED[next.initial] && next.initial !== "ㅂ") {
      next.initial = ASPIRATED[next.initial];
      current.tail.pop();
    } else if (next.initial === "ㅅ") {
      next.initial = "ㅆ";
      current.tail.pop();
    }
  }

  let rep = representative(current.tail);

  if (rep === "ㄱ" && current.tail.join("") === "ㄹㄱ" && next.initial === "ㄱ") rep = "ㄹ";

  if (next.initial === "ㅎ" && ASPIRATED[rep] && current.tail.length > 0) {
    next.initial = ASPIRATED[rep];
    current.tail = [];
    return;
  }

  if (NASAL[rep] && (next.initial === "ㄴ" || next.initial === "ㅁ")) {
    rep = NASAL[rep];
  } else if (NASAL[rep] && next.initial === "ㄹ") {
    rep = NASAL[rep];
    next.initial = "ㄴ";
  } else if ((rep === "ㅁ" || rep === "ㅇ") && next.initial === "ㄹ") {
    next.initial = "ㄴ";
  } else if (rep === "ㄴ" && next.initial === "ㄹ") {
    rep = "ㄹ";
  } else if (rep === "ㄹ" && next.initial === "ㄴ") {
    next.initial = "ㄹ";
  }

  current.tail = rep ? [rep] : [];
}

function romanizeWord(word) {
  const syllables = Array.from(word).map(decompose);

  for (let i = 0; i < syllables.length; i += 1) {
    const current = syllables[i];
    const next = syllables[i + 1];

    if (current.tail.length === 0) continue;

    if (!next) {
      current.tail = representative(current.tail) ? [representative(current.tail)] : [];
    } else if (next.initial === "ㅇ") {
      applyLiaison(current, next);
      if (current.tail.length > 0 && current.tail[0] !== "ㅇ") {
        current.tail = [representative(current.tail)];
      }
    } else {
      applyConsonantRules(current, next);
    }
  }

  return syllables
    .map((syllable, index) => {
      const previousTail = index > 0 ? syllables[index - 1].tail[0] : "";
      let initial = INITIAL_ROMAN[syllable.initial];

      if (syllable.initial === "ㄹ" && previousTail === "ㄹ") initial = "l";

      const tail = syllable.tail.length ? TAIL_ROMAN[syllable.tail[0]] || "" : "";

      return `${initial}${syllable.vowel}${tail}`;
    })
    .join("");
}

/** Romanize Korean text; non-Hangul characters are kept and break word-level sound changes. */
export function romanizeKorean(text) {
  if (!text) return "";

  const parts = String(text).split(/([가-힣]+)/);
  const result = parts.map((part) => (HANGUL_PATTERN.test(part) ? romanizeWord(part) : part)).join("");

  return result;
}

export function capitalizeFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
