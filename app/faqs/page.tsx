import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { faqs } from "@/src/content/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Booking, dietaries, functions — quick answers.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHeader kicker="Help" title="FAQs" lead="Short answers while the full knowledge base is still on a sticky note in the office." />
      <Section theme="cream" className="!pt-0">
        <dl className="mx-auto max-w-2xl space-y-10">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-[family-name:var(--font-anton)] text-xl uppercase tracking-[-0.02em] md:text-2xl">{f.q}</dt>
              <dd className="mt-3 font-sans text-base leading-relaxed text-ink/85">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
