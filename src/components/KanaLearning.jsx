import { useState } from "react";
import { HIRAGANA, KATAKANA } from "../data/kana";

function buildKanaOptions(kanaList, currentKana, currentIndex) {
  const wrongOptions = kanaList
    .filter((item) => item.romaji !== currentKana.romaji)
    .map((item) => item.romaji);

  const selectedWrongOptions = [];

  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % wrongOptions.length;
    selectedWrongOptions.push(wrongOptions[index]);
  }

  const allOptions = [...selectedWrongOptions, currentKana.romaji];

  const rotateBy = currentIndex % allOptions.length;

  return [
    ...allOptions.slice(rotateBy),
    ...allOptions.slice(0, rotateBy),
  ];
}

export default function KanaLearning({ progress, onProgressChange }) {
  const [mode, setMode] = useState("hiragana");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const kanaList = mode === "hiragana" ? HIRAGANA : KATAKANA;
  const currentKana = kanaList[currentIndex];

  const options = buildKanaOptions(kanaList, currentKana, currentIndex);

  const checkAnswer = (selectedAnswer) => {
    setAnswer(selectedAnswer);

    if (selectedAnswer === currentKana.romaji) {
      setResult("Correct!");

      onProgressChange({
        ...progress,
        kanaCorrect: progress.kanaCorrect + 1,
      });
    } else {
      setResult(`Wrong. Correct answer is ${currentKana.romaji}`);

      onProgressChange({
        ...progress,
        kanaWrong: progress.kanaWrong + 1,
      });
    }
  };

  const nextKana = () => {
    setAnswer("");
    setResult("");
    setCurrentIndex((prev) => (prev + 1) % kanaList.length);
  };

  const changeMode = (nextMode) => {
    setMode(nextMode);
    setCurrentIndex(0);
    setAnswer("");
    setResult("");
  };

  return (
    <section className="panel">
      <h2>Kana Learning</h2>

      <div className="buttons">
        <button
          className={mode === "hiragana" ? "active" : ""}
          onClick={() => changeMode("hiragana")}
        >
          Hiragana
        </button>

        <button
          className={mode === "katakana" ? "active" : ""}
          onClick={() => changeMode("katakana")}
        >
          Katakana
        </button>
      </div>

      <h3 className="kana">{currentKana.kana}</h3>

      <p className="label">Choose the correct romaji:</p>

      <div className="buttons">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => checkAnswer(option)}
            disabled={answer !== ""}
          >
            {option}
          </button>
        ))}
      </div>

      <p className="result">{result}</p>

      <button onClick={nextKana}>Next Kana</button>
    </section>
  );
}