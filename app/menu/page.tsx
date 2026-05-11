import { MenuGrid } from "@/components/MenuGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Easey's — smashed burgers, Melbourne Madness, dim sims.",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EA]">
      <MenuGrid />
    </div>
  );
}
