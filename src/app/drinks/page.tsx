import type { Metadata } from "next";
import { PageChrome } from "@/components/PageChrome";
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
      </Section>

      {drinkSections.map((sec) => (
        <Section key={sec.id} id={sec.id} theme="default" className="!pt-12">
          <h2 className="font-[family-name:var(--font-anton)] text-section-h2 uppercase">{sec.title}</h2>
          <ul className="mt-10 space-y-8">
            {sec.items.map((item) => (
              <li key={item.name} className="flex flex-col gap-2 border-b border-faint pb-8 md:flex-row md:justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-anton)] text-2xl uppercase">{item.name}</h3>
                  <p className="mt-2 max-w-xl font-sans text-muted">{item.description}</p>
                </div>
                <p className="font-[family-name:var(--font-courier)] text-meta text-ink">{item.price}</p>
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </PageChrome>
  );
}
