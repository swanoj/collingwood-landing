import type { Metadata } from "next";
import { PageChrome } from "@/components/PageChrome";
import { OrderPanels } from "@/components/OrderPanels";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Order",
  description: "Pickup and delivery — order online with Easey's partners.",
};

export default function OrderPage() {
  return (
    <PageChrome>
      <Section theme="default" className="!pt-10 md:!pt-14">
        <div className="border-b-2 border-ink pb-10">
          <h1 className="font-[family-name:var(--font-anton)] text-masthead uppercase tracking-[-0.03em]">Order</h1>
          <p className="mt-4 font-[family-name:var(--font-courier)] text-meta text-muted md:text-[13px]">
            Pickup / Delivery
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <OrderPanels />
        </div>
      </Section>
    </PageChrome>
  );
}
