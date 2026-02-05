import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-primary pt-28 md:pt-32 pb-16 md:pb-20 px-5 md:px-6">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-neutral-400">
            ONLINE GALLERY • POP-UPS • DROPS
          </span>
          <span className="h-px flex-1 bg-neutral-700/60" />
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-neutral-400">
            001
          </span>
        </div>

        <h1 className="mt-8 font-display font-black leading-[0.92] tracking-[-0.02em] text-[clamp(52px,8vw,120px)]">
          OPE Gallery
        </h1>

        <div className="mt-8 max-w-[760px] space-y-3">
          <p className="text-lg md:text-xl text-neutral-200">
            An online gallery and cultural platform curating art, creativity, and community.
          </p>
          <p className="text-lg md:text-xl text-neutral-400">
            Exhibitions, pop-ups, and drops—rooted in Only Positive Energy.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button text="Explore the Gallery" variant="filled" href="#gallery" />
          <Button text="Get Updates" variant="ghost" href="#updates" />
        </div>

        <div className="mt-14 h-px w-full bg-neutral-800" />
      </div>
    </section>
  );
}
