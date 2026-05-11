"use client";

import Link from "next/link";
import { analytics } from "@/lib/analytics";
import { Button } from "@/components/Button";
import { mainNav } from "@/content/routes";
import { site } from "@/content/site";

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

        <div className="grid gap-4 border-t border-white/15 pt-8 font-[family-name:var(--font-courier)] text-meta text-bg/70 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="block text-bg/45">Address</span>
            <span className="mt-1 block font-bold normal-case tracking-normal text-[0.8rem] leading-snug text-bg">{site.address}</span>
          </div>
          <div>
            <span className="block text-bg/45">Hours</span>
            <span className="mt-1 block font-bold normal-case tracking-normal text-[0.8rem] leading-snug text-bg">{site.hours}</span>
          </div>
          <div>
            <span className="block text-bg/45">Phone</span>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-1 block font-bold normal-case tracking-normal text-[0.8rem] text-accent hover:underline"
              onClick={() => analytics.phoneClick()}
            >
              {site.phone}
            </a>
          </div>
          <div>
            <span className="block text-bg/45">Email</span>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block break-all font-bold normal-case tracking-normal text-[0.8rem] text-accent hover:underline"
              onClick={() => analytics.emailClick()}
            >
              {site.email}
            </a>
          </div>
        </div>

        <p className="font-[family-name:var(--font-courier)] text-meta text-bg/60">{site.taglineBookings}</p>

        <div className="grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-courier)] text-meta text-bg/45">Sitemap</p>
            <ul className="mt-3 space-y-2 font-[family-name:var(--font-courier)] text-sm text-bg/85">
              {mainNav.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="hover:text-accent">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-[family-name:var(--font-courier)] text-meta text-bg/45">Social</p>
            <ul className="mt-3 space-y-2 font-[family-name:var(--font-courier)] text-sm">
              <li>
                <a href={site.social.instagram} className="text-bg/85 hover:text-accent" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.social.facebook} className="text-bg/85 hover:text-accent" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-[family-name:var(--font-courier)] text-meta text-bg/45">Colophon</p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-bg/65">
              Rooftop train. Flat-top smoke. Melbourne. Swap anything marked (TBC) when the real numbers land.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
