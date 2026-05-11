import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bookings",
  description: "Book the train or a room at Easey's.",
};

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-[family-name:var(--font-anton)] text-5xl uppercase tracking-[-0.04em] text-ink md:text-6xl">
          Bookings
        </h1>
        <p className="mt-6 font-mono text-sm leading-relaxed text-muted md:text-base">
          Wire your real widget here (ResDiary, SevenRooms, etc.). This page is a shell so navigation and IA match the
          Collingwood masterplan.
        </p>
        <Link
          href="/train"
          className="mt-10 inline-flex font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent-red underline decoration-accent-red underline-offset-4 hover:text-ink"
        >
          Read spaces →
        </Link>
      </div>
    </div>
  );
}
