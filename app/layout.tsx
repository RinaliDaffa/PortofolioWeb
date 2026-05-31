import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import OrbsBackground from "@/components/OrbsBackground";
import MagneticCursor from "@/components/MagneticCursor";
import AmbientParticles from "@/components/AmbientParticles";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daffa Rinali — Informatics Student & AI Developer",
  description:
    "Portfolio of Daffa Rinali — Informatics student at ITS Surabaya specializing in AI, data science, and full-stack development.",
  keywords: [
    "Daffa Rinali",
    "ITS Surabaya",
    "Informatics",
    "Portfolio",
    "AI",
    "Machine Learning",
    "Full-Stack Developer",
    "Data Science",
  ],
  authors: [{ name: "Daffa Rinali" }],
  openGraph: {
    title: "Daffa Rinali — Informatics Student & AI Developer",
    description:
      "Portfolio showcasing projects in AI, data systems, and full-stack development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <AmbientParticles />
        <MagneticCursor />
        <OrbsBackground />
        {children}
      </body>
    </html>
  );
}