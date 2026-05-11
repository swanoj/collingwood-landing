import Link from "next/link";
import { CutoutCard } from "@/components/CutoutCard";
import { HeroBurgerVideo } from "@/components/HeroBurgerVideo";
import { LocationCard } from "@/components/LocationCard";
import { Marquee } from "@/components/Marquee";
import { Masthead } from "@/components/Masthead";
import { MealScrollSection } from "@/components/MealScrollSection";
import { PrimaryCtas } from "@/components/PrimaryCtas";
import { Section } from "@/components/Section";
import { UtilityMeta } from "@/components/UtilityMeta";
import { functionsContent } from "@/src/content/functions";
import { locations } from "@/src/content/locations";
import { signatureDishes } from "@/src/content/menu";
import { siteMasthead, utilityDefault } from "@/src/content/site";
import { EditorialReveal } from "./EditorialReveal";
import { HeroIntro } from "./HeroIntro";
import { SpreadShowcase } from "./SpreadShowcase";

export function HomeView() {
  return (
    <>
      {/* A — Utility / CTA masthead */}
      <div className="bg-[#F4F1EA]">
        <Masthead title={siteMasthead.title} subtitle={siteMasthead.subtitle}>
          <PrimaryCtas />
          <UtilityMeta {...utilityDefault} />
        </Masthead>
      </div>

      {/* B — Hero media */}
      <Section theme="cream" className="sf-paper-noise !pt-8 md:!pt-12">
        <HeroIntro>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="relative w-full max-w-[min(100%,520px)]">
              <HeroBurgerVideo className="w-full object-contain drop-shadow-[0_20px_50px_rgb(0_0_0_/_0.08)]" blendMultiply={false} />
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/order"
                className="inline-flex min-h-11 items-center border-2 border-accent-red bg-accent-red px-8 font-[family-name:var(--font-anton)] text-lg uppercase tracking-[0.08em] text-cream hover:bg-ink"
              >
                Order online
              </Link>
              <Link
                href="/functions"
                className="inline-flex min-h-11 items-center border-2 border-ink px-8 font-[family-name:var(--font-anton)] text-lg uppercase tracking-[0.08em] text-ink hover:bg-ink hover:text-cream"
              >
                Book a function
              </Link>
            </div>
          </div>
        </HeroIntro>
      </Section>

      {/* C — Editorial */}
      <Section theme="cream">
        <EditorialReveal>
          <p data-reveal className="font-[family-name:var(--font-anton)] text-[clamp(2.2rem,7vw,4.5rem)] uppercase leading-[0.95] tracking-[-0.04em] text-ink">
            Rooftop carriages.
          </p>
          <p data-reveal className="font-[family-name:var(--font-anton)] text-[clamp(2.2rem,7vw,4.5rem)] uppercase leading-[0.95] tracking-[-0.04em] text-accent-red">
            Smash-first menu.
          </p>
          <p data-reveal className="font-[family-name:var(--font-anton)] text-[clamp(2.2rem,7vw,4.5rem)] uppercase leading-[0.95] tracking-[-0.04em] text-ink">
            Four Melbourne roofs.
          </p>
          <p data-reveal className="max-w-2xl pt-4 font-mono text-sm font-bold uppercase tracking-[0.22em] text-muted">
            COME UP. GET FED. LOOK DOWN ON THE CITY.
          </p>
        </EditorialReveal>
      </Section>

      {/* D — Proof */}
      <Section theme="ink">
        <p className="max-w-3xl font-[family-name:var(--font-anton)] text-4xl uppercase leading-tight tracking-[-0.03em] text-cream md:text-5xl">
          Made fresh on the flat-top. Served loud.
        </p>
        <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-cream/75 md:text-lg">
          No velvet ropes — just steel, steam, and burgers that photograph ugly and taste perfect. Trains optional,
          appetite mandatory.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/menu" className="border border-cream px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-cream hover:bg-cream hover:text-ink">
            Menu
          </Link>
          <Link href="/locations" className="border border-accent-red bg-accent-red px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-cream hover:bg-cream hover:text-ink">
            Locations
          </Link>
        </div>
      </Section>

      {/* E — Signature cutouts */}
      <Section theme="cream">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-[family-name:var(--font-anton)] text-5xl uppercase tracking-[-0.04em] text-ink md:text-6xl">
            Signatures
          </h2>
          <Link href="/menu" className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-red hover:underline">
            Full menu →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((d) => (
            <CutoutCard key={d.id} {...d} />
          ))}
        </div>
      </Section>

      {/* F — Spread (pin + meal video spread) */}
      <SpreadShowcase />
      <MealScrollSection />

      {/* G — Locations */}
      <Section theme="cream">
        <h2 className="font-[family-name:var(--font-anton)] text-5xl uppercase tracking-[-0.04em] text-ink md:text-6xl">
          Locations
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {locations.map((loc) => (
            <LocationCard key={loc.slug} location={loc} />
          ))}
        </div>
      </Section>

      {/* H — Functions */}
      <Section theme="charcoal">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-cream/50">{functionsContent.title}</p>
        <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-anton)] text-5xl uppercase leading-[0.95] tracking-[-0.04em] text-cream md:text-6xl">
          {functionsContent.lead}
        </h2>
        <ul className="mt-8 max-w-2xl list-disc space-y-3 pl-5 font-sans text-sm text-cream/80 md:text-base">
          {functionsContent.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={functionsContent.ctaReserve} className="border-2 border-accent-red bg-accent-red px-8 py-3 font-[family-name:var(--font-anton)] text-lg uppercase text-cream hover:bg-cream hover:text-ink">
            Reserve
          </Link>
          <Link href={functionsContent.ctaEnquire} className="border-2 border-cream px-8 py-3 font-[family-name:var(--font-anton)] text-lg uppercase text-cream hover:bg-cream hover:text-ink">
            Enquire
          </Link>
        </div>
      </Section>

      {/* I — Social marquee */}
      <Marquee />

      {/* J — Footer handled in layout */}
    </>
  );
}
