import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/train", destination: "/functions", permanent: false },
      { source: "/bookings", destination: "/reservations", permanent: false },
      { source: "/merch", destination: "/shop", permanent: false },
    ];
  },
};

export default nextConfig;
