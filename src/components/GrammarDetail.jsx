import { speakJapaneseText } from "../utils/speech";

export default function GrammarDetail({ grammar, onBack }) {
  if (!grammar) {
    return (
      <section className="panel">
        <h2>Grammar not found</h2>

        <div className="buttons">
          <button onClick={onBack}>← Back to Grammar List</button>
        </div>
      </section>
    );
  }

  const listenExample = (text) => {
    try {
      speakJapaneseText(text);
    } catch {
      // Browser speech may not be supported.
    }
  };

  return (
    <section className="panel">
      <div className="grammar-detail-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>

        <div>
          <h2>{grammar.title}</h2>

          <p className="subtitle">{grammar.meaning}</p>
        </div>
      </div>

      {grammar.structure && (
        <div className="grammar-detail-box">
          <h3>Structure</h3>
          <p className="grammar-detail-structure">{grammar.structure}</p>
        </div>
      )}

      {grammar.explanation && (
        <div className="grammar-detail-box">
          <h3>Explanation</h3>
          <p>{grammar.explanation}</p>
        </div>
      )}

      <div className="grammar-detail-box">
        <h3>Examples</h3>

        <div className="grammar-example-list">
          {(grammar.examples || []).map((example, index) => (
            <div key={index} className="grammar-example-card">
              <div className="grammar-example-header">
                <span>Example {index + 1}</span>

                <button
                  className="grammar-listen-button"
                  onClick={() => listenExample(example.japanese)}
                >
                  🔊 Listen
                </button>
              </div>

              <p className="grammar-example-japanese">
                {example.japanese}
              </p>

              {example.reading && (
                <p className="grammar-example-reading">
                  {example.reading}
                </p>
              )}

              {example.english && (
                <p className="grammar-example-meaning">
                  {example.english}
                </p>
              )}

              {example.vietnamese && (
                <p className="grammar-example-meaning">
                  {example.vietnamese}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}