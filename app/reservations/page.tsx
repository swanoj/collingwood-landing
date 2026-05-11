import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PrimaryCtas } from "@/components/PrimaryCtas";
import { Section } from "@/components/Section";
import { utilityDefault } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Book a table — carriages and rooftops fill fast on weekends.",
};

export default function ReservationsPage() {
  return (
    <>
      <PageHeader
        kicker="Book"
        title="Reservations"
        lead="Hitachi carriage, bar rail, or rooftop bench — say which roof and we’ll steer you to the right book engine (TBC embed below)."
      />
      <Section theme="cream" className="!pt-0">
        <div className="mx-auto max-w-xl rounded border border-dashed border-ink/25 bg-white/30 p-10 text-center font-mono text-sm text-muted">
          <p className="font-bold uppercase tracking-[0.2em] text-ink">Booking widget</p>
          <p className="mt-4 leading-relaxed">Drop OpenTable / SevenRooms / internal iframe here. Address & hours for default venue:</p>
          <p className="mt-6 text-left text-xs leading-relaxed">
            {utilityDefault.addressLine}
            <br />
            {utilityDefault.hoursLine}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <PrimaryCtas orderAnalyticsProvider="reservations_page" />
        </div>
        <p className="mx-auto mt-10 max-w-lg text-center font-sans text-sm text-ink/75">
          Big group?{" "}
          <Link href="/functions" className="font-bold text-accent-red underline-offset-4 hover:underline">
            Functions
          </Link>{" "}
          is the lane for minimum spends and room hire.
        </p>
      </Section>
    </>
  );
}
