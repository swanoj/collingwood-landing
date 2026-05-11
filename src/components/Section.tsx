"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

const themes = {
  default: "bg-bg text-ink",
  inverted: "bg-ink text-bg",
  accented: "bg-accent text-ink",
} as const;

/** Vertical rhythm: same horizontal grid (`max-w-6xl` + `px-4 md:px-6`) on every theme. */
const sectionY: Record<keyof typeof themes, string> = {
  default: "py-16 md:py-28",
  accented: "py-16 md:py-28",
  inverted: "py-16 md:py-28",
};

export type SectionTheme = keyof typeof themes;

/** Printed divider between major blocks — opt-in so stacked sections don’t double-border. */
export type SectionRule = "none" | "top" | "bottom" | "both";

function ruleClasses(theme: SectionTheme, rule: SectionRule): string {
  if (rule === "none") return "";
  const edge =
    theme === "inverted" ? "border-white/12" : theme === "accented" ? "border-ink/20" : "border-faint";
  const top = rule === "top" || rule === "both" ? `border-t ${edge}` : "";
  const bottom = rule === "bottom" || rule === "both" ? `border-b ${edge}` : "";
  return [top, bottom].filter(Boolean).join(" ");
}

type Props = {
  id?: string;
  theme?: SectionTheme;
  className?: string;
  children: ReactNode;
  /** Turn off for sections inside pinned GSAP containers. */
  reveal?: boolean;
  /** Gourou-style printed rules between major blocks (default: none). */
  rule?: SectionRule;
};

export function Section({
  id,
  theme = "default",
  className = "",
  children,
  reveal = true,
  rule = "none",
}: Props) {
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

  const y = sectionY[theme];
  const rules = ruleClasses(theme, rule);

  return (
    <section id={id} ref={root} className={`${themes[theme]} ${y} ${rules} px-4 md:px-6 ${className}`.trim()}>
      <div data-section-inner className="relative mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}
