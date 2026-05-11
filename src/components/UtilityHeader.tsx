"use client";

import Link from "next/link";
import { analytics } from "@/lib/analytics";
import { mainNav } from "@/content/routes";
import { site } from "@/content/site";
import { Button } from "@/components/Button";

type Props = {
  variant?: "default" | "overlay";
};

export function UtilityHeader({ variant = "default" }: Props) {
  const isOverlay = variant === "overlay";
  const shell = isOverlay
    ? "absolute inset-x-0 top-0 z-30 border-b border-white/15 bg-gradient-to-b from-black/75 via-black/45 to-transparent pb-6 pt-4 text-[#f5f1e8] md:pt-6"
    : "sticky top-0 z-40 border-b border-faint bg-bg/95 text-ink backdrop-blur-md";

  const metaColor = isOverlay ? "text-[#f5f1e8]/80" : "text-muted";
  const labelClass = isOverlay ? "text-[#f5f1e8]/55" : "text-muted";
  const valueClass = isOverlay ? "text-[#f5f1e8]" : "text-ink";
  const borderTone = isOverlay ? "border-white/15" : "border-faint";
  const navColor = isOverlay ? "text-[#f5f1e8]/90 hover:text-accent" : "text-ink hover:text-accent2";

  return (
    <header className={shell}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <Link
            href="/"
            className={`font-[family-name:var(--font-anton)] text-3xl uppercase tracking-[-0.04em] md:text-4xl ${isOverlay ? "text-[#f5f1e8]" : "text-ink"}`}
          >
            {site.wordmark}
          </Link>
          <div className="flex flex-wrap gap-3">
            <Button
              href="/order"
              variant="primary"
              className="min-w-[9rem] py-3 text-sm md:text-base"
              onClick={() => analytics.orderClick({ provider: "header", mode: "nav" })}
            >
              Order now
            </Button>
            <Button
              href="/reservations"
              variant="secondary"
              className={`min-w-[9rem] bg-transparent py-3 text-sm md:text-base ${isOverlay ? "border-[#f5f1e8] text-[#f5f1e8] hover:bg-[#f5f1e8] hover:text-ink" : ""}`}
              onClick={() => analytics.reservationClick()}
            >
              Reservations
            </Button>
          </div>
        </div>

        <div
          className={`grid gap-4 border-t pt-4 font-[family-name:var(--font-courier)] text-meta ${borderTone} sm:grid-cols-2 lg:grid-cols-4`}
        >
          <p className={metaColor}>
            <span className={`block ${labelClass}`}>Address</span>
            <span className={`mt-1 block font-bold normal-case tracking-normal text-[0.8rem] leading-snug ${valueClass}`}>{site.address}</span>
          </p>
          <p className={metaColor}>
            <span className={`block ${labelClass}`}>Hours</span>
            <span className={`mt-1 block font-bold normal-case tracking-normal text-[0.8rem] leading-snug ${valueClass}`}>{site.hours}</span>
          </p>
          <p className={metaColor}>
            <span className={`block ${labelClass}`}>Phone</span>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-1 block font-bold normal-case tracking-normal text-[0.8rem] text-accent hover:underline"
              onClick={() => analytics.phoneClick()}
            >
              {site.phone}
            </a>
          </p>
          <p className={metaColor}>
            <span className={`block ${labelClass}`}>Email</span>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block break-all font-bold normal-case tracking-normal text-[0.8rem] text-accent hover:underline"
              onClick={() => analytics.emailClick()}
            >
              {site.email}
            </a>
          </p>
        </div>

        <p className={`font-[family-name:var(--font-courier)] text-meta ${metaColor}`}>{site.taglineBookings}</p>

        <nav aria-label="Main" className={`flex flex-wrap gap-x-4 gap-y-2 border-t pt-3 font-[family-name:var(--font-courier)] text-meta md:gap-x-5 ${borderTone}`}>
          {mainNav.map((r) => (
            <Link key={r.href} href={r.href} className={navColor}>
              {r.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
