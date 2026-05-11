import Link from "next/link";
import { social } from "@/src/content/social";

type Props = {
  text?: string;
};

export function Marquee({ text }: Props) {
  const line = text ?? `FOLLOW US — ${social.handle.toUpperCase()} — `;
  const repeated = Array(10).fill(line).join("");

  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-4 text-cream">
      <div className="easeys-marquee flex w-max whitespace-nowrap font-mono text-xs font-bold uppercase tracking-[0.35em]">
        <span className="pr-16">{repeated}</span>
        <span className="pr-16" aria-hidden>
          {repeated}
        </span>
      </div>
      <p className="mt-3 text-center font-mono text-[0.65rem] text-cream/60">
        <Link href={social.instagram} className="underline decoration-cream/40 underline-offset-4 hover:text-accent-red" target="_blank" rel="noreferrer">
          Instagram
        </Link>
        {" · "}
        <Link href={social.tiktok} className="underline decoration-cream/40 underline-offset-4 hover:text-accent-red" target="_blank" rel="noreferrer">
          TikTok
        </Link>
      </p>
    </div>
  );
}
