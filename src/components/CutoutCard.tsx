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
      className="group relative flex flex-col overflow-hidden border border-faint bg-bg transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-[0.4deg] hover:shadow-[0_12px_40px_rgba(11,11,12,0.08)]"
      style={{ willChange: "transform" }}
    >
      <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-bg to-[#ebe4d9] p-6">
        <Image src={image} alt="" fill className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]" sizes="(max-width:768px) 100vw, 50vw" unoptimized={isSvg} />
      </div>
      <div className="border-t border-faint px-5 pb-6 pt-5">
        <h3 className="font-[family-name:var(--font-anton)] text-section-h2 uppercase tracking-[-0.03em]">
          {titleLine1}
          <span className="block text-accent2">{titleLine2}</span>
        </h3>
        <p className="mt-3 font-sans text-[16px] leading-relaxed text-muted md:text-[17px]">{description}</p>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 border-t border-faint pt-4">
          <p className="font-[family-name:var(--font-courier)] text-meta text-ink">{price}</p>
          {tags?.length ? <p className="font-[family-name:var(--font-courier)] text-meta text-muted">{tags.join(" · ")}</p> : null}
        </div>
      </div>
    </Link>
  );
}
