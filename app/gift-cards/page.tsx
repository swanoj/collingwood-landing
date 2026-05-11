import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Gift cards",
  description: "Give someone else the rooftop burger problem.",
};

export default function GiftCardsPage() {
  return (
    <>
      <PageHeader
        kicker="Gifts"
        title="Gift cards"
        lead="Digital or physical — same smash, someone else’s shout. Purchase flow and denominations (TBC)."
      />
      <Section theme="cream" className="!pt-0">
        <p className="mx-auto max-w-xl text-center font-sans text-base text-ink/80">
          Wire gift card provider (TBC). Until then, front-of-house at Collingwood can sort you out the old-fashioned way.
        </p>
      </Section>
    </>
  );
}
