import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy — draft placeholder for Easey’s.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader kicker="Legal" title="Privacy policy" lead="Draft scaffold only — replace with counsel-approved copy before launch." />
      <Section theme="cream" className="!pt-0">
        <div className="mx-auto max-w-2xl font-sans text-sm leading-relaxed text-ink/85">
          <p>
            This site may use analytics tags (e.g. <code className="font-mono text-xs">dataLayer</code> events) and embeds for booking or ordering. A full
            schedule of processors, retention, and rights (TBC) belongs here.
          </p>
          <p className="mt-4">Contact: privacy@easeys.com.au (TBC).</p>
        </div>
      </Section>
    </>
  );
}
