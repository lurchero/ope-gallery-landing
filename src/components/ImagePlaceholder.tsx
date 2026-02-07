interface ImagePlaceholderProps {
  aspectRatio?: "square" | "3/2" | "4/3";
  alt: string;
}

export default function ImagePlaceholder({
  aspectRatio = "square",
  alt,
}: ImagePlaceholderProps) {
  const ratioClass =
    aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "3/2"
        ? "aspect-[3/2]"
        : "aspect-[4/3]";

  return (
    <div
      className={`w-full ${ratioClass} bg-neutral-800 flex items-center justify-center`}
      role="img"
      aria-label={alt}
    >
      <div className="w-8 h-8 border border-dashed border-neutral-700 rounded-full" />
    </div>
  );
}
