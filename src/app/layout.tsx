import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { LenisProvider } from "@/lib/scroll/lenis-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Reef Rooftop Restaurant | Ranchi",
  description: "Ranchi's rooftop, elevated. Five floors above the everyday at Hotel Coral Grand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased h-full`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-espresso)] text-[var(--color-cream)]">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
