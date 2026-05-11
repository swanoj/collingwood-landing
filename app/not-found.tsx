import Link from "next/link";
import { PrimaryCtas } from "@/components/PrimaryCtas";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section theme="charcoal" className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-cream/50">404</p>
      <h1 className="mt-4 max-w-lg font-[family-name:var(--font-anton)] text-[clamp(2.5rem,8vw,4rem)] uppercase leading-[0.95] tracking-[-0.04em] text-cream">
        This carriage isn’t on the map
      </h1>
      <p className="mt-6 max-w-md font-sans text-sm text-cream/70">
        Dead link, moved menu, or someone nicked the URL. Head home or order something while you’re here.
      </p>
      <div className="mt-10 flex flex-col items-center gap-6">
        <PrimaryCtas variant="onDark" orderAnalyticsProvider="404" />
        <Link href="/" className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-red hover:underline">
          ← Back home
        </Link>
      </div>
    </Section>
  );
}
