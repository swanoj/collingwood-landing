import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageChrome } from "@/components/PageChrome";
import { Section } from "@/components/Section";
import { menuCategories, menuNote } from "@/content/menu";

export const metadata: Metadata = {
  title: "Food",
  description: "Easey's food menu — burgers, bird, sides. Online seed until dine-in PDF is law.",
};

export default function FoodPage() {
  return (
    <PageChrome>
      <Section theme="default" className="!pt-10">
        <h1 className="font-[family-name:var(--font-anton)] text-masthead uppercase">Food</h1>
        <p className="mt-6 max-w-2xl font-sans text-[16px] leading-relaxed text-muted md:text-[18px]">
          <span className="font-[family-name:var(--font-courier)] text-meta text-ink">Online menu seed</span> — replace with dine-in PDF when
          signed off. Dietary key: V / VG / GF = vegetarian / vegan / gluten-free friendly when modified.
        </p>
        <p className="mt-4 font-[family-name:var(--font-courier)] text-meta text-muted">{menuNote}</p>

        <nav
          aria-label="Menu categories"
          className="sticky top-24 z-10 mt-10 flex flex-wrap gap-3 border-b border-faint bg-bg/95 py-4 backdrop-blur-sm font-[family-name:var(--font-courier)] text-meta md:top-28"
        >
          {menuCategories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="text-ink underline-offset-4 hover:text-accent2 hover:underline">
              {c.title}
            </a>
          ))}
        </nav>
      </Section>

      {menuCategories.map((cat) => (
        <Section key={cat.id} id={cat.id} theme="default" className="!pt-12">
          <h2 className="font-[family-name:var(--font-anton)] text-section-h2 uppercase">{cat.title}</h2>
          {cat.blurb ? <p className="mt-4 max-w-2xl font-sans text-muted">{cat.blurb}</p> : null}
          <ul className="mt-10 space-y-10">
            {cat.items.map((item) => (
              <li key={item.id} id={item.id} className="border-b border-faint pb-10">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="font-[family-name:var(--font-anton)] text-3xl uppercase tracking-[-0.02em] md:text-4xl">{item.name}</h3>
                    <p className="mt-3 font-sans text-[16px] leading-relaxed text-muted md:text-[17px]">{item.description}</p>
                    {item.tags?.length ? (
                      <p className="mt-3 font-[family-name:var(--font-courier)] text-meta text-muted">{item.tags.join(" · ")}</p>
                    ) : null}
                  </div>
                  <p className="shrink-0 font-[family-name:var(--font-courier)] text-meta text-ink md:pt-1">{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <Section theme="accented" reveal={false}>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-xl font-[family-name:var(--font-anton)] text-2xl uppercase text-ink">Enough reading. Order.</p>
          <Button href="/order" variant="primary">
            Order now
          </Button>
        </div>
      </Section>
    </PageChrome>
  );
}
