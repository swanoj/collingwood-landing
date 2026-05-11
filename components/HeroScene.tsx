"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const BurgerCanvas = dynamic(
  () => import("@/components/BurgerCanvas").then((m) => ({ default: m.BurgerCanvas })),
  {
    ssr: false,
    loading: () => (
      <div
        className="mx-auto h-[min(55vh,520px)] w-full max-w-lg animate-pulse rounded-3xl bg-ink/[0.06]"
        aria-hidden
      />
    ),
  },
);

function VideoFallback() {
  return (
    <video
      className="mx-auto h-[min(55vh,520px)] w-full max-w-lg object-contain"
      autoPlay
      muted
      playsInline
      loop
      preload="metadata"
    >
      <source src="/hero/result.mp4" type="video/mp4" />
      <source src="/hero/burger-generated.mp4" type="video/mp4" />
    </video>
  );
}

export function HeroScene() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  const [preferVideo, setPreferVideo] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPreferVideo(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (preferVideo !== false) return;
    const el = stageRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseRef.current.x = Math.max(-1, Math.min(1, x));
      mouseRef.current.y = Math.max(-1, Math.min(1, y));
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [preferVideo]);

  return (
    <section
      ref={stageRef}
      id="top"
      className="sf-paper-noise relative isolate overflow-hidden border-b border-cream-deep pb-16 pt-10 md:pb-20 md:pt-14"
    >
      <p className="relative z-10 mx-auto max-w-6xl px-4 text-center font-mono text-xs font-bold uppercase tracking-[0.28em] text-muted">
        Burgers · beers · way above street level
      </p>

      <h1 className="pointer-events-none relative z-0 mx-auto mt-2 max-w-[1100px] px-2 text-center font-[family-name:var(--font-anton)] text-[clamp(3.25rem,12vw,8.5rem)] leading-[0.92] tracking-tight text-ink/90">
        {"EASEY\u2019S"}
        <span className="block text-accent-red">BURGERS &amp; BEERS</span>
      </h1>

      <p className="relative z-20 mx-auto mt-6 max-w-xl px-4 text-center text-lg leading-relaxed text-muted md:text-xl">
        Big burgers, cold tins, and a view that earns the climb — Easey&apos;s is the feed before the night rolls on.
      </p>

      <p className="relative z-20 mx-auto mt-3 max-w-xl px-4 text-center font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent-red">
        Come hungry. Leave loud.
      </p>

      <div className="relative z-20 mx-auto mt-10 max-w-6xl px-4">
        {preferVideo === null ? (
          <div
            className="mx-auto h-[min(55vh,520px)] w-full max-w-lg animate-pulse rounded-3xl bg-ink/[0.06]"
            aria-hidden
          />
        ) : preferVideo ? (
          <VideoFallback />
        ) : (
          <BurgerCanvas mouseRef={mouseRef} />
        )}
      </div>

      <p className="relative z-20 mx-auto mt-10 max-w-6xl px-4 text-center font-mono text-[0.7rem] uppercase tracking-[0.35em] text-muted">
        Scroll
      </p>

      <p className="mx-auto mt-16 max-w-2xl px-4 text-center text-sm text-muted">
        Update hours, bookings, and delivery links in the next sections when you add them. Drop{" "}
        <code className="font-mono text-ink">public/models/burger.glb</code> when the mesh is ready to replace the
        placeholder.
      </p>
    </section>
  );
}
