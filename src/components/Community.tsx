import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

export default function Community() {
  return (
    <SectionWrapper bg="dark">
      <div className="mx-auto max-w-[800px] text-center">
        <SectionLabel text="Community" />

        <h2 className="mt-6 font-sans text-2xl md:text-4xl font-bold text-secondary">
          Built with and for creatives.
        </h2>

        <div className="mt-6 max-w-[640px] mx-auto">
          <p className="text-base text-neutral-400">
            OPE Gallery is shaped by artists, collaborators, and community.
          </p>
          <p className="mt-2 text-base text-neutral-400">
            Every exhibition, activation, and release is informed by real people,
            real stories, and real creative energy.
          </p>
        </div>

        {/* Community photos */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            className="w-full aspect-[4/3] bg-neutral-800 flex items-center justify-center"
            role="img"
            aria-label="Community photo 1"
          >
            <div className="w-8 h-8 border border-dashed border-neutral-700 rounded-full" />
          </div>
          <div
            className="w-full aspect-[4/3] bg-neutral-800 flex items-center justify-center"
            role="img"
            aria-label="Community photo 2"
          >
            <div className="w-8 h-8 border border-dashed border-neutral-700 rounded-full" />
          </div>
          <div
            className="w-full aspect-[4/3] bg-neutral-800 flex items-center justify-center"
            role="img"
            aria-label="Community photo 3"
          >
            <div className="w-8 h-8 border border-dashed border-neutral-700 rounded-full" />
          </div>
        </div>

        {/* Accent rule */}
        <div className="mt-8 mx-auto w-12 h-0.5 bg-accent" />
      </div>
    </SectionWrapper>
  );
}
