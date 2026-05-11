import type { ReactNode } from "react";

const themes = {
  cream: "bg-[#F4F1EA] text-ink",
  ink: "bg-ink text-cream",
  charcoal: "bg-[#161616] text-cream",
} as const;

export type SectionTheme = keyof typeof themes;

type Props = {
  id?: string;
  theme?: SectionTheme;
  className?: string;
  children: ReactNode;
  bleed?: boolean;
};

export function Section({ id, theme = "cream", className = "", children, bleed = false }: Props) {
  const pad = bleed ? "" : "px-4 py-16 md:px-6 md:py-24";
  return (
    <section id={id} className={`${themes[theme]} ${pad} ${className}`.trim()}>
      {children}
    </section>
  );
}
