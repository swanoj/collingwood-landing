import type { ReactNode } from "react";
import { Section, type SectionTheme } from "@/components/Section";

type Props = {
  kicker?: string;
  title: string;
  lead?: string;
  theme?: SectionTheme;
  children?: ReactNode;
};

export function PageHeader({ kicker, title, lead, theme = "cream", children }: Props) {
  return (
    <Section theme={theme} className="!pb-10 md:!pb-14">
      {kicker ? (
        <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-muted">{kicker}</p>
      ) : null}
      <h1 className="mt-2 max-w-4xl font-[family-name:var(--font-anton)] text-[clamp(2.5rem,8vw,4.5rem)] uppercase leading-[0.95] tracking-[-0.04em]">
        {title}
      </h1>
      {lead ? <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-ink/80 md:text-lg">{lead}</p> : null}
      {children}
    </Section>
  );
}
