/**
 * Global venue + outbound links. Edit here — header/footer read from this file.
 */
export const site = {
  wordmark: "EASEY'S",
  taglineBookings: "Bookings recommended on weekends — walk-ins when we can.",
  address: "48 Easey St, Collingwood VIC 3066",
  hours: "Open 7 days · 11:00–late (TBC)",
  phone: "(03) 9417 2250",
  phoneTel: "+61394172250",
  email: "hello@easeys.com.au",
  social: {
    instagram: "https://www.instagram.com/easeys/",
    facebook: "https://www.facebook.com/easeys/",
  },
  /** Placeholder outbound — swap for live HungryHungry / Uber / DoorDash when contracted */
  order: {
    pickupUrl: "https://www.easeys.com.au/",
    deliveryUberUrl: "https://www.ubereats.com/",
    deliveryDoorDashUrl: "https://www.doordash.com/",
  },
  reservationsEmbedUrl: null as string | null,
  vouchersUrl: "https://www.easeys.com.au/",
} as const;
