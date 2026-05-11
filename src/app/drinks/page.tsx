import type { Metadata } from "next";
import { PageChrome } from "@/components/PageChrome";
import { PosterRow } from "@/components/PosterRow";
import { Section } from "@/components/Section";
import { drinkSections } from "@/content/drinks";

export const metadata: Metadata = {
  title: "Drinks",
  description: "Beer, cider, cocktails, wine, and non-alc — rooftop pours.",
};

export default function DrinksPage() {
  return (
    <PageChrome>
      <Section theme="default" className="!pt-10">
        <h1 className="font-[family-name:var(--font-anton)] text-masthead uppercase">Drinks</h1>
        <p className="mt-6 max-w-2xl font-sans text-[16px] leading-relaxed text-muted md:text-[18px]">
          Taps rotate. Tinnies stay honest. Ask what&apos;s cold — we&apos;ll point.
        </p>

        <nav
          aria-label="Drinks sections"
          className="sticky top-36 z-10 mt-10 flex flex-wrap items-center gap-y-2 border-b border-faint bg-bg/95 py-3 backdrop-blur-sm md:top-40"
        >
          <span className="mr-3 font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.18em] text-muted">Index</span>
          {drinkSections.map((sec, i) => (
            <span key={sec.id} className="inline-flex items-center font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.12em]">
              {i > 0 ? <span className="mx-2 select-none text-muted opacity-50">·</span> : null}
              <a href={`#${sec.id}`} className="text-ink underline-offset-[5px] hover:underline">
                {sec.title}
              </a>
            </span>
          ))}
        </nav>
      </Section>

      {drinkSections.map((sec) => (
        <Section key={sec.id} id={sec.id} theme="default" className="!pt-12">
          <h2 className="font-[family-name:var(--font-anton)] text-section-h2 uppercase">{sec.title}</h2>
          <ul className="mt-10 space-y-0">
            {sec.items.map((item) => (
              <PosterRow key={item.name} title={item.name} description={item.description} price={item.price} />
            ))}
          </ul>
        </Section>
      ))}
    </PageChrome>
  );
}
