"use client";

type Props = {
  className?: string;
};

/** Primary hero: Firefly-style burger clip (transparent / keyed matte on #F4F1EA). */
export function HeroBurgerVideo({ className }: Props) {
  return (
    <video
      className={className}
      autoPlay
      muted
      playsInline
      loop
      preload="metadata"
    >
      <source src="/hero/result.mp4" type="video/mp4" />
      <source src="/hero/burger-generated.mp4" type="video/mp4" />
    </video>
  );
}
