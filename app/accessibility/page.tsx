import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility statement for easeys.com.au (draft).",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title="Accessibility"
        lead="We aim for WCAG 2.2 AA where practical. Rooftop venues have physical constraints — this page should document both digital and venue access (TBC)."
      />
      <Section theme="cream" className="!pt-0">
        <div className="mx-auto max-w-2xl space-y-4 font-sans text-sm leading-relaxed text-ink/85">
          <p>Known gaps on this draft build: reduced-motion preferences are partially respected for GSAP sections; some contrast pairs may need audit.</p>
          <p>
            Feedback:{" "}
            <a href="mailto:hello@easeys.com.au" className="text-accent-red underline">
              hello@easeys.com.au
            </a>{" "}
            (TBC dedicated inbox).
          </p>
        </div>
      </Section>
    </>
  );
}
