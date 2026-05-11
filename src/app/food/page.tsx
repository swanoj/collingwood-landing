import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageChrome } from "@/components/PageChrome";
import { PosterRow } from "@/components/PosterRow";
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
          <span className="font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.14em] text-ink">
            Online menu seed
          </span>{" "}
          — replace with dine-in PDF when signed off. Dietary key: V / VG / GF = vegetarian / vegan / gluten-free friendly when modified.
        </p>
        <p className="mt-4 font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.12em] text-muted">{menuNote}</p>

        <nav
          aria-label="Menu categories"
          className="sticky top-36 z-10 mt-10 flex flex-wrap items-center gap-y-2 border-b border-faint bg-bg/95 py-3 backdrop-blur-sm md:top-40"
        >
          <span className="mr-3 font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.18em] text-muted">Index</span>
          {menuCategories.map((c, i) => (
            <span key={c.id} className="inline-flex items-center font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.12em]">
              {i > 0 ? <span className="mx-2 select-none text-muted opacity-50">·</span> : null}
              <a href={`#${c.id}`} className="text-ink underline-offset-[5px] hover:underline">
                {c.title}
              </a>
            </span>
          ))}
        </nav>
      </Section>

      {menuCategories.map((cat) => (
        <Section key={cat.id} id={cat.id} theme="default" className="!pt-12">
          <h2 className="font-[family-name:var(--font-anton)] text-section-h2 uppercase">{cat.title}</h2>
          {cat.blurb ? <p className="mt-4 max-w-2xl font-sans text-muted">{cat.blurb}</p> : null}
          <ul className="mt-10 space-y-0">
            {cat.items.map((item) => (
              <PosterRow
                key={item.id}
                id={item.id}
                title={item.name}
                description={item.description}
                price={item.price}
                tags={item.tags}
              />
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
