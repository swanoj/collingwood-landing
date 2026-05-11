type Props = {
  id?: string;
  title: string;
  description: string;
  price: string;
  tags?: string[];
};

function TagStamps({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 md:justify-end">
      {tags.map((t) => (
        <span
          key={t}
          className="border border-faint bg-bg px-2 py-1 font-[family-name:var(--font-courier)] text-[11px] uppercase tracking-[0.14em] text-ink"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/** Shared menu row: poster grid + price rail + stamp tags (Food + Drinks). */
export function PosterRow({ id, title, description, price, tags }: Props) {
  return (
    <li id={id} className="grid gap-6 border-b border-faint pb-10 md:grid-cols-[1fr_auto] md:items-start md:gap-10">
      <div className="min-w-0">
        <h3 className="font-[family-name:var(--font-anton)] text-3xl uppercase tracking-[-0.02em] md:text-4xl">{title}</h3>
        <p className="mt-3 line-clamp-2 font-sans text-[16px] leading-snug text-muted md:line-clamp-1 md:text-[17px]">{description}</p>
        {tags?.length ? (
          <div className="mt-3 md:hidden">
            <TagStamps tags={tags} />
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-3 md:items-end md:text-right">
        <p className="font-[family-name:var(--font-courier)] text-[12px] uppercase tracking-[0.1em] text-ink md:pt-0.5">{price}</p>
        {tags?.length ? (
          <div className="hidden md:block">
            <TagStamps tags={tags} />
          </div>
        ) : null}
      </div>
    </li>
  );
}
