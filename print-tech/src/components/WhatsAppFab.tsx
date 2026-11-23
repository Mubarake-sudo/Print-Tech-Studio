"use client";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig, waLink } from "@/data/siteConfig";
export default function WhatsAppFab() {
  const [o,setO] = useState(false);
  return <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
    {o && siteConfig.phones.map(p=><a key={p.wa} href={waLink(p.wa)} className="btn bg-ink text-gold border border-gold">{p.short}</a>)}
    <button aria-label="WhatsApp" onClick={()=>setO(!o)} className="w-14 h-14 rounded-full bg-gold text-ink grid place-items-center shadow-lg">{o?<X/>:<MessageCircle/>}</button>
  </div>;
}
