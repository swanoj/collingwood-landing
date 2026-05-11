"use client";

import Link from "next/link";
import { analytics } from "@/lib/analytics";

type Props = {
  reserveHref?: string;
  orderHref?: string;
  /** Use on dark backgrounds (e.g. footer). */
  variant?: "default" | "onDark";
  orderAnalyticsProvider?: string;
};

export function PrimaryCtas({
  reserveHref = "/reservations",
  orderHref = "/order",
  variant = "default",
  orderAnalyticsProvider = "primary_ctas",
}: Props) {
  const reserveClass =
    variant === "onDark"
      ? "inline-flex min-h-12 min-w-[10rem] items-center justify-center border-2 border-cream bg-transparent px-8 font-[family-name:var(--font-anton)] text-lg uppercase tracking-[0.08em] text-cream transition hover:bg-cream hover:text-ink md:text-xl"
      : "inline-flex min-h-12 min-w-[10rem] items-center justify-center border-2 border-ink bg-ink px-8 font-[family-name:var(--font-anton)] text-lg uppercase tracking-[0.08em] text-cream transition hover:bg-accent-red hover:border-accent-red md:text-xl";

  const orderClass =
    variant === "onDark"
      ? "inline-flex min-h-12 min-w-[10rem] items-center justify-center border-2 border-accent-red bg-accent-red px-8 font-[family-name:var(--font-anton)] text-lg uppercase tracking-[0.08em] text-cream transition hover:bg-cream hover:border-cream hover:text-ink md:text-xl"
      : "inline-flex min-h-12 min-w-[10rem] items-center justify-center border-2 border-accent-red bg-accent-red px-8 font-[family-name:var(--font-anton)] text-lg uppercase tracking-[0.08em] text-cream transition hover:bg-ink hover:border-ink md:text-xl";

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      <Link href={reserveHref} className={reserveClass} onClick={() => analytics.reservationClick({})}>
        Reserve
      </Link>
      <Link
        href={orderHref}
        className={orderClass}
        onClick={() => analytics.orderClick({ provider: orderAnalyticsProvider })}
      >
        Order
      </Link>
    </div>
  );
}
