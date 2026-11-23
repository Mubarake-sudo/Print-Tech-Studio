import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, waLink } from "@/data/siteConfig";
export default function Footer() {
  return <footer id="contact" className="px-5 md:px-10 py-24">
    <h2 className="h2 max-w-3xl">Parlons de votre projet.</h2>
    <div className="mt-10 grid md:grid-cols-2 gap-10">
      <div className="space-y-4">
        {siteConfig.phones.map(p=><div key={p.tel} className="flex flex-wrap gap-3 items-center"><a href={`tel:${p.tel}`} className="btn btn-line"><Phone size={16}/>{p.label}</a><a href={waLink(p.wa)} className="btn btn-gold">WhatsApp</a></div>)}
        <a href={`mailto:${siteConfig.email}`} className="flex gap-2 items-center min-h-[44px] hover:text-gold"><Mail size={16}/>{siteConfig.email}</a>
        <p className="flex gap-2 items-start text-white/70"><MapPin size={16} className="mt-1 shrink-0"/>{siteConfig.address}</p>
      </div>
      <div className="flex flex-col items-start md:items-end gap-4">
        <Image src="/images/logo-print-tech.png" alt="PRINT-TECH STUDIO" width={200} height={105} className="h-20 w-auto"/>
        <div className="flex gap-5 text-sm">{Object.entries(siteConfig.socials).map(([k,v])=><a key={k} href={v} className="capitalize min-h-[44px] inline-flex items-center hover:text-gold">{k}</a>)}</div>
        <p className="text-xs text-white/40">© 2026 {siteConfig.name} - {siteConfig.owner}</p>
      </div>
    </div>
  </footer>;
}
