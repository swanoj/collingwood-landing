import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { utilityDefault } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Easey’s — general enquiries, lost property, and love letters to the flat-top.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Hello"
        title="Contact"
        lead="General enquiries, media, or “can you save us a carriage?” — use the form. Urgent service stuff: call the venue."
      />
      <Section theme="cream" className="!pt-0">
        <div className="mx-auto mb-10 max-w-md text-center font-mono text-sm text-muted">
          <p>{utilityDefault.phone}</p>
          <p className="mt-1">{utilityDefault.email}</p>
        </div>
        <div className="mx-auto max-w-xl">
          <EnquiryForm context="contact" />
        </div>
      </Section>
    </>
  );
}
