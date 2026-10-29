import Panel from "./common/Panel";
import { useLanguage } from "../contexts/LanguageContext";
import JapaneseAlphabet from "./alphabet/JapaneseAlphabet";
import EnglishAlphabet from "./alphabet/EnglishAlphabet";

export default function Alphabet({ progress, onProgressChange }) {
  const { language } = useLanguage();

  return (
    <Panel className="alphabet-panel">
      {language === "ja" ? (
        <JapaneseAlphabet progress={progress} onProgressChange={onProgressChange} />
      ) : (
        <EnglishAlphabet progress={progress} onProgressChange={onProgressChange} />
      )}
    </Panel>
  );
}
