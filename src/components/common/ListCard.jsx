export default function ListCard({
  children,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`list-card ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}