"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { signatureDishes } from "@/src/content/menu";

gsap.registerPlugin(ScrollTrigger);

const row = signatureDishes.slice(0, 5);

export function SpreadShowcase() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const r = root.current;
    const t = track.current;
    if (!r || !t || mq.matches) return;

    const ctx = gsap.context(() => {
      const endX = () => Math.max(0, t.scrollWidth - window.innerWidth + 64);
      gsap.fromTo(
        t,
        { x: 0 },
        {
          x: -endX,
          ease: "none",
          scrollTrigger: {
            trigger: r,
            start: "top top",
            end: () => `+=${endX() + 400}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        },
      );
    }, r);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative min-h-[100dvh] bg-[#161616] py-16 text-cream">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-cream/50">The spread</p>
        <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-anton)] text-4xl uppercase leading-[0.95] tracking-[-0.04em] text-cream md:text-5xl">
          Cut-outs, loud type, one long scroll
        </h2>
        <p className="mt-4 max-w-xl font-sans text-sm text-cream/70">
          Pin + scrub — Gourou energy without cloning their art direction.
        </p>
      </div>

      <div className="mt-12 overflow-hidden">
        <div ref={track} className="flex w-max gap-6 px-6 pb-16 pt-4 md:gap-10 md:px-10">
          {row.map((d) => (
            <Link
              key={d.id}
              href={d.href}
              className="relative block h-[min(52vh,420px)] w-[min(72vw,280px)] shrink-0 overflow-hidden border border-white/15 bg-[#1f1f1f] md:w-[320px]"
            >
              <Image
                src={d.image}
                alt=""
                fill
                className="object-contain p-6"
                sizes="320px"
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/50 px-4 py-3 backdrop-blur-sm">
                <p className="font-[family-name:var(--font-anton)] text-xl uppercase tracking-[-0.03em] text-cream">
                  {d.headline}
                </p>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent-red">{d.subline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-4 px-4 pb-16">
        <Link
          href="/order"
          className="inline-flex border-2 border-accent-red bg-accent-red px-8 py-3 font-[family-name:var(--font-anton)] text-lg uppercase tracking-[0.08em] text-cream hover:bg-cream hover:text-ink"
        >
          Order
        </Link>
        <Link
          href="/functions"
          className="inline-flex border-2 border-cream px-8 py-3 font-[family-name:var(--font-anton)] text-lg uppercase tracking-[0.08em] text-cream hover:bg-cream hover:text-ink"
        >
          Book functions
        </Link>
      </div>
    </div>
  );
}
