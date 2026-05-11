import type { Metadata } from "next";
import { PageChrome } from "@/components/PageChrome";
import { FunctionEnquiryForm } from "@/components/FunctionEnquiryForm";
import { Section } from "@/components/Section";
import { functionsCopy } from "@/content/functions";

export const metadata: Metadata = {
  title: "Functions",
  description: "Functions and events at Easey's — crews, carriages, rooftop chaos.",
};

export default function FunctionsPage() {
  return (
    <PageChrome>
      <Section theme="default" className="!pt-10">
        <h1 className="font-[family-name:var(--font-anton)] text-masthead uppercase">Functions</h1>
        <p className="mt-6 max-w-2xl font-sans text-[17px] leading-relaxed text-muted md:text-[18px]">{functionsCopy.intro}</p>
      </Section>

      <Section theme="default" className="!pt-8" reveal={false}>
        <div className="grid gap-6 md:grid-cols-3">
          {functionsCopy.packages.map((p) => (
            <article key={p.id} className="border border-faint bg-bg p-6">
              <h2 className="font-[family-name:var(--font-anton)] text-2xl uppercase">{p.name}</h2>
              <p className="mt-3 font-[family-name:var(--font-courier)] text-meta text-accent2">{p.price}</p>
              <p className="mt-4 font-sans text-sm text-muted">{p.blurb}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section theme="inverted" id="enquire">
        <h2 className="font-[family-name:var(--font-anton)] text-section-h2 uppercase text-bg">Enquire</h2>
        <p className="mt-4 max-w-xl font-sans text-bg/75">Dates flex, budgets flex — tell us the truth and we&apos;ll quote without the spreadsheet voice.</p>
        <div className="mt-10">
          <FunctionEnquiryForm />
        </div>
      </Section>
    </PageChrome>
  );
}
