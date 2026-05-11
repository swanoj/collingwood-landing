"use client";

import { useState } from "react";
import { analytics } from "@/lib/analytics";

type Props = {
  context?: string;
};

export function EnquiryForm({ context = "general" }: Props) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    analytics.functionEnquirySubmit();
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl space-y-4 border border-ink/10 bg-cream p-6 font-mono text-sm">
      <input type="hidden" name="context" value={context} readOnly />
      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.2em] text-muted">Name</label>
        <input required name="name" className="mt-1 w-full border border-ink/20 bg-white px-3 py-2 text-ink" />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.2em] text-muted">Email</label>
        <input required type="email" name="email" className="mt-1 w-full border border-ink/20 bg-white px-3 py-2 text-ink" />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.2em] text-muted">Message</label>
        <textarea required name="message" rows={4} className="mt-1 w-full border border-ink/20 bg-white px-3 py-2 text-ink" />
      </div>
      <button
        type="submit"
        className="w-full border-2 border-ink bg-ink py-3 font-[family-name:var(--font-anton)] text-lg uppercase tracking-[0.1em] text-cream transition hover:bg-accent-red"
      >
        Send enquiry
      </button>
      {status === "sent" ? (
        <p className="text-center text-xs text-muted">Logged for analytics — wire to email/CRM when ready.</p>
      ) : null}
    </form>
  );
}
