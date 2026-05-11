import type { Metadata } from "next";
import { PageChrome } from "@/components/PageChrome";
import { Section } from "@/components/Section";
import { reservationTips } from "@/content/faqs";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Book a table at Easey's — rooftop train carriage Collingwood.",
};

export default function ReservationsPage() {
  return (
    <PageChrome>
      <Section theme="default" className="!pt-10">
        <h1 className="font-[family-name:var(--font-anton)] text-masthead uppercase">Reservations</h1>
        <p className="mt-6 max-w-2xl font-sans text-muted">
          Drop your booking widget (SevenRooms / OpenTable / internal) into this shell — URL in <code className="font-mono text-xs">site.reservationsEmbedUrl</code>{" "}
          when ready.
        </p>
        <div className="mt-10 rounded border border-dashed border-faint bg-white/40 p-10 text-center font-[family-name:var(--font-courier)] text-sm text-muted">
          {site.reservationsEmbedUrl ? (
            <iframe title="Reservations" src={site.reservationsEmbedUrl} className="min-h-[480px] w-full border-0" />
          ) : (
            <p>Booking embed placeholder (TBC)</p>
          )}
        </div>
      </Section>

      <Section theme="accented" reveal={false}>
        <h2 className="font-[family-name:var(--font-anton)] text-2xl uppercase text-ink">Good to know</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 font-sans text-ink/85">
          {reservationTips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Section>
    </PageChrome>
  );
}
