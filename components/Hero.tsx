"use client";

import { HeroBurgerVideo } from "@/components/HeroBurgerVideo";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const title = parallaxRef.current;
    const root = rootRef.current;
    if (!title || !root) return;

    const xTo = gsap.quickTo(title, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(title, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      if (mq.matches) return;
      const rect = root.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      xTo(nx * 8);
      yTo(ny * 5);
    };

    root.addEventListener("pointermove", onMove);
    return () => root.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="sf-paper-noise relative isolate min-h-[100dvh] w-full overflow-hidden bg-[#F4F1EA] pb-20 pt-6 md:pb-28 md:pt-10"
    >
      <h1 className="sr-only">Easey&apos;s Burgers &amp; Beers</h1>

      <p className="relative z-20 mx-auto max-w-6xl px-4 text-center font-mono text-[0.7rem] font-bold uppercase tracking-[0.28em] text-muted">
        Burgers · beers · way above street level
      </p>

      <div className="relative z-10 mx-auto mt-10 flex max-w-3xl flex-col items-center px-4 md:mt-14">
        {/* Single watermark behind clip — no ticker */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[28%] z-0 w-[140%] max-w-[920px] -translate-x-1/2 -translate-y-1/2 text-center font-[family-name:var(--font-anton)] text-[clamp(4rem,18vw,11rem)] font-normal uppercase leading-none tracking-[-0.06em] text-ink/[0.06]"
        >
          {"EASEY\u2019S"}
        </div>

        <div className="relative z-10 w-full max-w-[min(100%,520px)]">
          <HeroBurgerVideo
            className="relative w-full object-contain drop-shadow-[0_20px_50px_rgb(0_0_0_/_0.08)]"
            blendMultiply={false}
          />
        </div>

        <h2
          ref={parallaxRef}
          className="relative z-20 mt-8 text-center font-[family-name:var(--font-anton)] text-4xl font-normal uppercase leading-[0.95] tracking-[-0.04em] text-[#D32F2F] sm:text-5xl md:text-6xl"
        >
          Burgers <span className="whitespace-nowrap">&amp; Beers</span>
        </h2>
      </div>

      <p className="relative z-20 mx-auto mt-10 max-w-lg px-6 text-center font-sans text-base leading-relaxed text-muted md:text-lg">
        Big burgers, cold tins, and a view that earns the climb — Easey&apos;s is the feed before the night rolls on.
      </p>

      <p className="relative z-20 mx-auto mt-4 max-w-lg px-6 text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-red">
        Come hungry. Leave loud.
      </p>

      <p className="relative z-20 mx-auto mt-14 text-center font-mono text-[0.65rem] uppercase tracking-[0.35em] text-muted">
        Scroll for the spread
      </p>
    </section>
  );
}
