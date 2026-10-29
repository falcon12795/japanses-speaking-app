import { romanizeKorean } from "../../utils/romanizeKorean";

const INITIALS = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const VOWELS = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];

export function composeSyllable(initial, vowel) {
  const index = INITIALS.indexOf(initial) * 21 + VOWELS.indexOf(vowel);
  return String.fromCharCode(0xac00 + index * 28);
}

// [character, romanization, letter name, example word, meaning]
const BASIC_CONSONANTS = [
  ["ㄱ", "g / k", "기역", "가방", "Cặp, túi"],
  ["ㄴ", "n", "니은", "나무", "Cái cây"],
  ["ㄷ", "d / t", "디귿", "다리", "Cái chân, cây cầu"],
  ["ㄹ", "r / l", "리을", "라면", "Mì gói"],
  ["ㅁ", "m", "미음", "모자", "Cái mũ"],
  ["ㅂ", "b / p", "비읍", "바나나", "Quả chuối"],
  ["ㅅ", "s", "시옷", "사과", "Quả táo"],
  ["ㅇ", "ng / -", "이응", "아이", "Đứa trẻ"],
  ["ㅈ", "j", "지읒", "자동차", "Ô tô"],
  ["ㅊ", "ch", "치읓", "치마", "Cái váy"],
  ["ㅋ", "k", "키읔", "커피", "Cà phê"],
  ["ㅌ", "t", "티읕", "토마토", "Cà chua"],
  ["ㅍ", "p", "피읖", "포도", "Quả nho"],
  ["ㅎ", "h", "히읗", "하늘", "Bầu trời"],
];

const DOUBLE_CONSONANTS = [
  ["ㄲ", "kk", "쌍기역", "까치", "Chim ác là"],
  ["ㄸ", "tt", "쌍디귿", "땀", "Mồ hôi"],
  ["ㅃ", "pp", "쌍비읍", "빵", "Bánh mì"],
  ["ㅆ", "ss", "쌍시옷", "쓰기", "Việc viết"],
  ["ㅉ", "jj", "쌍지읒", "짜다", "Mặn"],
];

const BASIC_VOWELS = [
  ["ㅏ", "a", "", "아기", "Em bé"],
  ["ㅑ", "ya", "", "야구", "Bóng chày"],
  ["ㅓ", "eo", "", "어머니", "Mẹ"],
  ["ㅕ", "yeo", "", "여자", "Phụ nữ"],
  ["ㅗ", "o", "", "오리", "Con vịt"],
  ["ㅛ", "yo", "", "요리", "Nấu ăn"],
  ["ㅜ", "u", "", "우유", "Sữa"],
  ["ㅠ", "yu", "", "유리", "Thủy tinh"],
  ["ㅡ", "eu", "", "그림", "Bức tranh"],
  ["ㅣ", "i", "", "이름", "Tên"],
];

const COMPOUND_VOWELS = [
  ["ㅐ", "ae", "", "새", "Con chim"],
  ["ㅒ", "yae", "", "얘기", "Câu chuyện"],
  ["ㅔ", "e", "", "게", "Con cua"],
  ["ㅖ", "ye", "", "시계", "Đồng hồ"],
  ["ㅘ", "wa", "", "과일", "Hoa quả"],
  ["ㅙ", "wae", "", "돼지", "Con heo"],
  ["ㅚ", "oe", "", "외국", "Nước ngoài"],
  ["ㅝ", "wo", "", "뭐", "Cái gì"],
  ["ㅞ", "we", "", "웨이터", "Người phục vụ"],
  ["ㅟ", "wi", "", "귀", "Cái tai"],
  ["ㅢ", "ui", "", "의사", "Bác sĩ"],
];

function toItem([character, romaji, name, word, meaning], isConsonant) {
  return {
    id: `hangul-${character}`,
    kana: character,
    romaji,
    name,
    // Consonants are voiced with ㅏ and vowels with a silent ㅇ so text-to-speech reads a real syllable.
    say: isConsonant ? composeSyllable(character, "ㅏ") : composeSyllable("ㅇ", character),
    word,
    wordReading: romanizeKorean(word),
    meaning,
  };
}

export const HANGUL_SECTIONS = [
  { id: "consonant", title: "Basic consonants", subtitle: "자음", items: BASIC_CONSONANTS.map((row) => toItem(row, true)) },
  { id: "double", title: "Double consonants", subtitle: "쌍자음", items: DOUBLE_CONSONANTS.map((row) => toItem(row, true)) },
  { id: "vowel", title: "Basic vowels", subtitle: "모음", items: BASIC_VOWELS.map((row) => toItem(row, false)) },
  { id: "compound", title: "Compound vowels", subtitle: "이중 모음", items: COMPOUND_VOWELS.map((row) => toItem(row, false)) },
];

export const HANGUL_SCOPES = [
  { id: "consonant", label: "Consonants", sections: ["consonant", "double"] },
  { id: "vowel", label: "Vowels", sections: ["vowel", "compound"] },
  { id: "letters", label: "All letters", sections: ["consonant", "double", "vowel", "compound"] },
];

export function getHangulItems(sectionIds) {
  return HANGUL_SECTIONS.filter((section) => sectionIds.includes(section.id)).flatMap((section) => section.items);
}

export const SYLLABLE_CONSONANTS = BASIC_CONSONANTS.map(([character]) => character);
export const SYLLABLE_VOWELS = BASIC_VOWELS.map(([character]) => character);

/** Consonant x vowel table (14 x 10) used for syllable practice. */
export function getSyllableRows() {
  return SYLLABLE_CONSONANTS.map((consonant) =>
    SYLLABLE_VOWELS.map((vowel) => {
      const syllable = composeSyllable(consonant, vowel);

      return { id: `syllable-${syllable}`, kana: syllable, romaji: romanizeKorean(syllable), consonant, vowel };
    })
  );
}
