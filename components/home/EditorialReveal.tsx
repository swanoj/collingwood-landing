"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

export function EditorialReveal({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = root.current;
    if (!el || mq.matches) return;
    const lines = el.querySelectorAll<HTMLElement>("[data-reveal]");
    const ctx = gsap.context(() => {
      gsap.from(lines, {
        y: 36,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 78%",
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="space-y-4">
      {children}
    </div>
  );
}
