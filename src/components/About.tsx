import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper bg="dark" id="about">
      <div className="mx-auto max-w-[720px]">
        <SectionLabel text="About" />

        <h2 className="mt-8 font-display text-2xl md:text-4xl font-normal text-secondary">
          A gallery without walls.
        </h2>

        <div className="mt-8 space-y-6">
          <p className="text-base text-neutral-200">
            OPE Gallery lives online—highlighting artists, visual culture, and
            creative work—while periodically activating in real spaces through
            pop-ups and cultural moments.
          </p>
          <p className="text-base text-neutral-200">
            We curate with intention, collaborate with artists and creators, and
            create platforms for stories, visuals, and ideas that move culture
            forward.
          </p>
          <p className="text-base text-neutral-400">
            This is a space for discovery, expression, and connection—built on
            Only Positive Energy.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
