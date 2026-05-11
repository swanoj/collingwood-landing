"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

const themes = {
  default: "bg-bg text-ink",
  inverted: "bg-ink text-bg",
  accented: "bg-accent text-ink",
} as const;

export type SectionTheme = keyof typeof themes;

type Props = {
  id?: string;
  theme?: SectionTheme;
  className?: string;
  children: ReactNode;
  /** Turn off for sections inside pinned GSAP containers. */
  reveal?: boolean;
};

export function Section({ id, theme = "default", className = "", children, reveal = true }: Props) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!reveal || !root.current) return;
    registerGsap();
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const el = root.current;
    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
      const toAnimate = targets.length
        ? Array.from(targets)
        : ([el.querySelector<HTMLElement>("[data-section-inner]")].filter(Boolean) as HTMLElement[]);

      if (!toAnimate.length) return;

      gsap.set(toAnimate, { opacity: 0, y: 24 });
      gsap.to(toAnimate, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [reveal]);

  return (
    <section id={id} ref={root} className={`${themes[theme]} px-4 py-16 md:px-6 md:py-24 ${className}`.trim()}>
      <div data-section-inner className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}
