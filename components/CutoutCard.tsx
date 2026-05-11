import Image from "next/image";
import Link from "next/link";

type Props = {
  headline: string;
  subline: string;
  description: string;
  image: string;
  href: string;
  tags?: string[];
};

export function CutoutCard({ headline, subline, description, image, href, tags }: Props) {
  const isSvg = image.endsWith(".svg");

  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden border border-ink/10 bg-[#f4f1ea] transition hover:border-accent-red/40"
    >
      <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-cream-deep/50 to-cream p-6">
        <Image
          src={image}
          alt=""
          fill
          className="object-contain transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, 33vw"
          unoptimized={isSvg}
        />
      </div>
      <div className="border-t border-ink/10 px-5 pb-6 pt-5">
        <h3 className="font-[family-name:var(--font-anton)] text-3xl uppercase leading-[0.9] tracking-[-0.03em] text-ink md:text-4xl">
          {headline}
          <span className="block text-accent-red">{subline}</span>
        </h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-muted md:text-base">{description}</p>
        {tags?.length ? (
          <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">{tags.join(" · ")}</p>
        ) : null}
      </div>
    </Link>
  );
}
