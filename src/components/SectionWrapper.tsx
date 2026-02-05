interface SectionWrapperProps {
  bg?: "dark" | "white" | "warm";
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  bg = "dark",
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  const bgClass =
    bg === "warm"
      ? "bg-neutral-100 text-primary"
      : bg === "white"
        ? "bg-secondary text-primary"
        : "bg-primary text-secondary";

  return (
    <section
      id={id}
      className={`${bgClass} py-16 md:py-20 lg:py-24 px-5 md:px-6 ${className}`}
    >
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}
