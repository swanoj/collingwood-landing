import type { Metadata } from "next";
import { LocationCard } from "@/components/LocationCard";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { locations } from "@/src/content/locations";

export const metadata: Metadata = {
  title: "Locations",
  description: "Four Melbourne rooftops — Collingwood, CBD, Footscray, South Yarra.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        kicker="Visit"
        title="Four roofs"
        lead="Same smash energy, different skyline. Default site hours show Collingwood — confirm per venue (TBC) before you trek."
      />
      <Section theme="cream" className="!pt-0">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {locations.map((loc) => (
            <LocationCard key={loc.slug} location={loc} />
          ))}
        </div>
      </Section>
    </>
  );
}
