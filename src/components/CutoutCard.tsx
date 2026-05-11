"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  titleLine1: string;
  titleLine2: string;
  description: string;
  price: string;
  tags?: string[];
  image: string;
  href: string;
};

export function CutoutCard({ titleLine1, titleLine2, description, price, tags, image, href }: Props) {
  const isSvg = image.endsWith(".svg");

  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden border-2 border-ink/15 bg-bg transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-[0.35deg] hover:shadow-[0_14px_0_rgb(11_11_12_/0.12)]"
      style={{ willChange: "transform" }}
    >
      <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-bg to-[#ebe4d9] p-6">
        <Image src={image} alt="" fill className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]" sizes="(max-width:768px) 100vw, 50vw" unoptimized={isSvg} />
      </div>
      <div className="flex flex-1 flex-col border-t-2 border-ink/10 px-5 pb-0 pt-5">
        <h3 className="font-[family-name:var(--font-anton)] text-[clamp(1.85rem,4.5vw,3.25rem)] uppercase leading-[0.9] tracking-[-0.03em]">
          {titleLine1}
          <span className="block text-accent2">{titleLine2}</span>
        </h3>
        <p className="mt-3 line-clamp-2 font-sans text-[15px] leading-snug text-muted md:line-clamp-1 md:text-[16px]">{description}</p>
        <div className="mt-auto border-t-2 border-ink/10 bg-[#f0ebe2] px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-[family-name:var(--font-courier)] text-[12px] uppercase tracking-[0.1em] text-ink">{price}</span>
            {tags?.length ? (
              <div className="flex flex-wrap justify-end gap-1.5">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="border border-ink/20 bg-bg px-2 py-0.5 font-[family-name:var(--font-courier)] text-[10px] uppercase tracking-[0.14em] text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
