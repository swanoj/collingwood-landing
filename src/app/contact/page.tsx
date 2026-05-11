import type { Metadata } from "next";
import { PageChrome } from "@/components/PageChrome";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Easey's — general enquiries and love letters to the flat-top.",
};

export default function ContactPage() {
  return (
    <PageChrome>
      <Section theme="default" className="!pt-10">
        <h1 className="font-[family-name:var(--font-anton)] text-masthead uppercase">Contact</h1>
        <p className="mt-6 max-w-2xl font-sans text-muted">Lost property, media, or “can you save us a booth?” — we read everything. Eventually.</p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </Section>
    </PageChrome>
  );
}
