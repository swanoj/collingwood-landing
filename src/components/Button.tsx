import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center px-6 py-3 text-center font-[family-name:var(--font-anton)] uppercase tracking-[0.12em] transition will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const variants: Record<Variant, string> = {
  primary:
    "border-2 border-ink bg-accent text-ink hover:-translate-y-0.5 hover:shadow-[0_4px_0_rgba(11,11,12,0.12)] active:translate-y-0",
  secondary:
    "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-bg",
  ghost: "border-2 border-transparent text-ink underline-offset-4 hover:-translate-y-0.5 hover:underline",
};

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "className" | "children">)
  | ({ href?: undefined } & ComponentProps<"button">)
);

export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`.trim();
  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={cls} {...linkRest}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
