import Panel from "./common/Panel";
import { useLanguage } from "../contexts/LanguageContext";
import JapaneseAlphabet from "./alphabet/JapaneseAlphabet";
import EnglishAlphabet from "./alphabet/EnglishAlphabet";
import KoreanAlphabet from "./alphabet/KoreanAlphabet";

const ALPHABETS = {
  ja: JapaneseAlphabet,
  ko: KoreanAlphabet,
  en: EnglishAlphabet,
};

export default function Alphabet({ progress, onProgressChange }) {
  const { language } = useLanguage();
  const AlphabetComponent = ALPHABETS[language] || EnglishAlphabet;

  return (
    <Panel className="alphabet-panel">
      <AlphabetComponent progress={progress} onProgressChange={onProgressChange} />
    </Panel>
  );
}
