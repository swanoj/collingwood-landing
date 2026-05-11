export type MenuSignature = {
  id: string;
  headline: string;
  subline: string;
  description: string;
  image: string;
  tags?: string[];
  href: string;
};

export const signatureDishes: MenuSignature[] = [
  {
    id: "oklahoma",
    headline: "OKLAHOMA",
    subline: "FRIED ONION",
    description: "Smashed patty, shaved onion griddled into the crust, pickles, sauce.",
    image: "/placeholder-food/cutout-1.svg",
    tags: ["GF ask"],
    href: "/menu#oklahoma",
  },
  {
    id: "madness",
    headline: "MELBOURNE",
    subline: "MADNESS",
    description: "Double beef, bacon, potato cake, dim sim — Collingwood on a plate.",
    image: "/placeholder-food/cutout-2.svg",
    tags: ["V ask"],
    href: "/menu#madness",
  },
  {
    id: "dim-sim",
    headline: "DIM SIMS",
    subline: "TRIPLE FRIED",
    description: "Melbourne Bitter batter, chicken salt, vinegar on request.",
    image: "/placeholder-food/cutout-3.svg",
    href: "/menu#dim-sim",
  },
  {
    id: "crispy-chicken",
    headline: "CRISPY",
    subline: "CHICKEN",
    description: "Brined thigh, iceberg, mayo, soft bun — not smashed, still loud.",
    image: "/placeholder-food/cutout-4.svg",
    href: "/menu#chicken",
  },
  {
    id: "loaded-fries",
    headline: "LOADED",
    subline: "FRIES",
    description: "Gravy, cheese sauce, spring onion — shareable if you’re weak.",
    image: "/placeholder-food/cutout-5.svg",
    tags: ["VG ask"],
    href: "/menu#fries",
  },
  {
    id: "thickshake",
    headline: "THICK",
    subline: "SHAKE",
    description: "House-made syrup, full-cream chaos. Add malt (TBC).",
    image: "/placeholder-food/cutout-6.svg",
    href: "/menu#shake",
  },
];

export const menuPageIntro = {
  title: "MENU",
  lead: "Everything hits the flat-top hard. Prices (TBC) — structure is real, numbers follow when finance says go.",
} as const;
