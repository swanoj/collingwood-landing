"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef, type ReactNode } from "react";

export function HeroIntro({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = ref.current;
    if (!el || mq.matches) return;
    gsap.fromTo(el, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.85, ease: "power2.out", delay: 0.05 });
  }, []);

  return (
    <div ref={ref} className="will-change-transform">
      {children}
    </div>
  );
}
