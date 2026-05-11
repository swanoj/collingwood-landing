"use client";

import Link from "next/link";
import { analytics } from "@/lib/analytics";

type Props = {
  addressLine: string;
  hoursLine: string;
  phone: string;
  email: string;
  multiLocationHint: string;
  locationsHref?: string;
  /** `dark` = cream text on near-black panels (e.g. footer). */
  variant?: "light" | "dark";
};

export function UtilityMeta({
  addressLine,
  hoursLine,
  phone,
  email,
  multiLocationHint,
  locationsHref = "/locations",
  variant = "light",
}: Props) {
  const panel =
    variant === "dark"
      ? "border border-white/15 bg-white/[0.04] text-cream/80"
      : "border border-ink/10 bg-ink/[0.02] text-muted";

  const label = variant === "dark" ? "text-cream/90" : "text-ink";
  const bodyMuted = variant === "dark" ? "text-cream/75" : "";
  const hint = variant === "dark" ? "text-cream/85" : "text-ink/90";

  return (
    <div
      className={`mx-auto grid max-w-4xl gap-4 px-4 py-6 text-left font-mono text-xs leading-relaxed md:grid-cols-2 md:gap-6 md:px-6 md:text-sm ${panel}`}
    >
      <div>
        <p className={`font-bold uppercase tracking-[0.2em] ${label}`}>Address</p>
        <p className={`mt-1 ${bodyMuted}`}>{addressLine}</p>
      </div>
      <div>
        <p className={`font-bold uppercase tracking-[0.2em] ${label}`}>Hours</p>
        <p className={`mt-1 ${bodyMuted}`}>{hoursLine}</p>
      </div>
      <div>
        <p className={`font-bold uppercase tracking-[0.2em] ${label}`}>Phone</p>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="mt-1 block text-accent-red hover:underline"
          onClick={() => analytics.phoneClick()}
        >
          {phone}
        </a>
      </div>
      <div>
        <p className={`font-bold uppercase tracking-[0.2em] ${label}`}>Email</p>
        <a
          href={`mailto:${email}`}
          className="mt-1 block text-accent-red hover:underline"
          onClick={() => analytics.emailClick()}
        >
          {email}
        </a>
      </div>
      <div className="md:col-span-2">
        <p className={hint}>{multiLocationHint}</p>
        <Link href={locationsHref} className="mt-2 inline-block font-bold uppercase tracking-[0.15em] text-accent-red hover:underline">
          All locations →
        </Link>
      </div>
    </div>
  );
}
