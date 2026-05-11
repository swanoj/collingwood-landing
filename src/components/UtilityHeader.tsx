"use client";

import Link from "next/link";
import { analytics } from "@/lib/analytics";
import { mainNav } from "@/content/routes";
import { site } from "@/content/site";
import { Button } from "@/components/Button";

type Props = {
  variant?: "default" | "overlay";
};

const labelBase = "block text-[11px] font-[family-name:var(--font-courier)] uppercase tracking-[0.14em]";
const labelDefault = `${labelBase} text-muted`;
const labelOverlay = `${labelBase} text-[#f5f1e8]/45`;

export function UtilityHeader({ variant = "default" }: Props) {
  const isOverlay = variant === "overlay";
  const shell = isOverlay
    ? "absolute inset-x-0 top-0 z-30 border-t border-white/25 border-b border-white/12 bg-[rgb(11_11_12_/0.58)] pb-5 pt-3 text-[#f5f1e8] backdrop-blur-[3px] md:pb-6 md:pt-4"
    : "sticky top-0 z-40 border-b border-faint bg-bg/95 text-ink backdrop-blur-md";

  const valueClass = isOverlay ? "text-[#f5f1e8]/95" : "text-ink";
  const rule = isOverlay ? "border-white/12" : "border-faint";
  const navColor = isOverlay
    ? "text-[#f5f1e8]/90 underline-offset-[5px] hover:text-[#f5f1e8] hover:underline"
    : "text-ink underline-offset-[5px] hover:underline";
  const stripClass = isOverlay ? "text-[#f5f1e8]/70" : "text-muted";

  return (
    <header className={shell}>
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 md:gap-6 md:px-6">
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

        <div className={`grid gap-x-6 gap-y-4 border-t pt-4 sm:grid-cols-2 lg:grid-cols-4 ${rule}`}>
          <div>
            <span className={isOverlay ? labelOverlay : labelDefault}>Address</span>
            <span className={`mt-1.5 block font-[family-name:var(--font-courier)] text-[13px] leading-snug md:text-[14px] ${valueClass}`}>{site.address}</span>
          </div>
          <div>
            <span className={isOverlay ? labelOverlay : labelDefault}>Hours</span>
            <span className={`mt-1.5 block font-[family-name:var(--font-courier)] text-[13px] leading-snug md:text-[14px] ${valueClass}`}>{site.hours}</span>
          </div>
          <div>
            <span className={isOverlay ? labelOverlay : labelDefault}>Phone</span>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-1.5 block font-[family-name:var(--font-courier)] text-[13px] leading-snug text-accent hover:underline md:text-[14px]"
              onClick={() => analytics.phoneClick()}
            >
              {site.phone}
            </a>
          </div>
          <div>
            <span className={isOverlay ? labelOverlay : labelDefault}>Email</span>
            <a
              href={`mailto:${site.email}`}
              className="mt-1.5 block break-all font-[family-name:var(--font-courier)] text-[13px] leading-snug text-accent hover:underline md:text-[14px]"
              onClick={() => analytics.emailClick()}
            >
              {site.email}
            </a>
          </div>
        </div>

        <p className={`border-t pt-3 font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.18em] ${stripClass} ${rule}`}>
          {site.statusStrip}
        </p>

        <p className={`font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.12em] ${isOverlay ? "text-[#f5f1e8]/65" : "text-muted"}`}>
          {site.taglineBookings}
        </p>

        <nav
          aria-label="Main"
          className={`flex flex-wrap items-center gap-x-1 gap-y-2 border-t pt-3 font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.12em] md:gap-x-0 ${rule}`}
        >
          <span className={`mr-2 shrink-0 opacity-60 ${isOverlay ? "text-[#f5f1e8]" : "text-muted"}`}>Index</span>
          {mainNav.map((r, i) => (
            <span key={r.href} className="inline-flex items-center">
              {i > 0 ? <span className={`mx-2 select-none opacity-40 ${isOverlay ? "text-[#f5f1e8]" : "text-ink"}`}>·</span> : null}
              <Link href={r.href} className={navColor}>
                {r.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}
