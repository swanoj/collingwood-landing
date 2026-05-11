"use client";

import { HeroBurgerVideo } from "@/components/HeroBurgerVideo";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const MARQUEE_REPEAT = 10;

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const marquee = marqueeRef.current;
    const title = parallaxRef.current;
    const root = rootRef.current;
    if (!marquee || !title || !root) return;

    let tween: gsap.core.Tween | null = null;
    if (!mq.matches) {
      const half = marquee.scrollWidth / 2;
      tween = gsap.to(marquee, {
        x: -half,
        duration: 36,
        ease: "none",
        repeat: -1,
      });
    }

    const xTo = gsap.quickTo(title, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(title, "y", { duration: 0.45, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      if (mq.matches) return;
      const rect = root.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      xTo(nx * 14);
      yTo(ny * 10);
    };

    root.addEventListener("pointermove", onMove);
    return () => {
      root.removeEventListener("pointermove", onMove);
      tween?.kill();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="sf-paper-noise relative isolate flex min-h-[100dvh] w-full flex-col overflow-hidden bg-[#F4F1EA]"
    >
      <h1 className="sr-only">Easey&apos;s Burgers &amp; Beers</h1>

      <p className="relative z-40 px-4 pt-8 text-center font-mono text-xs font-bold uppercase tracking-[0.28em] text-muted md:pt-10">
        Burgers · beers · way above street level
      </p>

      {/* Sandwich: TOP — parallax lockup (upper band so the burger stays readable) */}
      <div className="pointer-events-none absolute inset-x-0 top-[10%] z-30 flex justify-center px-4 md:top-[12%]">
        <h2
          ref={parallaxRef}
          className="will-change-transform text-center font-[family-name:var(--font-anton)] text-5xl font-normal uppercase leading-[0.95] tracking-[-0.045em] text-[#D32F2F] drop-shadow-sm sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Burgers
          <span className="block">&amp; Beers</span>
        </h2>
      </div>

      {/* MIDDLE — burger video */}
      <div className="relative z-20 flex min-h-0 flex-1 flex-col items-center justify-center px-4 pb-36 pt-28 md:pb-40 md:pt-32">
        <div className="relative w-full max-w-4xl">
          <HeroBurgerVideo className="relative z-10 h-auto w-full object-contain drop-shadow-2xl" blendMultiply />
        </div>
      </div>

      {/* BOTTOM — outlined EASEY'S horizontal scroll */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[min(42vh,380px)] overflow-hidden md:h-[min(38vh,420px)]">
        <div
          ref={marqueeRef}
          className="flex w-max items-center gap-4 pr-4 will-change-transform"
          aria-hidden
        >
          {Array.from({ length: MARQUEE_REPEAT }).map((_, i) => (
            <span
              key={i}
              className="shrink-0 font-[family-name:var(--font-anton)] text-[min(22vw,8rem)] font-normal uppercase leading-none tracking-[-0.06em] text-transparent md:text-[min(18vw,11rem)]"
              style={{
                WebkitTextStroke: "1.5px rgba(26,26,26,0.35)",
              }}
            >
              {"EASEY\u2019S"}
            </span>
          ))}
          {Array.from({ length: MARQUEE_REPEAT }).map((_, i) => (
            <span
              key={`b-${i}`}
              className="shrink-0 font-[family-name:var(--font-anton)] text-[min(22vw,8rem)] font-normal uppercase leading-none tracking-[-0.06em] text-transparent md:text-[min(18vw,11rem)]"
              style={{
                WebkitTextStroke: "1.5px rgba(26,26,26,0.35)",
              }}
            >
              {"EASEY\u2019S"}
            </span>
          ))}
        </div>
      </div>

      <p className="relative z-40 mx-auto max-w-lg px-6 pb-6 text-center text-base leading-relaxed text-muted md:text-lg">
        Big burgers, cold tins, and a view that earns the climb — Easey&apos;s is the feed before the night rolls on.
      </p>

      <p className="relative z-40 mx-auto max-w-lg px-6 pb-10 text-center font-mono text-sm font-bold uppercase tracking-[0.18em] text-accent-red">
        Come hungry. Leave loud.
      </p>

      <div className="absolute bottom-8 left-0 right-0 z-40 flex justify-center px-4">
        <p className="animate-bounce font-mono text-xs font-bold uppercase tracking-[0.35em] text-muted">
          ↓ Scroll for the spread
        </p>
      </div>
    </section>
  );
}
