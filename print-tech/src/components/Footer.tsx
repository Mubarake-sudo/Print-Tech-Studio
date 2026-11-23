import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { TikTokIcon } from "./Icons";
import { siteConfig, waLink, navLinks } from "@/data/siteConfig";
const social = [["Facebook",siteConfig.socials.facebook,<Facebook key="f" size={20}/>],["Instagram",siteConfig.socials.instagram,<Instagram key="i" size={20}/>],["TikTok",siteConfig.socials.tiktok,<TikTokIcon key="t" size={20}/>]] as const;
export default function Footer() {
  return <footer id="contact" className="bg-[#050507] border-t border-white/10 px-5 lg:px-10 pt-20 pb-8">
    <div className="rounded-3xl border border-gold/30 bg-ink p-8 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
      <div><h2 className="h2">Parlons de votre projet.</h2><p className="lead mt-3 max-w-xl">Un devis rapide, sans engagement : écrivez-nous sur WhatsApp ou appelez-nous.</p></div>
      <div className="flex flex-wrap gap-3">{siteConfig.phones.map(p=><a key={p.wa} href={waLink(p.wa)} target="_blank" rel="noopener noreferrer" className="btn btn-gold"><MessageCircle size={18}/>{p.short}</a>)}</div>
    </div>
    <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div className="space-y-5"><Logo className="h-20 w-auto"/><p className="text-sm text-[#D1D5DB] max-w-xs">Communication visuelle, imprimerie grand format, signalétique et enseignes lumineuses à Abidjan.</p>
        <div className="flex gap-3">{social.map(([n,h,i])=><a key={n} href={h} aria-label={n} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-gold/50 grid place-items-center text-gold transition-colors duration-500 hover:bg-gold hover:text-ink">{i}</a>)}</div></div>
      <div><h3 className="eyebrow text-gold2 mb-4">Navigation</h3><ul className="space-y-1">{navLinks.map(([l,id])=><li key={id}><a href={`#${id}`} className="inline-flex min-h-[36px] items-center text-[#D1D5DB] hover:text-gold2">{l}</a></li>)}</ul></div>
      <div><h3 className="eyebrow text-gold2 mb-4">Téléphone</h3><ul className="space-y-2">{siteConfig.phones.map(p=><li key={p.tel}><a href={`tel:${p.tel}`} className="inline-flex min-h-[44px] items-center gap-2 text-[#D1D5DB] hover:text-gold2"><Phone size={16}/>{p.label}</a></li>)}</ul></div>
      <div><h3 className="eyebrow text-gold2 mb-4">Contact</h3><a href={`mailto:${siteConfig.email}`} className="flex min-h-[44px] items-center gap-2 text-[#D1D5DB] hover:text-gold2 break-all"><Mail size={16} className="shrink-0"/>{siteConfig.email}</a><p className="mt-2 flex gap-2 text-[#D1D5DB]"><MapPin size={16} className="mt-1 shrink-0"/>{siteConfig.address}</p></div>
    </div>
    <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/50"><p>© 2026 {siteConfig.name}. Tous droits réservés.</p><p>Direction : {siteConfig.owner}</p></div>
  </footer>;
}
