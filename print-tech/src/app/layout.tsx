import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
const syne = Syne({ subsets:["latin"], variable:"--font-syne" });
const jakarta = Plus_Jakarta_Sans({ subsets:["latin"], variable:"--font-jakarta" });
export const metadata: Metadata = { title:"PRINT-TECH STUDIO | Enseignes, façades Alucobond, CNC & laser à Abidjan", description:"Communication visuelle, signalétique, lettres 3D, enseignes lumineuses et habillage de façades Alucobond à Abidjan." };
export default function RootLayout({ children }:{children:React.ReactNode}) {
  return <html lang="fr"><body className={`${syne.variable} ${jakarta.variable}`}><SmoothScroll>{children}</SmoothScroll></body></html>;
}
