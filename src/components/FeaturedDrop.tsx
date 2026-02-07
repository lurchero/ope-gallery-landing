import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";
import ImagePlaceholder from "./ImagePlaceholder";
import Button from "./Button";

const chips = ["Black", "White", "Red", "Sand"];

export default function FeaturedDrop() {
  return (
    <SectionWrapper bg="warm" id="drops">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative border border-neutral-200 bg-secondary p-6">
          <div className="absolute -top-3 left-6 bg-accent text-secondary text-[11px] uppercase tracking-[0.22em] font-semibold px-3 py-1">
            Limited
          </div>

          <ImagePlaceholder
            aspectRatio="square"
            alt="Only Positive Energy × Chilly O — Signature Collection product image"
          />

          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="border border-neutral-200 text-neutral-700 text-[11px] uppercase tracking-[0.18em] px-3 py-1"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div>
          <SectionLabel text="Featured Drop" />

          <h2 className="mt-4 text-3xl md:text-4xl font-sans font-bold text-primary leading-tight">
            Only Positive Energy × Chilly O — Signature Collection
          </h2>

          <p className="mt-4 text-base md:text-lg text-neutral-400">
            A timeless collaboration built on shared language and legacy.
          </p>

          <div className="mt-7 space-y-5">
            <p className="text-base text-primary">
              The Only Positive Energy × Chilly O collection features our core
              message set in the iconic Chilly O typeface—bold, familiar, and
              rooted in culture.
            </p>
            <p className="text-base text-primary">
              Produced on premium 100% heavyweight cotton tees and hoodies, each
              piece is designed for comfort, durability, and everyday
              wear—without compromising intention or quality.
            </p>
          </div>

          <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-neutral-400 list-disc list-inside">
            <li>Premium heavyweight 100% cotton</li>
            <li>Tees and hoodies available</li>
            <li>Iconic Chilly O typography</li>
            <li>Multiple colorways</li>
            <li>Limited release</li>
          </ul>

          <div className="mt-10">
            <Button text="View the Drop" variant="filled" href="/drops" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
