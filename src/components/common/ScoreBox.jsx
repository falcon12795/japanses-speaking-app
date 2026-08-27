export default function ScoreBox({ score = 0, label = "Score" }) {
  return (
    <div style={
      {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
      }
    }>
      <p className="label">{label}:</p>

      <div className="small-score-box">
        <span>{score}</span>/100
      </div>
    </div>
  );
}