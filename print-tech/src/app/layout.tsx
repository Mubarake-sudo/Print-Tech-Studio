import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
const inter = Inter({ subsets:["latin"], weight:["400","500","600"], variable:"--font-inter", display:"swap" });
const jakarta = Plus_Jakarta_Sans({ subsets:["latin"], weight:["700","800"], style:["normal","italic"], variable:"--font-jakarta", display:"swap" });
export const metadata: Metadata = { title:"PRINT-TECH STUDIO | Enseignes, façades Alucobond, CNC & laser à Abidjan", description:"Communication visuelle, signalétique, lettres 3D, enseignes lumineuses et habillage de façades Alucobond à Abidjan." };
export default function RootLayout({ children }:{children:React.ReactNode}) {
  return <html lang="fr"><body className={`${inter.variable} ${jakarta.variable}`}><SmoothScroll>{children}</SmoothScroll></body></html>;
}
