import Link from "next/link";

const line = "FOLLOW @EASEYS — ";

export function Marquee() {
  const repeated = Array(12).fill(line).join("");

  return (
    <div className="overflow-hidden border-y border-faint bg-ink py-4 text-bg">
      <div className="easeys-marquee flex w-max whitespace-nowrap font-[family-name:var(--font-courier)] text-meta text-bg/90">
        <span className="pr-12">{repeated}</span>
        <span className="pr-12" aria-hidden>
          {repeated}
        </span>
      </div>
      <p className="mt-3 text-center font-[family-name:var(--font-courier)] text-meta text-bg/55">
        <Link href="https://www.instagram.com/easeys/" className="hover:text-accent" target="_blank" rel="noreferrer">
          Instagram
        </Link>
        {" · "}
        <Link href="https://www.facebook.com/easeys/" className="hover:text-accent" target="_blank" rel="noreferrer">
          Facebook
        </Link>
      </p>
    </div>
  );
}
