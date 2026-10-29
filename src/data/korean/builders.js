import { capitalizeFirst, romanizeKorean } from "../../utils/romanizeKorean";

const stripPunctuation = (text) => text.replace(/[.,!?~…]/g, "").trim();
const pad = (value, size = 2) => String(value).padStart(size, "0");

/*
 * Compact authoring format -> the item shape used by the shared components.
 * "japanese" holds the Korean text and "reading" the romanization (field names are shared with other languages).
 */

/** subjects: [{ subject, topics: [[topic, [[korean, vietnamese, exampleKorean, exampleVietnamese]]]] }] */
export function buildVocabulary({ level, code, subjects }) {
  return subjects.flatMap(({ subject, topics }, subjectIndex) => {
    let sequence = 0;

    return topics.flatMap(([topic, words]) =>
      words.map(([korean, vietnamese, exampleKorean, exampleVietnamese]) => {
        sequence += 1;

        return {
          id: `ko-${code}-s${pad(subjectIndex + 1)}-${pad(sequence, 3)}`,
          level,
          subject,
          topic,
          japanese: korean,
          reading: romanizeKorean(korean),
          vietnamese,
          example: {
            japanese: exampleKorean,
            reading: capitalizeFirst(romanizeKorean(exampleKorean)),
            english: "",
            vietnamese: exampleVietnamese,
          },
        };
      })
    );
  });
}

/*
 * lessons: [{ lesson, points: [{ title, usage, notes, meaning, meaningUsage, examples: [[ko, vi]], note, quiz: [[question, choices, answerIndex, explanation]] }] }]
 * Returns { grammar, questions }.
 */
export function buildGrammar({ level, code, lessons }) {
  const grammar = [];
  const questions = {};
  let number = 0;

  lessons.forEach(({ lesson, points }) => {
    points.forEach((point) => {
      number += 1;
      const id = `${code}_gram_${pad(number)}`;

      grammar.push({
        id,
        no: number,
        level,
        lesson,
        title: point.title,
        usage: point.usage,
        notes: [{ lines: point.notes }],
        meanings: [
          {
            id: `${id}_meaning_01`,
            title: point.meaningTitle,
            meaning: point.meaning,
            usage: point.meaningUsage || point.usage,
            examples: point.examples.map(([korean, vietnamese]) => ({
              japanese: korean,
              reading: capitalizeFirst(romanizeKorean(korean)),
              english: "",
              vietnamese,
            })),
            note: point.note,
          },
        ],
      });

      questions[id] = {
        grammarId: id,
        title: point.title,
        questions: point.quiz.map(([question, choices, answer, explanation], index) => ({
          id: `${id}-q${pad(index + 1)}`,
          grammarId: id,
          question,
          choices,
          answer,
          explanation,
        })),
      };
    });
  });

  return { grammar, questions };
}

/** lessons: [{ lesson, dialogues: [{ title, description, lines: [[speaker, korean, vietnamese]] }] }] */
export function buildDialogues({ level, code, lessons }) {
  let number = 0;

  return lessons.flatMap(({ lesson, dialogues }) =>
    dialogues.map(({ title, description, lines }) => {
      number += 1;

      return {
        id: `ko-${code}-${pad(number)}`,
        level,
        lesson,
        title,
        description,
        lines: lines.map(([speaker, korean, vietnamese], index) => {
          const reading = capitalizeFirst(romanizeKorean(korean));

          return {
            id: index + 1,
            speaker,
            japanese: korean,
            reading,
            romaji: reading,
            vietnamese,
            acceptedAnswers: [...new Set([korean, stripPunctuation(korean)])],
          };
        }),
      };
    })
  );
}
