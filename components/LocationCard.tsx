"use client";

import Link from "next/link";
import { analytics } from "@/lib/analytics";
import type { Location } from "@/src/content/locations";

type Props = {
  location: Location;
};

export function LocationCard({ location }: Props) {
  return (
    <article className="flex flex-col border border-ink/10 bg-cream p-6 transition hover:border-accent-red/50">
      <h3 className="font-[family-name:var(--font-anton)] text-3xl uppercase tracking-[-0.03em] text-ink">
        {location.name}
      </h3>
      <p className="mt-2 font-sans text-sm text-muted">{location.hook}</p>
      <p className="mt-4 font-mono text-xs leading-relaxed text-ink/80">{location.address}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/order"
          className="inline-flex border border-ink px-4 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-ink hover:bg-ink hover:text-cream"
          onClick={() => analytics.orderClick({ location: location.slug, provider: "location_card" })}
        >
          {location.orderCta}
        </Link>
        <Link
          href={location.detailHref}
          className="inline-flex border border-accent-red bg-accent-red px-4 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-cream hover:bg-ink"
        >
          Details
        </Link>
      </div>
    </article>
  );
}
