import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://printtechstudio.ci"),
  title: "PRINT-TECH STUDIO | Enseignes lumineuses, façades Alucobond, CNC & laser à Abidjan",
  description:
    "PRINT-TECH STUDIO à Abidjan : atelier spécialisé en enseignes lumineuses, habillage de façades Alucobond, découpe CNC/laser, lettres 3D, décoration intérieure et impression grand format.",
  authors: [{ name: "Abdullah Issah - PRINT-TECH STUDIO" }],
  keywords: [
    "enseigne lumineuse",
    "Alucobond",
    "lettres 3D",
    "découpe CNC",
    "décoration intérieure",
    "habillage mural design",
    "signalétique Abidjan",
    "imprimerie grand format",
    "façade commerciale Côte d'Ivoire",
    "PRINT-TECH STUDIO",
  ],
  openGraph: {
    title: "PRINT-TECH STUDIO | Signalétique d'exception, façades & décoration intérieure",
    description:
      "Atelier d'excellence à Abidjan : enseignes lumineuses, façades composites Alucobond, découpe CNC, décoration intérieure et impression grand format.",
    type: "website",
    locale: "fr_CI",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "PRINT-TECH STUDIO - Réalisations d'enseignes et façades",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${jakarta.variable} bg-ink text-bone antialiased selection:bg-gold selection:text-ink`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
