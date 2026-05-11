"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";
import { Button } from "@/components/Button";

export type SpreadCard = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

type Props = {
  cards: SpreadCard[];
};

export function PinnedSpread({ cards }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const r = root.current;
    const t = track.current;
    if (!r || !t || mq.matches) return;

    const onResize = () => {
      registerGsap();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    const ctx = gsap.context(() => {
      const endX = () => Math.max(0, t.scrollWidth - window.innerWidth + 80);
      gsap.fromTo(
        t,
        { x: 0 },
        {
          x: -endX,
          ease: "none",
          scrollTrigger: {
            trigger: r,
            start: "top top",
            end: () => `+=${endX() + 320}`,
            pin: true,
            scrub: 0.85,
            invalidateOnRefresh: true,
          },
        },
      );
    }, r);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [cards]);

  return (
    <div
      ref={root}
      className="relative min-h-[100dvh] bg-[#0b0b0c] text-bg [background-image:radial-gradient(circle_at_20%_0%,rgb(255_255_255_/0.06),transparent_45%)]"
    >
      <div className="mx-auto max-w-6xl px-4 pt-14 md:px-6 md:pt-20">
        <p className="font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.2em] text-bg/45">The spread</p>
        <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-anton)] text-section-h2 uppercase tracking-[-0.03em]">
          Cut-outs, loud type, one angry scroll
        </h2>
        <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-bg/65">
          Pinned + scrubbed — poster energy without nicking someone else’s plates.
        </p>
      </div>

      <div className="mt-12 overflow-hidden">
        <div ref={track} className="flex w-max gap-6 px-5 pb-10 pt-2 md:gap-8 md:px-8">
          {cards.map((c, i) => (
            <Link
              key={c.id}
              href={c.href}
              className="group relative block h-[min(48vh,420px)] w-[min(78vw,300px)] shrink-0 overflow-hidden border-2 border-ink bg-bg text-ink shadow-[6px_6px_0_rgb(0_0_0_/0.35)] md:w-[300px]"
            >
              <span className="absolute left-3 top-3 z-10 font-[family-name:var(--font-courier)] text-[10px] uppercase tracking-[0.2em] text-ink/50">
                Poster {String(i + 1).padStart(2, "0")}
              </span>
              <Image
                src={c.image}
                alt=""
                fill
                className="object-contain p-7 transition duration-500 group-hover:scale-[1.02]"
                sizes="300px"
                unoptimized={c.image.endsWith(".svg")}
              />
              <div className="absolute inset-x-0 bottom-0 border-t-2 border-ink/10 bg-bg/95 px-4 py-3 backdrop-blur-[2px]">
                <p className="font-[family-name:var(--font-anton)] text-lg uppercase leading-[0.95] tracking-[-0.03em] md:text-xl">{c.title}</p>
                <p className="mt-1 font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.14em] text-accent2">{c.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-4 px-4 pb-20">
        <Button href="/order" variant="primary" className="border-bg">
          Order now
        </Button>
        <Button href="/functions" variant="secondary" className="border-bg text-bg hover:bg-bg hover:text-ink">
          Book a function
        </Button>
      </div>
    </div>
  );
}
