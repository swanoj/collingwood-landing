import type { Metadata } from "next";
import { Anton, Courier_Prime, Geist } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const courier = Courier_Prime({
  weight: ["400", "700"],
  variable: "--font-courier",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://collingwood-landing.vercel.app"),
  title: {
    default: "Easey's",
    template: "%s | Easey's",
  },
  description: "Burgers in a train on a roof — Collingwood rooftop energy, poster typography, cold tins.",
  openGraph: {
    title: "Easey's",
    description: "Burgers in a train on a roof — Melbourne rooftop train carriage.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${geistSans.variable} ${anton.variable} ${courier.variable} h-full antialiased`}>
      <body className="min-h-full bg-bg font-sans text-ink">{children}</body>
    </html>
  );
}
