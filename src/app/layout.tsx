import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexlancers — Transforming Ideas Into Digital Reality",
  description:
    "We build high-performance websites, scalable applications, and custom software solutions that help businesses grow and scale.",
  keywords: [
    "web development",
    "mobile apps",
    "custom software",
    "startup",
    "digital products",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${outfit.variable} ${syne.variable}`}>
      <body className="min-h-full font-sans bg-[#050505] text-white">{children}</body>
    </html>
  );
}
