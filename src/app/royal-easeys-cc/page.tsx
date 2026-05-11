import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageChrome } from "@/components/PageChrome";
import { Section } from "@/components/Section";
import { royalCcCopy } from "@/content/royalCc";

export const metadata: Metadata = {
  title: "Royal Easey's CC",
  description: "Royal Easey's CC — membership nod for regulars and loud shirts.",
};

export default function RoyalCcPage() {
  return (
    <PageChrome>
      <Section theme="default" className="!pt-10">
        <h1 className="font-[family-name:var(--font-anton)] text-[clamp(2.5rem,7vw,5rem)] uppercase leading-[0.9] tracking-[-0.03em]">
          {royalCcCopy.title}
        </h1>
        <p className="mt-8 max-w-2xl font-sans text-[17px] leading-relaxed text-muted md:text-[18px]">{royalCcCopy.lead}</p>
        {royalCcCopy.body.map((p) => (
          <p key={p} className="mt-6 max-w-2xl font-sans text-muted">
            {p}
          </p>
        ))}
        <div className="mt-10 flex flex-col gap-4">
          <Button href="/contact" variant="primary">
            {royalCcCopy.ctaPrimary}
          </Button>
          <p className="font-[family-name:var(--font-courier)] text-meta text-muted">{royalCcCopy.ctaNote}</p>
        </div>
      </Section>
    </PageChrome>
  );
}
