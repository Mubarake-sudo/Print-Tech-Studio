import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Savoir from "@/components/Savoir";
import Comparator from "@/components/Comparator";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { About, Process, Why } from "@/components/Sections";
export default function Home() {
  return <main><Navbar/><Hero/><About/><Savoir/><Comparator/><Gallery/><Process/><Why/><Footer/><WhatsAppFab/></main>;
}
