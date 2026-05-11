import type { MetadataRoute } from "next";

const base = "https://collingwood-landing.vercel.app";

const paths = ["", "/food", "/drinks", "/order", "/reservations", "/functions", "/royal-easeys-cc", "/shop", "/vouchers", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
  }));
}
