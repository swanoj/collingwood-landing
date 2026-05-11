"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/train", label: "Train" },
  { href: "/bookings", label: "Bookings" },
  { href: "/merch", label: "Merch" },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-[#f4f1ea]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-anton)] text-xl uppercase tracking-[-0.04em] text-ink transition hover:text-accent-red md:text-2xl"
        >
          {"Easey\u2019s"}
        </Link>
        <nav className="flex items-center gap-6 md:gap-10" aria-label="Primary">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-mono text-xs font-bold uppercase tracking-[0.2em] transition-colors md:text-sm ${
                  active
                    ? "text-accent-red line-through decoration-accent-red decoration-2"
                    : "text-ink hover:text-accent-red"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
