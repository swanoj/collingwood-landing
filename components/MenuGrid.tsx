"use client";

import { HeroBurgerVideo } from "@/components/HeroBurgerVideo";

const items = [
  {
    name: "Cheeseburger",
    price: "$20",
    desc: "Smashed patty, American cheddar, burger sauce.",
  },
  {
    name: "Melbourne Madness",
    price: "$35",
    desc: "Double beef, bacon, potato cake, dim sim.",
  },
  {
    name: "Dim Sims",
    price: "$8",
    desc: "Triple fried Melbourne Bitter batter.",
  },
] as const;

export function MenuGrid() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:gap-14 md:px-6 md:py-24">
      <div className="md:sticky md:top-28 md:self-start">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.28em] text-muted">Preview</p>
        <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-[#f4f1ea] shadow-2xl">
          <HeroBurgerVideo
            className="aspect-[3/4] w-full object-contain md:aspect-auto md:min-h-[420px]"
            blendMultiply={false}
          />
        </div>
        <p className="mt-4 font-mono text-xs text-muted">Same smash clip as the landing — swap for a rotating GLB later.</p>
      </div>

      <div>
        <h1 className="font-[family-name:var(--font-anton)] text-5xl uppercase leading-none tracking-[-0.04em] text-ink md:text-6xl">
          Menu
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Receipt-style list. Hover a line for a light paint drip.
        </p>

        <ul className="mt-12 space-y-0 font-sans">
          {items.map((item) => (
            <li
              key={item.name}
              className="group relative border-b border-ink/15 py-8 transition-colors hover:bg-accent-red/[0.03]"
            >
              {/* Spray drip */}
              <span
                className="pointer-events-none absolute left-0 top-0 h-0 w-[3px] bg-gradient-to-b from-accent-red via-accent-red/50 to-transparent opacity-0 transition-all duration-300 ease-out group-hover:h-full group-hover:opacity-90"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute right-6 top-2 h-0 w-[2px] rotate-12 bg-accent-red/80 opacity-0 blur-[0.5px] transition-all duration-500 group-hover:h-16 group-hover:opacity-70"
                aria-hidden
              />

              <div className="flex flex-wrap items-baseline justify-between gap-4 pl-4 pr-2">
                <h2 className="font-[family-name:var(--font-anton)] text-2xl uppercase tracking-[-0.03em] text-ink md:text-3xl">
                  {item.name}
                </h2>
                <span className="font-mono text-lg font-bold tracking-tight text-accent-red md:text-xl">{item.price}</span>
              </div>
              <p className="mt-2 pl-4 pr-2 text-sm leading-relaxed text-muted md:text-base">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
