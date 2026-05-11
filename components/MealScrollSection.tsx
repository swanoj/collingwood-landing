"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const beerSrc = "/hero/beer.mp4";
const chipsSrc = "/hero/chips.mp4";

function VideoOrSlot({
  src,
  label,
  videoClassName,
}: {
  src: string;
  label: string;
  videoClassName: string;
}) {
  const [ok, setOk] = useState(true);

  return ok ? (
    <video
      className={videoClassName}
      src={src}
      autoPlay
      muted
      playsInline
      loop
      preload="none"
      onError={() => setOk(false)}
    />
  ) : (
    <div
      className={`${videoClassName} flex flex-col items-center justify-center rounded-2xl border border-ink/10 bg-ink/[0.04] text-center font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted`}
      aria-label={`${label} video placeholder`}
    >
      <span className="max-w-[8rem] px-2">{label}</span>
      <span className="mt-1 max-w-[9rem] px-2 text-[0.55rem] font-normal normal-case tracking-normal text-muted">
        Add <code className="text-ink">{src}</code>
      </span>
    </div>
  );
}

export function MealScrollSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const beerRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    if (reduceMotion) return;
    const root = rootRef.current;
    const pin = pinRef.current;
    const beer = beerRef.current;
    const chips = chipsRef.current;
    if (!root || !pin || !beer || !chips) return;

    const offset = () => Math.min(window.innerWidth * 0.42, 520);

    const ctx = gsap.context(() => {
      gsap.set(beer, { x: offset(), opacity: 0.25 });
      gsap.set(chips, { x: -offset(), opacity: 0.25 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=220%",
            pin: pin,
            scrub: 0.65,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .to(beer, { x: 0, opacity: 1, ease: "none" }, 0)
        .to(chips, { x: 0, opacity: 1, ease: "none" }, 0);
    }, root);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section className="border-b border-cream-deep bg-cream py-20">
        <h2 className="sr-only">Full meal</h2>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 md:flex-row md:justify-center md:gap-6">
          <div className="w-full max-w-[200px] md:max-w-[220px]">
            <VideoOrSlot
              src={chipsSrc}
              label="Chips"
              videoClassName="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div className="w-full max-w-[240px] md:max-w-[260px]">
            <video
              className="aspect-[3/4] w-full rounded-2xl object-contain shadow-xl"
              autoPlay
              muted
              playsInline
              loop
              preload="metadata"
            >
              <source src="/hero/result.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-full max-w-[200px] md:max-w-[220px]">
            <VideoOrSlot
              src={beerSrc}
              label="Beer"
              videoClassName="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-xl px-4 text-center text-sm text-muted">
          Reduced motion: meal strip shown static. Full fly-in runs when motion is enabled.
        </p>
      </section>
    );
  }

  return (
    <section ref={rootRef} className="relative h-[280vh] border-b border-cream-deep bg-cream">
      <h2 className="sr-only">Full meal</h2>
      <div
        ref={pinRef}
        className="relative flex h-[100dvh] w-full items-center justify-center gap-1 overflow-hidden px-1 md:gap-4 md:px-8"
      >
        <p className="absolute left-1/2 top-8 z-30 -translate-x-1/2 text-center font-mono text-[0.65rem] font-bold uppercase tracking-[0.35em] text-muted md:top-10">
          The full spread
        </p>

        <div
          ref={chipsRef}
          className="relative z-10 flex w-[min(30vw,200px)] shrink-0 justify-center md:w-[min(26vw,240px)]"
        >
          <VideoOrSlot
            src={chipsSrc}
            label="Chips"
            videoClassName="aspect-[3/4] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-ink/10"
          />
        </div>

        <div className="relative z-20 flex w-[min(48vw,420px)] shrink-0 justify-center md:w-[min(42vw,480px)]">
          <video
            className="w-full object-contain drop-shadow-2xl"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
          >
            <source src="/hero/result.mp4" type="video/mp4" />
            <source src="/hero/burger-generated.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          ref={beerRef}
          className="relative z-10 flex w-[min(30vw,200px)] shrink-0 justify-center md:w-[min(26vw,240px)]"
        >
          <VideoOrSlot
            src={beerSrc}
            label="Beer"
            videoClassName="aspect-[3/4] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-ink/10"
          />
        </div>
      </div>
    </section>
  );
}
