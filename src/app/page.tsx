import Link from "next/link";
import { Button } from "@/components/Button";
import { CutoutCard } from "@/components/CutoutCard";
import { HeroHome } from "@/components/HeroHome";
import { Marquee } from "@/components/Marquee";
import { PinnedSpread } from "@/components/PinnedSpread";
import { Section } from "@/components/Section";
import { UtilityFooter } from "@/components/UtilityFooter";
import { UtilityHeader } from "@/components/UtilityHeader";
import { featuredMenuPosters } from "@/content/menu";

const spreadCards = featuredMenuPosters.slice(0, 5).map((d) => ({
  id: d.id,
  title: d.titleLine1,
  subtitle: d.titleLine2,
  image: d.image,
  href: d.href,
}));

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <HeroHome />
        <UtilityHeader variant="overlay" />
      </div>

      <Section theme="default">
        <p data-reveal className="font-[family-name:var(--font-courier)] text-meta text-muted">
          Manifesto
        </p>
        <div className="mt-6 space-y-2">
          {["BURGERS.", "BEERS.", "ROOFTOP.", "HITACHIS IN THE SKY."].map((line) => (
            <p
              key={line}
              data-reveal
              className="font-[family-name:var(--font-anton)] text-masthead uppercase tracking-[-0.03em]"
            >
              {line}
            </p>
          ))}
        </div>
        <p data-reveal className="mt-8 max-w-2xl font-sans text-[16px] leading-relaxed text-muted md:text-[18px]">
          We don&apos;t do velvet ropes — we do steel stairs, loud stereo, and flat-top smoke that follows you home. Come hungry.
          Leave louder.
        </p>
      </Section>

      <Section theme="accented" id="featured">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 data-reveal className="font-[family-name:var(--font-anton)] text-section-h2 uppercase text-ink">
            Featured posters
          </h2>
          <Link
            data-reveal
            href="/food"
            className="font-[family-name:var(--font-courier)] text-meta text-ink underline-offset-4 hover:underline"
          >
            Full food menu →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {featuredMenuPosters.map((item) => (
            <CutoutCard
              key={item.id}
              titleLine1={item.titleLine1}
              titleLine2={item.titleLine2}
              description={item.description}
              price={item.price}
              tags={item.tags}
              image={item.image}
              href={item.href}
            />
          ))}
        </div>
      </Section>

      <PinnedSpread cards={spreadCards} />

      <Section theme="inverted">
        <p data-reveal className="font-[family-name:var(--font-courier)] text-meta text-bg/50">
          Functions
        </p>
        <h2 data-reveal className="mt-4 max-w-3xl font-[family-name:var(--font-anton)] text-section-h2 uppercase text-bg">
          Birthdays, corporate tabs, and chaos-friendly rooms.
        </h2>
        <p data-reveal className="mt-6 max-w-2xl font-sans text-[16px] leading-relaxed text-bg/75 md:text-[18px]">
          Carriage energy without the HR-safe canapés. Tell us headcount and how late you&apos;re staying — we&apos;ll tell you what&apos;s possible.
        </p>
        <div data-reveal className="mt-10">
          <Button href="/functions" variant="primary" className="border-bg">
            Functions
          </Button>
        </div>
      </Section>

      <Section theme="default">
        <div className="grid gap-6 md:grid-cols-2">
          <div data-reveal className="border border-faint bg-bg p-8">
            <h3 className="font-[family-name:var(--font-anton)] text-3xl uppercase">Shop</h3>
            <p className="mt-4 font-sans text-muted">Merch, tinnies, things that smell like the flat-top. Grid (TBC).</p>
            <div className="mt-8">
              <Button href="/shop" variant="secondary">
                Shop
              </Button>
            </div>
          </div>
          <div data-reveal className="border border-faint bg-bg p-8">
            <h3 className="font-[family-name:var(--font-anton)] text-3xl uppercase">Vouchers</h3>
            <p className="mt-4 font-sans text-muted">Gift the rooftop problem to someone else.</p>
            <div className="mt-8">
              <Button href="/vouchers" variant="secondary">
                Vouchers
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Marquee />
      <UtilityFooter />
    </>
  );
}
