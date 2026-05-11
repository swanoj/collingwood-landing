import type { Metadata } from "next";
import { OrderLocationList } from "@/components/OrderLocationList";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Order",
  description: "Order Easey's for pickup or delivery — choose your rooftop.",
};

export default function OrderPage() {
  return (
    <>
      <PageHeader
        kicker="Pickup & delivery"
        title="Order online"
        lead="We’re wiring live ordering links per venue. For now, pick a location — your click is tracked for analytics when the real URLs land."
      />
      <Section theme="cream" className="!pt-0">
        <OrderLocationList />
        <p className="mx-auto mt-8 max-w-2xl text-center font-mono text-xs text-muted">
          Replace placeholder destination URLs with Uber Eats / DoorDash / owned checkout per venue.
        </p>
      </Section>
    </>
  );
}
