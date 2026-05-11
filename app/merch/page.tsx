import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch",
  description: "Easey's merch — tees, caps, hot sauce.",
};

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-[family-name:var(--font-anton)] text-5xl uppercase tracking-[-0.04em] text-ink md:text-6xl">
          Merch
        </h1>
        <p className="mt-6 font-mono text-sm leading-relaxed text-muted md:text-base">
          Plug in Shopify, Square, or a simple grid when SKUs are ready. For now this route completes the nav map.
        </p>
      </div>
    </div>
  );
}
