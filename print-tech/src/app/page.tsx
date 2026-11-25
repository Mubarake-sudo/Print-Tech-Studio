import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Savoir from "@/components/Savoir";
import Comparator from "@/components/Comparator";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import { About, Process, Why, Contact } from "@/components/Sections";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

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
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
