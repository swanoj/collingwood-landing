import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use — draft placeholder for Easey’s.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader kicker="Legal" title="Terms of use" lead="Draft scaffold — not binding until replaced by your lawyers." />
      <Section theme="cream" className="!pt-0">
        <div className="mx-auto max-w-2xl font-sans text-sm leading-relaxed text-ink/85">
          <p>
            By using this website you agree to venue rules, responsible service of alcohol, and not claiming you invented the smash burger. Full terms (TBC):
            liability, ticketing, gift cards, and third-party ordering links.
          </p>
        </div>
      </Section>
    </>
  );
}
