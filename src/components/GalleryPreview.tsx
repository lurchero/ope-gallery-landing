import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

const pieces = [
  { title: "Untitled I", medium: "Photography", year: "2025" },
  { title: "Resonance", medium: "Mixed Media", year: "2024" },
  { title: "Golden Hour", medium: "Digital", year: "2025" },
  { title: "Still Life No. 3", medium: "Photography", year: "2024" },
  { title: "Fragments", medium: "Acrylic on Canvas", year: "2025" },
  { title: "Dusk", medium: "Photography", year: "2025" },
];

function GalleryPiece({
  title,
  medium,
  year,
}: {
  title: string;
  medium: string;
  year: string;
}) {
  return (
    <div className="relative group">
      {/* Overhead accent light */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-b from-amber-100/[0.07] via-amber-50/[0.03] to-transparent rounded-full blur-md" />

      {/* Framed piece */}
      <div className="relative border border-neutral-700 bg-neutral-900 p-2 shadow-[0_8px_30px_rgba(255,200,120,0.06)] transition-all group-hover:shadow-[0_8px_40px_rgba(255,200,120,0.1)]">
        {/* Image placeholder */}
        <div
          className="w-full aspect-[3/4] bg-neutral-800 flex items-center justify-center"
          role="img"
          aria-label={`${title} — ${medium}, ${year}`}
        >
          <div className="w-8 h-8 border border-dashed border-neutral-700 rounded-full" />
        </div>
      </div>

      {/* Gallery wall label */}
      <div className="mt-4 px-1">
        <p className="text-sm font-medium text-secondary">{title}</p>
        <p className="text-xs text-neutral-400 mt-0.5">
          {medium} · {year}
        </p>
      </div>

      {/* Under-light reflection */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-gradient-to-t from-amber-100/[0.04] to-transparent rounded-full blur-sm" />
    </div>
  );
}

export default function GalleryPreview() {
  return (
    <SectionWrapper bg="dark" id="gallery" className="bg-neutral-900">
      <SectionLabel text="Gallery" />

      <h2 className="mt-6 font-sans text-2xl md:text-4xl font-bold text-secondary">
        On the Wall
      </h2>

      <p className="mt-4 text-base text-neutral-400 max-w-[600px]">
        A rotating selection of work from the artists and creators in our
        community.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {pieces.map((piece) => (
          <GalleryPiece
            key={piece.title}
            title={piece.title}
            medium={piece.medium}
            year={piece.year}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
