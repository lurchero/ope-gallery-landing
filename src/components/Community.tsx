import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

export default function Community() {
  return (
    <SectionWrapper bg="dark">
      <div className="mx-auto max-w-[800px] text-center">
        <SectionLabel text="Community" />

        <h2 className="mt-8 font-display text-xl md:text-2xl font-normal text-secondary">
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

        {/* Accent rule */}
        <div className="mt-8 mx-auto w-12 h-0.5 bg-accent" />
      </div>
    </SectionWrapper>
  );
}
