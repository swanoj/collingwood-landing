import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/menu", destination: "/food", permanent: false },
      { source: "/gift-cards", destination: "/vouchers", permanent: false },
      { source: "/locations/:path*", destination: "/", permanent: false },
      { source: "/locations", destination: "/", permanent: false },
      { source: "/about", destination: "/", permanent: false },
      { source: "/careers", destination: "/contact", permanent: false },
      { source: "/faqs", destination: "/contact", permanent: false },
      { source: "/privacy", destination: "/contact", permanent: false },
      { source: "/terms", destination: "/contact", permanent: false },
      { source: "/accessibility", destination: "/contact", permanent: false },
      { source: "/train", destination: "/functions", permanent: false },
      { source: "/bookings", destination: "/reservations", permanent: false },
      { source: "/merch", destination: "/shop", permanent: false },
    ];
  },
};

export default nextConfig;
