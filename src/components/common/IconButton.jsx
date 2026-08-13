export default function IconButton({
  children,
  title,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      title={title}
      className={`btn-icon ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}