import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Savoir from "@/components/Savoir";
import { About, Process, Why } from "@/components/Sections";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

// Lazy loading des sections sous la ligne de flottaison pour un FCP / LCP ultra-rapide
const Comparator = dynamic(() => import("@/components/Comparator"), {
  loading: () => <div className="min-h-[500px] bg-ink" />,
});

const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <div className="min-h-[600px] bg-bone" />,
});

const Videos = dynamic(() => import("@/components/Videos"), {
  loading: () => <div className="min-h-[450px] bg-ink" />,
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Savoir />
      <Comparator />
      <Gallery />
      <Videos />
      <Process />
      <Why />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
