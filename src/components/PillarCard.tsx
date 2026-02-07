interface PillarCardProps {
  number: string;
  title: string;
  description: string;
}

export default function PillarCard({ number, title, description }: PillarCardProps) {
  return (
    <div className="group border border-neutral-800 bg-neutral-900 p-10 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500">{number}</span>
          <span className="text-sm text-neutral-600 group-hover:text-accent transition-colors">
            →
          </span>
        </div>

        <h3 className="text-2xl font-semibold text-secondary leading-tight">
          {title}
        </h3>

        <p className="text-base text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
