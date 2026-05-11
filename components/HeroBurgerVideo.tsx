"use client";

type Props = {
  className?: string;
  /** Royal Beverage–style print depth on newsprint; disable if alpha edges go muddy. */
  blendMultiply?: boolean;
};

/** Hero burger: Firefly clip (transparent / keyed on #F4F1EA). Primary = generated smash. */
export function HeroBurgerVideo({ className, blendMultiply = true }: Props) {
  return (
    <video
      className={`${className ?? ""} ${blendMultiply ? "mix-blend-multiply" : ""}`.trim()}
      autoPlay
      muted
      playsInline
      loop
      preload="metadata"
    >
      <source src="/hero/burger-generated.mp4" type="video/mp4" />
      <source src="/hero/result.mp4" type="video/mp4" />
    </video>
  );
}
