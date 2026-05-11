import Link from "next/link";

const ORDER_HREF =
  "https://order.online/store/easeys-collingwood-708557/";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/15 bg-ink text-cream">
      <div className="pointer-events-none select-none px-4 py-10 md:py-14">
        <p className="text-center font-[family-name:var(--font-anton)] text-[clamp(2.5rem,12vw,7rem)] font-normal uppercase leading-[0.85] tracking-[-0.05em] text-cream/95">
          WAY ABOVE
          <span className="block text-accent-red">STREET LEVEL</span>
        </p>
      </div>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 border-t border-white/10 px-4 py-10 text-center font-mono text-sm text-cream/80 md:flex-row md:justify-between md:text-left">
        <p className="max-w-md leading-relaxed">
          Burgers · beers · rooftop train energy. Pickup &amp; delivery where available.
        </p>
        <Link
          href={ORDER_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center border border-cream/40 px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-cream transition hover:border-accent-red hover:text-accent-red"
        >
          Order online
        </Link>
      </div>
      <p className="pb-8 text-center font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/45">
        Collingwood rooftop train energy — tune copy and legal to your venue rollout.
      </p>
    </footer>
  );
}
