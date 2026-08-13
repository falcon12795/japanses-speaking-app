export default function Badge({
  children,
  variant = "primary",
  className = "",
}) {
  const variantClass =
    {
      primary: "badge-primary",
      success: "badge-success",
      neutral: "badge-neutral",
      warning: "badge-warning",
    }[variant] || "badge-primary";

  return (
    <span className={`badge ${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}