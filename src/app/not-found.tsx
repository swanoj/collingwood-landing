import Link from "next/link";
import { Button } from "@/components/Button";
import { UtilityFooter } from "@/components/UtilityFooter";
import { UtilityHeader } from "@/components/UtilityHeader";

export default function NotFound() {
  return (
    <>
      <UtilityHeader />
      <main className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-24 text-center">
        <p className="font-[family-name:var(--font-courier)] text-meta text-muted">404</p>
        <h1 className="mt-4 max-w-lg font-[family-name:var(--font-anton)] text-section-h2 uppercase">This carriage isn&apos;t scheduled</h1>
        <p className="mt-6 max-w-md font-sans text-muted">Dead link or moved menu. Head home or order something while you&apos;re here.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary">
            Home
          </Button>
          <Button href="/order" variant="secondary">
            Order
          </Button>
        </div>
        <Link href="/food" className="mt-8 font-[family-name:var(--font-courier)] text-meta text-accent2 hover:underline">
          Food menu →
        </Link>
      </main>
      <UtilityFooter />
    </>
  );
}
