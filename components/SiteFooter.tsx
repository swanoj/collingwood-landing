import Link from "next/link";
import { PrimaryCtas } from "@/components/PrimaryCtas";
import { UtilityMeta } from "@/components/UtilityMeta";
import { utilityDefault } from "@/src/content/site";

const col = [
  { title: "Eat", links: ["/menu", "/order", "/gift-cards"] },
  { title: "Visit", links: ["/locations", "/reservations", "/functions"] },
  { title: "Brand", links: ["/about", "/shop", "/careers", "/contact", "/faqs"] },
  { title: "Legal", links: ["/privacy", "/terms", "/accessibility"] },
] as const;

const labels: Record<string, string> = {
  "/menu": "Menu",
  "/order": "Order",
  "/gift-cards": "Gift cards",
  "/locations": "Locations",
  "/reservations": "Reservations",
  "/functions": "Functions",
  "/about": "About",
  "/shop": "Shop",
  "/careers": "Careers",
  "/contact": "Contact",
  "/faqs": "FAQs",
  "/privacy": "Privacy",
  "/terms": "Terms",
  "/accessibility": "Accessibility",
};

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/15 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <p className="text-center font-[family-name:var(--font-anton)] text-[clamp(2.2rem,10vw,6rem)] font-normal uppercase leading-[0.85] tracking-[-0.05em]">
          WAY ABOVE
          <span className="block text-accent-red">STREET LEVEL</span>
        </p>

        <div className="mx-auto mt-10 max-w-xl">
          <PrimaryCtas variant="onDark" orderAnalyticsProvider="footer" />
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <UtilityMeta {...utilityDefault} variant="dark" />
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {col.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cream/50">{c.title}</p>
              <ul className="mt-4 space-y-2 font-mono text-sm">
                {c.links.map((href) => (
                  <li key={href}>
                    <Link href={href} className="text-cream/85 hover:text-accent-red hover:underline">
                      {labels[href]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="pb-8 text-center font-mono text-[0.6rem] uppercase tracking-[0.25em] text-cream/40">
        © {new Date().getFullYear()} Easey&apos;s — draft site structure. Replace placeholders marked (TBC) with live data.
      </p>
    </footer>
  );
}
