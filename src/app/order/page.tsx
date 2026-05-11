import type { Metadata } from "next";
import { PageChrome } from "@/components/PageChrome";
import { OrderPanels } from "@/components/OrderPanels";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Order",
  description: "Pickup and delivery — outbound links to order providers.",
};

export default function OrderPage() {
  return (
    <PageChrome>
      <Section theme="default" className="!pt-10">
        <h1 className="font-[family-name:var(--font-anton)] text-masthead uppercase">Order now</h1>
        <p className="mt-6 max-w-2xl font-sans text-[16px] text-muted md:text-[18px]">
          Pick a lane. Every outbound tap fires <code className="font-mono text-sm">order_click</code> with provider + mode for your tag manager.
        </p>
        <div className="mt-12">
          <OrderPanels />
        </div>
      </Section>
    </PageChrome>
  );
}
