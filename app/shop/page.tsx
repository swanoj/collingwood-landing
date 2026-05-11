import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Shop",
  description: "Easey's merch — tees, caps, and things that smell like the flat-top (TBC).",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        kicker="Merch"
        title="Shop"
        lead="Caps, tees, stubby coolers — the usual rooftop souvenirs. Product grid and checkout plug-in marked (TBC)."
      />
      <Section theme="cream" className="!pt-0">
        <div className="mx-auto max-w-2xl border border-ink/10 bg-white/40 p-8 text-center font-mono text-sm text-muted">
          Connect Shopify / Swell / static grid — placeholder block until SKU photography lands.
        </div>
      </Section>
    </>
  );
}
