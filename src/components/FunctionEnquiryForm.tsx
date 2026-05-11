"use client";

import { useState } from "react";
import { analytics } from "@/lib/analytics";

const fields = [
  { name: "name", label: "Name", type: "text" as const, required: true },
  { name: "email", label: "Email", type: "email" as const, required: true },
  { name: "phone", label: "Phone", type: "tel" as const, required: false },
  { name: "date", label: "Preferred date", type: "text" as const, required: true },
  { name: "guests", label: "Guests", type: "text" as const, required: true },
  { name: "message", label: "Message", type: "textarea" as const, required: true },
];

export function FunctionEnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    analytics.functionEnquirySubmit();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl space-y-4 border border-faint bg-bg p-6 font-[family-name:var(--font-courier)] text-sm text-ink">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="text-meta text-muted" htmlFor={`fn-${field.name}`}>
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={`fn-${field.name}`}
              name={field.name}
              required={field.required}
              rows={4}
              className="mt-2 w-full border border-faint bg-white px-3 py-2 font-sans text-base text-ink"
            />
          ) : (
            <input
              id={`fn-${field.name}`}
              name={field.name}
              required={field.required}
              type={field.type}
              className="mt-2 w-full border border-faint bg-white px-3 py-2 font-sans text-base text-ink"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full border-2 border-ink bg-accent py-3 font-[family-name:var(--font-anton)] uppercase tracking-[0.12em] text-ink transition hover:-translate-y-0.5"
      >
        Send enquiry
      </button>
      {sent ? (
        <p className="text-center text-meta text-muted">Received — we&apos;ll wire this to email soon.</p>
      ) : null}
    </form>
  );
}
