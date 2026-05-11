"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, registerGsap } from "@/lib/gsap";
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

    return () => ctx.revert();
  }, [cards]);

  return (
    <div ref={root} className="relative min-h-[100dvh] bg-ink text-bg">
      <div className="mx-auto max-w-6xl px-4 pt-14 md:px-6 md:pt-20">
        <p data-reveal className="font-[family-name:var(--font-courier)] text-meta text-bg/50">
          The spread
        </p>
        <h2 data-reveal className="mt-3 max-w-2xl font-[family-name:var(--font-anton)] text-section-h2 uppercase tracking-[-0.03em]">
          Cut-outs, loud type, one angry scroll
        </h2>
        <p data-reveal className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-bg/70">
          Pinned + scrubbed — poster energy without nicking someone else’s plates.
        </p>
      </div>

      <div className="mt-12 overflow-hidden">
        <div ref={track} className="flex w-max gap-5 px-5 pb-10 pt-2 md:gap-8 md:px-8">
          {cards.map((c) => (
            <Link
              key={c.id}
              href={c.href}
              className="relative block h-[min(48vh,400px)] w-[min(78vw,300px)] shrink-0 overflow-hidden border border-white/12 bg-[#141414] md:w-[300px]"
            >
              <Image
                src={c.image}
                alt=""
                fill
                className="object-contain p-6"
                sizes="300px"
                unoptimized={c.image.endsWith(".svg")}
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/55 px-4 py-3 backdrop-blur-sm">
                <p className="font-[family-name:var(--font-anton)] text-xl uppercase tracking-[-0.03em]">{c.title}</p>
                <p className="font-[family-name:var(--font-courier)] text-meta text-accent">{c.subtitle}</p>
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
