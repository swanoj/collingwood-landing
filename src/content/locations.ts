export type LocationSlug = "collingwood" | "cbd" | "footscray" | "south-yarra";

export type Location = {
  slug: LocationSlug;
  name: string;
  hook: string;
  address: string;
  orderCta: string;
  detailHref: string;
};

export const locations: Location[] = [
  {
    slug: "collingwood",
    name: "Collingwood",
    hook: "The original Hitachi in the sky.",
    address: "48 Easey St, Collingwood VIC 3066",
    orderCta: "Order Collingwood",
    detailHref: "/locations/collingwood",
  },
  {
    slug: "cbd",
    name: "CBD",
    hook: "Lunch rush, late finish, same smash.",
    address: "Level TBC, Melbourne CBD (TBC)",
    orderCta: "Order CBD",
    detailHref: "/locations/cbd",
  },
  {
    slug: "footscray",
    name: "Footscray",
    hook: "West-side rooftop, east-side appetite.",
    address: "Address TBC, Footscray VIC",
    orderCta: "Order Footscray",
    detailHref: "/locations/footscray",
  },
  {
    slug: "south-yarra",
    name: "South Yarra",
    hook: "Chapel adjacency. Burger priority.",
    address: "Address TBC, South Yarra VIC",
    orderCta: "Order South Yarra",
    detailHref: "/locations/south-yarra",
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
