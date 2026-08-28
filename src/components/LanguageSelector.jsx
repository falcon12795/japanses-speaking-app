const LANGUAGES = [
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    available: true,
    description: "JLPT N5–N1 vocabulary, grammar & dialogues",
  },
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
    available: true,
    description: "A1–B1 vocabulary, grammar & dialogues",
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "🇰🇷",
    available: false,
    description: "Coming soon",
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "🇨🇳",
    available: false,
    description: "Coming soon",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    available: false,
    description: "Coming soon",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    available: false,
    description: "Coming soon",
  },
];

export { LANGUAGES };

export default function LanguageSelector({ currentCode, onSelect, onClose }) {
  const isModal = Boolean(onClose);

  return (
    <div className={isModal ? "lang-overlay" : "lang-fullscreen"}>
      <div className="lang-modal">
        <div className="lang-modal-header">
          <div>
            <h2 className="lang-modal-title">Choose a Language</h2>
            <p className="lang-modal-subtitle">Select the language you want to learn</p>
          </div>
          {isModal && (
            <button
              className="lang-close-btn"
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>
          )}
        </div>

        <div className="lang-grid">
          {LANGUAGES.map((lang) => {
            const isSelected = lang.code === currentCode;
            return (
              <button
                key={lang.code}
                className={[
                  "lang-card",
                  isSelected ? "lang-card-selected" : "",
                  !lang.available ? "lang-card-disabled" : "",
                ].join(" ")}
                onClick={() => lang.available && onSelect(lang.code)}
                disabled={!lang.available}
                aria-pressed={isSelected}
              >
                <span className="lang-flag">{lang.flag}</span>
                <span className="lang-name">{lang.name}</span>
                <span className="lang-native">{lang.nativeName}</span>
                <span className="lang-desc">{lang.description}</span>
                {!lang.available && (
                  <span className="lang-badge-soon">Coming Soon</span>
                )}
                {isSelected && (
                  <span className="lang-badge-active">Selected</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
