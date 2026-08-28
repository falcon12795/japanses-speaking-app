import { ChevronDown, ChevronUp } from "lucide-react";

export default function CollapseGroup({
  title,
  count,
  isOpen,
  onToggle,
  children,
  headerActions,
  className = "",
  headerClassName = "",
}) {
  return (
    <div className={`collapse-group lesson-group ${className}`.trim()}>
      <div className="collapse-header-row">
        <button
          type="button"
          className={`collapse-header lesson-header ${headerClassName}`.trim()}
          onClick={onToggle}
        >
          <span className="collapse-title lesson-title">
            {title}
          </span>

          {count && (
            <span className="collapse-count lesson-count">
              {count}
            </span>
          )}

          {isOpen ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>

        {headerActions && (
          <div className="collapse-header-actions">
            {headerActions}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="collapse-content lesson-dialogues">
          {children}
        </div>
      )}
    </div>
  );
}