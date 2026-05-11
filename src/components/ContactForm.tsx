"use client";

import { useState } from "react";
import { analytics } from "@/lib/analytics";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    analytics.contactSubmit();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl space-y-4 border border-faint bg-bg p-6 font-[family-name:var(--font-courier)] text-sm">
      <div>
        <label className="text-meta text-muted" htmlFor="c-name">
          Name
        </label>
        <input id="c-name" name="name" required className="mt-2 w-full border border-faint bg-white px-3 py-2 font-sans text-base" />
      </div>
      <div>
        <label className="text-meta text-muted" htmlFor="c-email">
          Email
        </label>
        <input id="c-email" name="email" type="email" required className="mt-2 w-full border border-faint bg-white px-3 py-2 font-sans text-base" />
      </div>
      <div>
        <label className="text-meta text-muted" htmlFor="c-phone">
          Phone
        </label>
        <input id="c-phone" name="phone" className="mt-2 w-full border border-faint bg-white px-3 py-2 font-sans text-base" />
      </div>
      <div>
        <label className="text-meta text-muted" htmlFor="c-message">
          Message
        </label>
        <textarea id="c-message" name="message" required rows={4} className="mt-2 w-full border border-faint bg-white px-3 py-2 font-sans text-base" />
      </div>
      <button
        type="submit"
        className="w-full border-2 border-ink bg-ink py-3 font-[family-name:var(--font-anton)] uppercase tracking-[0.12em] text-bg transition hover:bg-accent2 hover:text-bg"
      >
        Send
      </button>
      {sent ? <p className="text-center text-meta text-muted">Thanks — we&apos;ll get back to you.</p> : null}
    </form>
  );
}
