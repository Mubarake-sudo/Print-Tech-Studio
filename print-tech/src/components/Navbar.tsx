"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { TikTokIcon } from "./Icons";
import { Menu, X, Phone, MessageCircle, Facebook, Instagram, ArrowRight } from "lucide-react";
import { siteConfig, waLink, navLinks } from "@/data/siteConfig";
const links = navLinks;
export default function Navbar() {
  const [open,setOpen] = useState(false);
  const [solid,setSolid] = useState(false);
  const [active,setActive] = useState("top");
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll(); addEventListener("scroll", onScroll, { passive:true });
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin:"-45% 0px -50% 0px" });
    links.forEach(([,id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);
  return <>
    <header className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 lg:px-10 py-3 transition-colors duration-500 ${solid?"bg-ink/90 backdrop-blur":"bg-transparent"}`}>
      <a href="#top" aria-label="Accueil"><Logo className="h-12 lg:h-14 w-auto"/></a>
      <nav className="hidden lg:flex gap-7 text-sm">{links.map(([l,id])=><a key={id} href={`#${id}`} className={`py-2 text-[15px] font-medium border-b-2 transition-colors duration-500 ${active===id?"text-gold2 border-gold":"border-transparent hover:text-gold2"}`}>{l}</a>)}</nav>
      <a href={waLink(siteConfig.phones[0].wa)} target="_blank" rel="noopener noreferrer" className="btn btn-gold hidden lg:inline-flex !py-2.5 text-sm">Demander un devis <ArrowRight size={16}/></a>
      <button aria-label="Menu" className="lg:hidden w-11 h-11 grid place-items-center text-gold" onClick={()=>setOpen(true)}><Menu/></button>
    </header>
    <div aria-hidden={!open} className={`lg:hidden fixed inset-0 bg-ink z-[60] flex flex-col p-6 overflow-y-auto transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${open?"translate-y-0":"-translate-y-full pointer-events-none"}`}>
      <button aria-label="Fermer" className="self-end w-11 h-11 grid place-items-center text-gold" onClick={()=>setOpen(false)}><X/></button>
      <div className="flex flex-col gap-4 mt-4">{links.map(([l,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)} className="text-2xl font-extrabold hover:text-gold">{l}</a>)}</div>
      <div className="mt-auto pt-8 space-y-3">
        {siteConfig.phones.map(p=><div key={p.tel} className="flex gap-3"><a className="btn btn-line flex-1" href={`tel:${p.tel}`}><Phone size={16}/>{p.short}</a><a className="btn btn-gold" aria-label="WhatsApp" href={waLink(p.wa)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/></a></div>)}
        <div className="flex gap-3 pt-2">
          <a className="btn btn-line" aria-label="Facebook" href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={18}/></a>
          <a className="btn btn-line" aria-label="Instagram" href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18}/></a>
          <a className="btn btn-line" aria-label="TikTok" href={siteConfig.socials.tiktok} target="_blank" rel="noopener noreferrer"><TikTokIcon/></a>
        </div>
      </div>
    </div>
  </>;
}
