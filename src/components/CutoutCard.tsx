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
      className="group flex h-full min-h-0 flex-col overflow-hidden border-2 border-ink/15 bg-bg transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-[0.35deg] hover:shadow-[0_14px_0_rgb(11_11_12_/0.12)]"
      style={{ willChange: "transform" }}
    >
      {/* Fixed visual weight for image band so grid rows stay even */}
      <div className="relative aspect-[4/3] min-h-[11.5rem] w-full shrink-0 bg-gradient-to-b from-bg to-[#ebe4d9] p-5 sm:min-h-[12.5rem] sm:p-6">
        <Image
          src={image}
          alt=""
          fill
          className="object-contain object-center p-3 transition duration-500 group-hover:scale-[1.03] sm:p-4"
          sizes="(max-width:768px) 100vw, 50vw"
          unoptimized={isSvg}
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col border-t-2 border-ink/10 px-4 pb-0 pt-4 sm:px-5 sm:pt-5">
        <h3 className="text-balance font-[family-name:var(--font-anton)] text-[clamp(1.65rem,4.2vw,3.1rem)] uppercase leading-[0.92] tracking-[-0.03em]">
          <span className="block [overflow-wrap:anywhere]">{titleLine1}</span>
          <span className="mt-0.5 block text-accent2 [overflow-wrap:anywhere]">{titleLine2}</span>
        </h3>
        <p className="mt-2.5 line-clamp-3 min-h-[2.75rem] font-sans text-[15px] leading-snug text-muted sm:line-clamp-2 sm:min-h-[3.25rem] sm:text-[16px] md:line-clamp-2 md:min-h-0">
          {description}
        </p>

        {/* Caption strip — always pinned to card foot; price + stamps stay one band on mobile */}
        <div className="mt-auto shrink-0 border-t-2 border-ink/10 bg-[#f0ebe2] px-3 py-3 sm:px-4 sm:py-3.5">
          <div className="flex min-h-[2.5rem] flex-row flex-wrap items-center justify-between gap-x-3 gap-y-2">
            <span className="shrink-0 font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.12em] text-ink sm:text-[12px] sm:tracking-[0.1em]">
              {price}
            </span>
            {tags?.length ? (
              <div className="flex min-w-0 flex-1 flex-wrap justify-end gap-1.5 sm:flex-none">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="shrink-0 border border-ink/20 bg-bg px-2 py-0.5 font-[family-name:var(--font-courier)] text-[10px] uppercase tracking-[0.14em] text-ink"
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
