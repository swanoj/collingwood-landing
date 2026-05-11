import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description: "Hitachi carriages, smash burgers, and Melbourne rooftops — the short version.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="Story"
        title="Way above street level"
        lead="Easey’s started as a stunt that stuck: burgers cooked inside retired train carriages parked on a Collingwood roof. The stunt became a ritual — late shifts, loud stereo, Red Stripe in the fridge."
      />
      <Section theme="cream" className="!pt-0">
        <div className="mx-auto max-w-2xl space-y-6 font-sans text-base leading-relaxed text-ink/85 md:text-lg">
          <p>
            We care about flat-top discipline more than tablecloths. Multiple roofs now carry the same attitude — different postcodes, same smoke off the grill.
          </p>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent-red">
            Come up. Get fed. Look down on the city.
          </p>
          <p>Timeline, press kit, and founder quotes (TBC) — this block is ready for a longer editorial pass when you have signed-off history.</p>
        </div>
      </Section>
    </>
  );
}
