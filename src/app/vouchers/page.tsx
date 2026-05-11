import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageChrome } from "@/components/PageChrome";
import { Section } from "@/components/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Vouchers",
  description: "Gift vouchers for Easey's — digital or in-venue (TBC).",
};

export default function VouchersPage() {
  return (
    <PageChrome>
      <Section theme="default" className="!pt-10">
        <h1 className="font-[family-name:var(--font-anton)] text-masthead uppercase">Vouchers</h1>
        <p className="mt-6 max-w-2xl font-sans text-muted">
          Give someone else the rooftop burger problem. Denominations + digital checkout plug in here once finance stops fighting.
        </p>
        <div className="mt-10">
          <Button href={site.vouchersUrl} variant="primary">
            Buy vouchers (TBC)
          </Button>
        </div>
      </Section>
    </PageChrome>
  );
}
