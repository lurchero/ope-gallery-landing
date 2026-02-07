interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="mb-0">
      <div className="flex items-center gap-3">
        <span className="text-xs uppercase tracking-[0.18em] font-semibold text-neutral-400">
          {text}
        </span>
        <span className="h-px flex-1 bg-neutral-700/60" />
      </div>
    </div>
  );
}
