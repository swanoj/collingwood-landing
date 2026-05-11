import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { PrimaryCtas } from "@/components/PrimaryCtas";
import { Section } from "@/components/Section";
import { getLocation, locations } from "@/src/content/locations";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return { title: "Location" };
  return {
    title: loc.name,
    description: `${loc.hook} ${loc.address}`,
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  return (
    <>
      <PageHeader kicker="Easey’s" title={loc.name} lead={loc.hook} />
      <Section theme="cream" className="!pt-0">
        <div className="mx-auto max-w-2xl space-y-6 font-mono text-sm">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted">Address</p>
            <p className="mt-2 text-base">{loc.address}</p>
          </div>
          <p className="text-ink/80">
            Ordering URL, carriage availability, and trading exceptions for this roof are marked (TBC) — drop through Reservations if you need a human.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/order"
              className="border-2 border-accent-red bg-accent-red px-6 py-3 font-[family-name:var(--font-anton)] text-sm uppercase tracking-[0.08em] text-cream hover:bg-ink"
            >
              {loc.orderCta}
            </Link>
            <Link
              href="/reservations"
              className="border-2 border-ink px-6 py-3 font-[family-name:var(--font-anton)] text-sm uppercase tracking-[0.08em] text-ink hover:bg-ink hover:text-cream"
            >
              Reserve
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <PrimaryCtas orderAnalyticsProvider={`location_${loc.slug}`} />
        </div>
        <p className="mx-auto mt-10 text-center">
          <Link href="/locations" className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-red hover:underline">
            ← All locations
          </Link>
        </p>
      </Section>
    </>
  );
}
