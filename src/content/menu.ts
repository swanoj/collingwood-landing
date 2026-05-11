/**
 * ONLINE MENU SEED (HungryHungry-style scrape placeholder)
 * ---------------------------------------------------------------------------
 * Replace with dine-in PDF / POS source of truth when the client signs off.
 * Prices and dietaries marked (TBC) where unknown.
 */

export type MenuTag = "V" | "VG" | "GF";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tags?: MenuTag[];
};

export type MenuCategory = {
  id: string;
  title: string;
  blurb?: string;
  items: MenuItem[];
};

export const menuNote =
  "GF bun upgrade +$4 (TBC) · Ask service for allergen matrix — full matrix on site (TBC).";

export const menuCategories: MenuCategory[] = [
  {
    id: "burgers",
    title: "Burgers",
    blurb: "Smashed on the flat-top. Napkins non-optional.",
    items: [
      {
        id: "cheeseburger",
        name: "Easey's Cheeseburger",
        description: "Beef smash, cheese, pickles, onion, house sauce.",
        price: "$14 (TBC)",
        tags: ["GF"],
      },
      {
        id: "rowdy",
        name: "The Rowdy",
        description: "Double patty, double cheese, extra attitude.",
        price: "$19 (TBC)",
      },
      {
        id: "bbq-bacon",
        name: "BBQ Bacon",
        description: "Smash, bacon, BBQ glaze, crispy onion strings.",
        price: "$18 (TBC)",
      },
      {
        id: "okie",
        name: "Okie Fried Onion",
        description: "Shaved onion pressed into the crust — Oklahoma style.",
        price: "$17 (TBC)",
        tags: ["GF"],
      },
      {
        id: "madness",
        name: "Melbourne Madness",
        description: "Double beef, bacon, potato cake, dim sim — Collingwood on a plate.",
        price: "$22 (TBC)",
      },
      {
        id: "vego-smash",
        name: "Vego Smash (TBC)",
        description: "Plant patty, pickles, sauce — confirm SKU with kitchen.",
        price: "$16 (TBC)",
        tags: ["VG"],
      },
    ],
  },
  {
    id: "bird",
    title: "From the bird",
    items: [
      {
        id: "chicken-bow-wow",
        name: "Chicken Bow Wow",
        description: "Southern-ish spiced thigh, slaw, mayo, soft bun.",
        price: "$16 (TBC)",
      },
      {
        id: "fried-chicken-sando",
        name: "Fried Chicken Sandwich",
        description: "Crispy thigh, iceberg, pickles, comeback sauce.",
        price: "$15 (TBC)",
      },
      {
        id: "tenders",
        name: "Chicken Tenders",
        description: "Three-piece, chicken salt, sauce on the side.",
        price: "$12 (TBC)",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides & chaos",
    items: [
      {
        id: "fries",
        name: "Fries",
        description: "Hot, salty, gone in sixty seconds.",
        price: "$6 (TBC)",
        tags: ["VG"],
      },
      {
        id: "loaded",
        name: "Loaded Fries",
        description: "Gravy, cheese sauce, spring onion — share if you must.",
        price: "$14 (TBC)",
      },
      {
        id: "dim-sims",
        name: "Dim Sims",
        description: "Triple threat: steamed, fried, legendary.",
        price: "$8 (TBC)",
      },
      {
        id: "rings",
        name: "Onion Rings",
        description: "Beer batter (TBC) · extra crunchy.",
        price: "$9 (TBC)",
        tags: ["V"],
      },
    ],
  },
];

/** Home page featured posters — subset + display lines */
export const featuredMenuPosters: {
  id: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  price: string;
  tags?: MenuTag[];
  image: string;
  href: string;
}[] = [
  {
    id: "okie",
    titleLine1: "OKIE",
    titleLine2: "FRIED ONION",
    description: "Onion pressed into the smash. Pickles. Sauce.",
    price: "$17 (TBC)",
    tags: ["GF"],
    image: "/cutouts/cutout-1.svg",
    href: "/food#okie",
  },
  {
    id: "madness",
    titleLine1: "MELBOURNE",
    titleLine2: "MADNESS",
    description: "Double beef, bacon, potato cake, dim sim.",
    price: "$22 (TBC)",
    image: "/cutouts/cutout-2.svg",
    href: "/food#madness",
  },
  {
    id: "rowdy",
    titleLine1: "THE",
    titleLine2: "ROWDY",
    description: "Double patty, double cheese, flat-top discipline.",
    price: "$19 (TBC)",
    image: "/cutouts/cutout-3.svg",
    href: "/food#rowdy",
  },
  {
    id: "fried-chicken-sando",
    titleLine1: "FRIED",
    titleLine2: "CHICKEN",
    description: "Crispy thigh, pickles, iceberg, comeback sauce.",
    price: "$15 (TBC)",
    image: "/cutouts/cutout-4.svg",
    href: "/food#fried-chicken-sando",
  },
  {
    id: "bbq-bacon",
    titleLine1: "BBQ",
    titleLine2: "BACON",
    description: "Smash, bacon, BBQ glaze, crispy onions.",
    price: "$18 (TBC)",
    image: "/cutouts/cutout-5.svg",
    href: "/food#bbq-bacon",
  },
  {
    id: "bow-wow",
    titleLine1: "CHICKEN",
    titleLine2: "BOW WOW",
    description: "Spiced thigh, slaw, mayo — soft bun energy.",
    price: "$16 (TBC)",
    image: "/cutouts/cutout-6.svg",
    href: "/food#chicken-bow-wow",
  },
];
