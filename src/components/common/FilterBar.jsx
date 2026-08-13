export default function FilterBar({
  items,
  selectedValue,
  onChange,
  className = "",
  buttonClassName = "level-filter-button",
  getLabel = (item) => item.label || item,
  getValue = (item) => item.value || item,
}) {
  return (
    <div className={className}>
      {items.map((item) => {
        const value = getValue(item);
        const label = getLabel(item);

        return (
          <button
            key={value}
            type="button"
            className={
              selectedValue === value
                ? `${buttonClassName} active`
                : buttonClassName
            }
            onClick={() => onChange(value)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}