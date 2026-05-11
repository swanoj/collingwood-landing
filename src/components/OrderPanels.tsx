"use client";

import { analytics } from "@/lib/analytics";
import { site } from "@/content/site";

export function OrderPanels() {
  return (
    <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
      <a
        href={site.order.pickupUrl}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col border-2 border-ink bg-bg p-8 transition hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(11,11,12,0.12)]"
        onClick={() => analytics.orderClick({ provider: "pickup", mode: "pickup" })}
      >
        <span className="font-[family-name:var(--font-anton)] text-section-h2 uppercase">Pickup</span>
        <span className="mt-4 font-sans text-muted">order.online placeholder — swap URL in src/content/site.ts</span>
        <span className="mt-8 font-[family-name:var(--font-courier)] text-meta text-accent2">Open link →</span>
      </a>
      <div className="grid gap-4">
        <a
          href={site.order.deliveryUberUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col border-2 border-ink bg-accent p-6 transition hover:-translate-y-1"
          onClick={() => analytics.orderClick({ provider: "ubereats", mode: "delivery" })}
        >
          <span className="font-[family-name:var(--font-anton)] text-2xl uppercase">Uber Eats</span>
          <span className="mt-2 font-[family-name:var(--font-courier)] text-meta text-ink/80">Delivery (TBC)</span>
        </a>
        <a
          href={site.order.deliveryDoorDashUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col border-2 border-ink bg-bg p-6 transition hover:-translate-y-1"
          onClick={() => analytics.orderClick({ provider: "doordash", mode: "delivery" })}
        >
          <span className="font-[family-name:var(--font-anton)] text-2xl uppercase">DoorDash</span>
          <span className="mt-2 font-[family-name:var(--font-courier)] text-meta text-muted">Delivery (TBC)</span>
        </a>
      </div>
    </div>
  );
}
