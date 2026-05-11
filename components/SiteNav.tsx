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
    <header className="sticky top-0 z-50 border-b border-ink/[0.08] bg-[#f4f1ea]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3.5 md:px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-anton)] text-xl uppercase tracking-[-0.04em] text-ink transition hover:text-accent-red md:text-2xl"
        >
          {"Easey\u2019s"}
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 md:gap-x-8" aria-label="Primary">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-colors md:text-[0.8rem] ${
                  active
                    ? "text-accent-red underline decoration-accent-red decoration-2 underline-offset-[10px]"
                    : "text-ink/80 hover:text-accent-red"
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
