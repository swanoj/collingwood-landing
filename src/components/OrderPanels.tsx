"use client";

import { analytics } from "@/lib/analytics";
import { Button } from "@/components/Button";
import { site } from "@/content/site";

function trackOrder(provider: "orderonline" | "ubereats" | "doordash", mode: "pickup" | "delivery") {
  analytics.orderClick({ provider, mode });
}

export function OrderPanels() {
  const { pickupMeta, deliveryMeta, checkoutNote } = site.orderPage;

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {/* PICKUP — poster panel */}
        <div className="flex flex-col border-2 border-ink bg-bg p-8 md:p-10 lg:min-h-[28rem]">
          <p className="font-[family-name:var(--font-courier)] text-meta text-muted">Pickup</p>
          <h2 className="mt-2 font-[family-name:var(--font-anton)] text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-[-0.03em]">
            Order here
          </h2>
          <ul className="mt-8 space-y-3 font-[family-name:var(--font-courier)] text-meta text-ink/85">
            {pickupMeta.map((line) => (
              <li key={line} className="border-l-2 border-accent pl-3">
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <Button
              href={site.order.pickupUrl}
              variant="primary"
              target="_blank"
              rel="noreferrer"
              className="w-full justify-center border-2 py-4 text-base md:text-lg"
              onClick={() => trackOrder("orderonline", "pickup")}
            >
              Order pickup (order.online)
            </Button>
          </div>
        </div>

        {/* DELIVERY — poster panel + providers */}
        <div className="flex flex-col border-2 border-ink bg-[#0b0b0c] p-8 text-[#f5f1e8] md:p-10 lg:min-h-[28rem]">
          <p className="font-[family-name:var(--font-courier)] text-meta text-[#f5f1e8]/55">Delivery</p>
          <h2 className="mt-2 font-[family-name:var(--font-anton)] text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-[0.9] tracking-[-0.03em] text-[#f5f1e8]">
            To your door
          </h2>
          {deliveryMeta.map((line) => (
            <p key={line} className="mt-6 font-[family-name:var(--font-courier)] text-meta text-[#f5f1e8]/70">
              {line}
            </p>
          ))}
          <div className="mt-auto grid w-full gap-4 pt-10 sm:grid-cols-2">
            <Button
              href={site.order.deliveryUberUrl}
              variant="primary"
              target="_blank"
              rel="noreferrer"
              className="justify-center border-2 border-[#f5f1e8] bg-accent py-4 text-ink"
              onClick={() => trackOrder("ubereats", "delivery")}
            >
              Uber Eats
            </Button>
            <Button
              href={site.order.deliveryDoorDashUrl}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
              className="justify-center border-2 border-[#f5f1e8] py-4 text-[#f5f1e8] hover:bg-[#f5f1e8] hover:text-ink"
              onClick={() => trackOrder("doordash", "delivery")}
            >
              DoorDash
            </Button>
          </div>
        </div>
      </div>

      <p className="text-center font-sans text-sm leading-relaxed text-muted md:text-base">{checkoutNote}</p>
    </div>
  );
}
