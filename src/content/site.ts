/**
 * Canonical venue + outbound links. Header and footer both read from here — edit once.
 */
export const site = {
  wordmark: "EASEY'S",
  taglineBookings: "Bookings recommended on weekends — walk-ins when we can.",
  /** Mono “identity strip” under utility meta (Gourou-style). */
  statusStrip: "COLLINGWOOD / OPEN 7 DAYS / WALK-INS WHEN WE CAN",
  /** Street address as used publicly (level + street). */
  address: "3/48 Easey Street, Collingwood VIC 3066",
  hours: "Open 7 days · 11:00–late (TBC)",
  phone: "(03) 9417 2250",
  phoneTel: "+61394172250",
  /** Public-facing inbox (easeys.com.au). */
  email: "oldmate@easeys.com.au",
  social: {
    instagram: "https://www.instagram.com/easeys/",
    facebook: "https://www.facebook.com/easeys/",
  },
  /** Real order.online / HungryHungry URL when live */
  order: {
    pickupUrl: "https://www.easeys.com.au/",
    deliveryUberUrl: "https://www.ubereats.com/",
    deliveryDoorDashUrl: "https://www.doordash.com/",
  },
  reservationsEmbedUrl: null as string | null,
  vouchersUrl: "https://www.easeys.com.au/",
  /** /order page microcopy */
  orderPage: {
    checkoutNote: "You'll checkout with our ordering partners.",
    pickupMeta: ["Fastest", "No app", "Best for tracking"],
    deliveryMeta: ["Delivery fees vary (TBC)."],
  },
} as const;
