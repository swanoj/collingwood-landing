import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Train",
  description: "48 Easey St — Hitachi train dining and the Red Stripe Room.",
};

export default function TrainPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] px-4 py-16 text-cream md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-cream/50">Functions · events</p>
        <h1 className="mt-4 font-[family-name:var(--font-anton)] text-5xl uppercase leading-[0.9] tracking-[-0.04em] text-cream md:text-7xl">
          48 EASEY ST
        </h1>
        <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-cream/75 md:text-base">
          Blueprint rails, steel discipline, room for the whole crew. Pick a carriage — we&apos;ll dial in capacity and
          run sheets.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <article className="relative border border-dashed border-cream/35 bg-cream/[0.03] p-8 shadow-[inset_0_0_0_1px_rgba(244,241,234,0.06)]">
            <div
              className="pointer-events-none absolute inset-3 border border-cream/15"
              aria-hidden
            />
            <h2 className="font-[family-name:var(--font-anton)] text-3xl uppercase tracking-[-0.03em] text-accent-red">
              The Hitachi Train
            </h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-cream/50">~100 capacity</p>
            <p className="mt-6 font-mono text-sm leading-relaxed text-cream/80">
              Rooftop carriage service: long tables, loud vinyl, burgers sliding down the pass. Ideal for launch
              parties, brand takeovers, and end-of-season chaos.
            </p>
          </article>

          <article className="relative border border-dashed border-cream/35 bg-cream/[0.03] p-8 shadow-[inset_0_0_0_1px_rgba(244,241,234,0.06)]">
            <div
              className="pointer-events-none absolute inset-3 border border-cream/15"
              aria-hidden
            />
            <h2 className="font-[family-name:var(--font-anton)] text-3xl uppercase tracking-[-0.03em] text-accent-red">
              The Red Stripe Room
            </h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-cream/50">Intimate · flex layout</p>
            <p className="mt-6 font-mono text-sm leading-relaxed text-cream/80">
              Smaller footprint, same industrial shell: red stripe datum line, blueprint corners, dimmable cans for
              tastings or label launches.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
