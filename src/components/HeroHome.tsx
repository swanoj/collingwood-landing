"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { Button } from "@/components/Button";
import { analytics } from "@/lib/analytics";

export function HeroHome() {
  const root = useRef<HTMLDivElement>(null);
  const [videoOk, setVideoOk] = useState(true);

  useLayoutEffect(() => {
    registerGsap();
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const r = root.current;
    if (!r || mq.matches) return;

    const q = gsap.utils.selector(r);
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(q(".hero-line"), { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.12 }, 0);
    tl.fromTo(q(".hero-video"), { scale: 1.04 }, { scale: 1, duration: 1.2, ease: "power2.out" }, 0);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={root} className="relative min-h-[min(100dvh,920px)] overflow-hidden bg-ink">
      <div className="absolute inset-0">
        {videoOk ? (
          <video
            className="hero-video absolute inset-0 h-full w-full object-cover opacity-90"
            autoPlay
            muted
            playsInline
            loop
            poster="/images/hero-poster.svg"
            onError={() => setVideoOk(false)}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-ink to-[#2a1810]" aria-hidden />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/35" aria-hidden />
      </div>

      <div className="relative z-10 flex min-h-[min(100dvh,920px)] flex-col justify-end px-4 pb-20 pt-44 md:px-6 md:pb-28 md:pt-52">
        <div className="mx-auto w-full max-w-6xl">
          <p className="hero-line font-[family-name:var(--font-anton)] text-masthead uppercase text-[#f5f1e8]">Easey&apos;s</p>
          <p className="hero-line mt-2 font-[family-name:var(--font-anton)] text-section-h2 uppercase tracking-[-0.03em] text-accent">
            Burgers. In a train. On a roof.
          </p>
          <p className="hero-line mt-6 max-w-xl font-sans text-[17px] leading-relaxed text-[#f5f1e8]/85 md:text-[18px]">Beat that.</p>
          <div className="hero-line mt-10 flex flex-wrap gap-4">
            <Button
              href="/order"
              variant="primary"
              className="min-w-[10rem]"
              onClick={() => analytics.orderClick({ provider: "hero", mode: "nav" })}
            >
              Order now
            </Button>
            <Button
              href="/reservations"
              variant="secondary"
              className="min-w-[10rem] border-[#f5f1e8] text-[#f5f1e8] hover:bg-[#f5f1e8] hover:text-ink"
              onClick={() => analytics.reservationClick()}
            >
              Reservations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
