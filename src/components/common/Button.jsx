import { cn } from "../../utils/cn";

function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  icon: Icon,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300";
  const variants = {
    primary:
      "bg-brand-500 text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-400",
    secondary:
      "border border-white/15 bg-white/5 text-white hover:border-brand-300/60 hover:bg-white/10",
    ghost: "text-slate-200 hover:bg-white/10",
  };

  const content = (
    <>
      {children}
      {Icon ? <Icon size={16} /> : null}
    </>
  );

  if (href) {
    return (
      <a className={cn(base, variants[variant], className)} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(base, variants[variant], className)}
      onClick={onClick}
      type="button"
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
