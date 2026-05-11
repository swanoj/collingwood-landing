import type { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function Masthead({ title, subtitle, children }: Props) {
  return (
    <div className="border-b border-ink/10 pb-10 pt-6 text-center md:pb-14 md:pt-10">
      <p className="font-[family-name:var(--font-anton)] text-[clamp(3rem,14vw,9rem)] font-normal uppercase leading-[0.88] tracking-[-0.05em]">
        {title}
      </p>
      <p className="mx-auto mt-4 max-w-3xl font-mono text-[0.7rem] font-bold uppercase leading-snug tracking-[0.22em] text-muted md:text-xs">
        {subtitle}
      </p>
      {children ? <div className="mt-8 flex flex-col items-center gap-6">{children}</div> : null}
    </div>
  );
}
