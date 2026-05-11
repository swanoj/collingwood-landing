"use client";

import Link from "next/link";
import { analytics } from "@/lib/analytics";
import { locations } from "@/src/content/locations";

/** Placeholder URLs until venue-specific ordering is configured. */
const placeholderHref = "https://www.easeys.com.au/";

export function OrderLocationList() {
  return (
    <ul className="mx-auto grid max-w-3xl gap-4">
      {locations.map((loc) => (
        <li key={loc.slug}>
          <Link
            href={placeholderHref}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col border border-ink/15 bg-white/40 px-5 py-4 transition hover:border-accent-red md:flex-row md:items-center md:justify-between"
            onClick={() => analytics.orderClick({ location: loc.slug, provider: "placeholder" })}
          >
            <span className="font-[family-name:var(--font-anton)] text-2xl uppercase tracking-[-0.03em]">{loc.name}</span>
            <span className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-red md:mt-0">
              Order here (TBC) →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
