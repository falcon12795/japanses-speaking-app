export function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function pickOne(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function uniqueBy(items, getKey) {
  const seen = new Set();

  return items.filter((item) => {
    const key = getKey(item);

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

/*
 * Builds a question from a pool of { id, kana, romaji, say? } characters.
 * type: "read" (character -> romanization), "write" (romanization -> character), "listen" (sound -> character).
 */
export function createCharacterQuestion(type, pool) {
  const target = pickOne(pool);
  const distractors = shuffle(
    uniqueBy(
      pool.filter((item) => item.romaji !== target.romaji),
      (item) => item.romaji
    )
  ).slice(0, 3);

  const toOption = (item, label) => ({
    id: item.id,
    label,
    isCorrect: item === target,
  });

  const items = shuffle([target, ...distractors]);
  const spoken = target.say || target.kana;
  const explanation = `${target.kana} = ${target.romaji}`;

  if (type === "read") {
    return {
      prompt: target.kana,
      hint: "Choose the correct romanization.",
      speak: spoken,
      explanation,
      options: items.map((item) => toOption(item, item.romaji)),
    };
  }

  if (type === "write") {
    return {
      prompt: target.romaji,
      hint: "Choose the correct character.",
      explanation,
      options: items.map((item) => toOption(item, item.kana)),
    };
  }

  return {
    prompt: "🎧",
    hint: "Listen, then choose the character you hear.",
    speak: spoken,
    autoSpeak: true,
    explanation,
    options: items.map((item) => toOption(item, item.kana)),
  };
}
