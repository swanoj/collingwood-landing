"use client";

import { HeroBurgerVideo } from "@/components/HeroBurgerVideo";

export function HeroScene() {
  return (
    <section
      id="top"
      className="sf-paper-noise relative isolate flex min-h-[100dvh] w-full flex-col overflow-hidden bg-[#F4F1EA]"
    >
      <h1 className="sr-only">Easey&apos;s Burgers &amp; Beers</h1>

      <p className="relative z-30 px-4 pt-8 text-center font-mono text-xs font-bold uppercase tracking-[0.28em] text-muted md:pt-10">
        Burgers · beers · way above street level
      </p>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-4 pb-28 pt-6">
        {/* 1. Background mega-type (depth layer) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none"
        >
          <span className="text-center font-[family-name:var(--font-anton)] text-[min(25vw,13rem)] font-normal uppercase leading-none tracking-[-0.06em] text-ink/[0.055] sm:text-[22vw] md:text-[25vw]">
            {"EASEY\u2019S"}
          </span>
        </div>

        {/* 2. Video + 3. Foreground lockup */}
        <div className="relative z-20 w-full max-w-4xl">
          <HeroBurgerVideo className="relative z-10 h-auto w-full object-contain drop-shadow-2xl" />

          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
            <h2 className="max-w-[95%] text-center font-[family-name:var(--font-anton)] text-4xl font-normal uppercase leading-[0.95] tracking-[-0.04em] text-[#D32F2F] drop-shadow-sm sm:text-5xl md:text-7xl lg:text-8xl">
              Burgers
              <span className="block">&amp; Beers</span>
            </h2>
          </div>
        </div>
      </div>

      <p className="relative z-30 mx-auto max-w-lg px-6 pb-6 text-center text-base leading-relaxed text-muted md:text-lg">
        Big burgers, cold tins, and a view that earns the climb — Easey&apos;s is the feed before the night rolls on.
      </p>

      <p className="relative z-30 mx-auto max-w-lg px-6 pb-10 text-center font-mono text-sm font-bold uppercase tracking-[0.18em] text-accent-red">
        Come hungry. Leave loud.
      </p>

      {/* 4. Scroll CTA */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center px-4">
        <p className="animate-bounce font-mono text-xs font-bold uppercase tracking-[0.35em] text-muted">
          ↓ Scroll for the spread
        </p>
      </div>

      <p className="relative z-30 mx-auto max-w-2xl px-4 pb-8 text-center text-xs text-muted">
        Hero: <code className="text-ink">burger-generated.mp4</code> then <code className="text-ink">result.mp4</code>. The Spread: add{" "}
        <code className="text-ink">beer.mp4</code> + <code className="text-ink">chips.mp4</code>. Firefly: use{" "}
        <strong>transparent background</strong> when stacking on type or charcoal.
      </p>
    </section>
  );
}
