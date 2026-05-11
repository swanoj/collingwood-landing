export type DrinkItem = { name: string; description: string; price: string };
export type DrinkSection = { id: string; title: string; items: DrinkItem[] };

export const drinkSections: DrinkSection[] = [
  {
    id: "beer",
    title: "Beer & cider",
    items: [
      { name: "Melbourne Bitter", description: "Tinnie. Train carriage default.", price: "$8 (TBC)" },
      { name: "Craft rotation", description: "Ask what’s cold — taps change weekly.", price: "$10–14 (TBC)" },
      { name: "Cider", description: "Dry, crisp, rooftop safe.", price: "$9 (TBC)" },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    items: [
      { name: "Red Stripe highball", description: "Rum, ginger, lime, disrespect for Monday.", price: "$16 (TBC)" },
      { name: "House sour", description: "Whisky, citrus, foam — bar call (TBC).", price: "$18 (TBC)" },
    ],
  },
  {
    id: "wine",
    title: "Wine",
    items: [
      { name: "Skin-contact glass", description: "Orange wine for people who hate wine talk.", price: "$12 (TBC)" },
      { name: "Shiraz / Pinot pour", description: "Bottle list coming — ask bartender.", price: "$11 (TBC)" },
    ],
  },
  {
    id: "soft",
    title: "Non-alc",
    items: [
      { name: "Soft drink", description: "Cold cans.", price: "$4 (TBC)" },
      { name: "Thickshake", description: "Full-cream chaos — flavours (TBC).", price: "$8 (TBC)" },
    ],
  },
];
