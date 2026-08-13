export default function ProgressBar({
  value = 0,
  className = "",
  fillClassName = "",
}) {
  const safeValue = Math.max(0, Math.min(100, Number(value) || 0));

  return (
    <div className={`progress-bar ${className}`.trim()}>
      <div
        className={`progress-fill ${fillClassName}`.trim()}
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}