"use client";

import { HeroBurgerVideo } from "@/components/HeroBurgerVideo";

export function HeroScene() {
  return (
    <section
      id="top"
      className="sf-paper-noise relative isolate overflow-hidden border-b border-cream-deep pb-14 pt-10 md:pb-20 md:pt-14"
    >
      <h1 className="sr-only">Easey&apos;s Burgers &amp; Beers</h1>

      <div className="relative z-30 mx-auto max-w-6xl px-4 text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-muted">
          Burgers · beers · way above street level
        </p>
      </div>

      {/* Mega type BEHIND the burger (Royal Beverage–style depth) */}
      <div className="relative z-10 mx-auto mt-4 flex min-h-[min(58vh,560px)] w-full max-w-6xl flex-col items-center justify-center px-2 md:min-h-[min(62vh,620px)]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[42%] z-10 w-[110%] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 select-none text-center font-[family-name:var(--font-anton)] text-[clamp(3.5rem,14.5vw,10.5rem)] font-normal uppercase leading-[0.82] tracking-[-0.045em] text-ink/[0.14] md:top-[44%] md:w-full md:tracking-[-0.055em]"
        >
          {"EASEY\u2019S"}
        </div>

        <div className="relative z-20 flex w-full max-w-[min(92vw,520px)] flex-col items-center">
          <HeroBurgerVideo className="relative w-full object-contain drop-shadow-[0_28px_50px_rgb(0_0_0_/_0.12)]" />
          <p
            aria-hidden
            className="mt-2 text-center font-[family-name:var(--font-anton)] text-[clamp(1.75rem,5.5vw,2.75rem)] font-normal uppercase leading-none tracking-[-0.04em] text-accent-red"
          >
            BURGERS &amp; BEERS
          </p>
        </div>
      </div>

      <div className="relative z-30 mx-auto mt-8 max-w-xl px-4 text-center text-lg leading-relaxed text-muted md:text-xl">
        Big burgers, cold tins, and a view that earns the climb — Easey&apos;s is the feed before the night rolls on.
      </div>

      <p className="relative z-30 mx-auto mt-3 max-w-xl px-4 text-center font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent-red">
        Come hungry. Leave loud.
      </p>

      <p className="relative z-30 mx-auto mt-10 max-w-6xl px-4 text-center font-mono text-[0.7rem] uppercase tracking-[0.35em] text-muted">
        Scroll
      </p>

      <p className="relative z-30 mx-auto mt-14 max-w-2xl px-4 text-center text-sm text-muted">
        Hero uses <code className="font-mono text-ink">/hero/result.mp4</code> (then <code className="font-mono text-ink">burger-generated</code>). Add{" "}
        <code className="font-mono text-ink">/hero/beer.mp4</code> and <code className="font-mono text-ink">/hero/chips.mp4</code> for the scroll meal
        scene — placeholders show until files exist.
      </p>
    </section>
  );
}
