"use client";

import Link from "next/link";
import { analytics } from "@/lib/analytics";
import { Button } from "@/components/Button";
import { mainNav } from "@/content/routes";
import { site } from "@/content/site";

const labelClass = "block text-[11px] font-[family-name:var(--font-courier)] uppercase tracking-[0.14em] text-bg/50";

export function UtilityFooter() {
  return (
    <footer className="border-t border-faint bg-ink text-bg">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-14 md:px-6 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="font-[family-name:var(--font-anton)] text-masthead uppercase text-bg">Easey&apos;s</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/order" variant="primary" className="text-sm">
              Order now
            </Button>
            <Button
              href="/reservations"
              variant="secondary"
              className="border-bg text-bg hover:bg-bg hover:text-ink text-sm"
            >
              Reservations
            </Button>
          </div>
        </div>

        <div className="grid gap-x-6 gap-y-4 border-t border-white/12 pt-8 font-[family-name:var(--font-courier)] sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className={labelClass}>Address</span>
            <span className="mt-1.5 block text-[13px] leading-snug text-bg md:text-[14px]">{site.address}</span>
          </div>
          <div>
            <span className={labelClass}>Hours</span>
            <span className="mt-1.5 block text-[13px] leading-snug text-bg md:text-[14px]">{site.hours}</span>
          </div>
          <div>
            <span className={labelClass}>Phone</span>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-1.5 block text-[13px] leading-snug text-accent hover:underline md:text-[14px]"
              onClick={() => analytics.phoneClick()}
            >
              {site.phone}
            </a>
          </div>
          <div>
            <span className={labelClass}>Email</span>
            <a
              href={`mailto:${site.email}`}
              className="mt-1.5 block break-all text-[13px] leading-snug text-accent hover:underline md:text-[14px]"
              onClick={() => analytics.emailClick()}
            >
              {site.email}
            </a>
          </div>
        </div>

        <p className="border-t border-white/12 pt-3 font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.18em] text-bg/55">
          {site.statusStrip}
        </p>

        <p className="font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.12em] text-bg/55">{site.taglineBookings}</p>

        <div className="grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.14em] text-bg/45">Sitemap</p>
            <ul className="mt-3 space-y-2 font-[family-name:var(--font-courier)] text-sm text-bg/85">
              {mainNav.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="underline-offset-4 hover:text-accent hover:underline">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.14em] text-bg/45">Social</p>
            <ul className="mt-3 space-y-2 font-[family-name:var(--font-courier)] text-sm">
              <li>
                <a href={site.social.instagram} className="text-bg/85 underline-offset-4 hover:text-accent hover:underline" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.social.facebook} className="text-bg/85 underline-offset-4 hover:text-accent hover:underline" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.14em] text-bg/45">Colophon</p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-bg/65">
              Rooftop train. Flat-top smoke. Melbourne. Swap anything marked (TBC) when the real numbers land.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
