import Link from "next/link";
import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { functionsContent } from "@/src/content/functions";

export const metadata: Metadata = {
  title: "Functions",
  description: "Train carriages, rooftop rooms, and burgers for crews who skip the canapés.",
};

export default function FunctionsPage() {
  return (
    <>
      <PageHeader kicker="Events" title={functionsContent.title} lead={functionsContent.lead} />
      <Section theme="cream" className="!pt-0">
        <ul className="mx-auto max-w-2xl list-disc space-y-3 pl-5 text-base text-ink/85">
          {functionsContent.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap gap-4">
          <Link
            href={functionsContent.ctaReserve}
            className="border-2 border-ink bg-ink px-8 py-3 font-[family-name:var(--font-anton)] text-lg uppercase tracking-[0.08em] text-cream hover:bg-accent-red"
          >
            Check dates
          </Link>
          <Link
            href="#enquire"
            className="border-2 border-accent-red bg-accent-red px-8 py-3 font-[family-name:var(--font-anton)] text-lg uppercase tracking-[0.08em] text-cream hover:bg-ink"
          >
            Enquire
          </Link>
        </div>
      </Section>
      <Section theme="ink" id="enquire">
        <h2 className="text-center font-[family-name:var(--font-anton)] text-3xl uppercase tracking-[-0.03em] text-cream md:text-4xl">
          Function enquiry
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center font-sans text-sm text-cream/75">
          Tell us headcount, date range, and how loud you plan to get. This form logs to <code className="font-mono text-xs">dataLayer</code> only — wire to CRM when ready.
        </p>
        <div className="mx-auto mt-10 max-w-xl">
          <EnquiryForm context="functions" />
        </div>
      </Section>
    </>
  );
}
