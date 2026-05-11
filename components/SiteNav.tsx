"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { analytics } from "@/lib/analytics";

const secondary = [
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.08] bg-[#f4f1ea]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3.5 md:flex-nowrap md:px-6">
        <Link href="/" className="font-[family-name:var(--font-anton)] text-xl uppercase tracking-[-0.04em] text-ink md:text-2xl">
          {"Easey\u2019s"}
        </Link>

        <nav className="order-last flex w-full basis-full items-center justify-center gap-6 border-t border-ink/10 pt-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ink/70 md:order-none md:w-auto md:basis-auto md:border-0 md:pt-0" aria-label="Secondary">
          {secondary.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={
                  active
                    ? "text-accent-red underline decoration-accent-red decoration-2 underline-offset-[6px]"
                    : "hover:text-accent-red"
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/reservations"
            className="inline-flex min-h-10 items-center border-2 border-ink bg-ink px-4 font-[family-name:var(--font-anton)] text-sm uppercase tracking-[0.06em] text-cream hover:bg-accent-red md:px-5 md:text-base"
            onClick={() => analytics.reservationClick({})}
          >
            Reserve
          </Link>
          <Link
            href="/order"
            className="inline-flex min-h-10 items-center border-2 border-accent-red bg-accent-red px-4 font-[family-name:var(--font-anton)] text-sm uppercase tracking-[0.06em] text-cream hover:bg-ink md:px-5 md:text-base"
            onClick={() => analytics.orderClick({ provider: "nav" })}
          >
            Order
          </Link>
        </div>
      </div>
    </header>
  );
}
