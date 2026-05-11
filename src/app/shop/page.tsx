import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageChrome } from "@/components/PageChrome";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Shop",
  description: "Easey's shop — merch and tinnies (coming soon).",
};

export default function ShopPage() {
  return (
    <PageChrome>
      <Section theme="default" className="!pt-10">
        <h1 className="font-[family-name:var(--font-anton)] text-masthead uppercase">Shop</h1>
        <p className="mt-6 max-w-2xl font-sans text-muted">
          Merch, tinnies, stubby coolers — the things you buy after your third Melbourne Bitter. Commerce grid (TBC).
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="https://www.easeys.com.au/" variant="primary">
            Browse (TBC)
          </Button>
          <Button href="/contact" variant="secondary">
            Stockist enquiry
          </Button>
        </div>
      </Section>
    </PageChrome>
  );
}
