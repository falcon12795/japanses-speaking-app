export default function SectionBlock({
  children,
  title,
  number,
  className = "",
  headingClassName = "",
}) {
  return (
    <div className={`grammar-section-block ${className}`.trim()}>
      {(title || number) && (
        <div className={`grammar-section-heading ${headingClassName}`.trim()}>
          {number && (
            <span className="grammar-section-number">
              {number}
            </span>
          )}

          {title && <h3>{title}</h3>}
        </div>
      )}

      {children}
    </div>
  );
}