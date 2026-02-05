interface ButtonProps {
  text: string;
  variant: "filled" | "ghost";
  href?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

export default function Button({
  text,
  variant,
  href,
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const shared =
    "text-xs uppercase tracking-[0.18em] font-semibold px-8 py-3.5 inline-flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent";
  const filled =
    "bg-accent text-secondary hover:bg-[#e7342b] hover:-translate-y-[1px] active:translate-y-0";
  const ghost =
    "border border-neutral-700 text-secondary hover:border-accent hover:text-secondary hover:-translate-y-[1px] active:translate-y-0";
  const width = fullWidth ? "w-full" : "";

  const className = `${shared} ${variant === "filled" ? filled : ghost} ${width}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {text}
        <span aria-hidden className="opacity-70">
          →
        </span>
      </a>
    );
  }

  return (
    <button type={type} className={className}>
      {text}
      <span aria-hidden className="opacity-70">
        →
      </span>
    </button>
  );
}
