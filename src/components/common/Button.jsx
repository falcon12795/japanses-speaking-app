export default function Button({
  children,
  variant = "primary",
  active = false,
  className = "",
  type = "button",
  ...props
}) {
  const variantClass =
    {
      primary: "btn-primary",
      secondary: "btn-secondary",
      danger: "btn-danger",
      success: "btn-success",
    }[variant] || "btn-primary";

  return (
    <button
      type={type}
      className={`${variantClass} ${active ? "active" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}