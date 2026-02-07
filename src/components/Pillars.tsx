import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";
import PillarCard from "./PillarCard";

const pillars = [
  {
    number: "01",
    title: "Curated Art & Visual Culture",
    description:
      "Digital exhibitions, photography, and featured artists presented with editorial care.",
  },
  {
    number: "02",
    title: "Pop-Ups & Activations",
    description:
      "Temporary physical experiences that bring the gallery to life beyond the screen.",
  },
  {
    number: "03",
    title: "Culture Through Product",
    description:
      "Limited releases that carry the energy, values, and aesthetic of OPE into the real world.",
  },
];

export default function Pillars() {
  return (
    <SectionWrapper bg="dark">
      <SectionLabel text="What Happens Here" />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <PillarCard
            key={pillar.number}
            number={pillar.number}
            title={pillar.title}
            description={pillar.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
