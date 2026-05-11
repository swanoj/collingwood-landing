import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Careers",
  description: "Work at Easey’s — grills, bars, and rooftops.",
};

const roles = [
  { title: "Grill / line", note: "Night owls preferred. Experience on a busy flat-top helps." },
  { title: "Bar / floor", note: "Fast feet, thick skin, good chat." },
  { title: "Functions & events", note: "Corporate lunches that refuse to behave." },
] as const;

export default function CareersPage() {
  return (
    <>
      <PageHeader
        kicker="Join us"
        title="Careers"
        lead="We hire for attitude and train for speed. If you like steam, steel, and customers who photograph their food before eating it, you’ll fit."
      />
      <Section theme="cream" className="!pt-0">
        <ul className="mx-auto max-w-2xl space-y-6">
          {roles.map((r) => (
            <li key={r.title} className="border-b border-ink/10 pb-6">
              <h2 className="font-[family-name:var(--font-anton)] text-2xl uppercase tracking-[-0.03em]">{r.title}</h2>
              <p className="mt-2 font-sans text-sm text-ink/80 md:text-base">{r.note}</p>
              <p className="mt-2 font-mono text-xs text-muted">Apply URL / HR inbox (TBC)</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-xl text-center font-sans text-sm text-ink/75">
          Send a note via{" "}
          <Link href="/contact" className="font-bold text-accent-red hover:underline">
            Contact
          </Link>{" "}
          with CV attached until the ATS link is live.
        </p>
      </Section>
    </>
  );
}
