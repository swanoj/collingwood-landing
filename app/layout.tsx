import type { Metadata } from "next";
import { Anton, Courier_Prime, Geist, Geist_Mono } from "next/font/google";
import { GrainOverlay } from "@/components/GrainOverlay";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
  title: {
    default: "Easey's",
    template: "%s | Easey's",
  },
  description:
    "Easey's — industrial rooftop burgers & beers. Collingwood energy, newsprint palette, train-room functions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${courier.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-transparent text-ink">
        <GrainOverlay />
        <div className="relative z-[2] flex min-h-screen flex-col bg-transparent">
          <SiteNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
