"use client";
import { useState } from "react";
import Image from "next/image";
import MaskTitle from "./MaskTitle";
import { projects, categories, type Project, type Media } from "@/data/projects";
import { siteConfig, waLink } from "@/data/siteConfig";
const coverOf = (p:Project) => { const m = p.media?.[0]; return m ? (m.type==="image" ? m.src : m.poster) : p.image; };
function Video({ src, poster }:{src:string;poster:string}) {
  const [on,setOn] = useState(false);
  return <div className="relative aspect-video bg-black">
    {on ? <video src={src} poster={poster} controls autoPlay playsInline preload="none" className="absolute inset-0 w-full h-full object-contain"/> : <>
      <Image src={poster} alt="Aperçu vidéo" fill className="object-cover" sizes="100vw"/>
      <button aria-label="Lire la vidéo" onClick={()=>setOn(true)} className="absolute inset-0 grid place-items-center"><span className="w-16 h-16 rounded-full bg-gold text-ink grid place-items-center text-2xl pl-1">&#9654;</span></button></>}
  </div>;
}
function MediaItem({ m, title }:{m:Media;title:string}) {
  return m.type==="video" ? <Video src={m.src} poster={m.poster}/> : <div className="relative aspect-[4/3] bg-[#111]"><Image src={m.src} alt={m.alt ?? title} fill className="object-cover" sizes="100vw"/></div>;
}
export default function Gallery() {
  const [f,setF] = useState<string>("Tout");
  const [sel,setSel] = useState<Project|null>(null);
  const list = f==="Tout" ? projects : projects.filter(p=>p.category===f);
  return <section id="realisations" className="bg-bone text-ink px-5 md:px-10 py-24">
    <MaskTitle className="h2 mb-8" text="Nos réalisations"/>
    <div className="flex flex-wrap gap-2 mb-8">{["Tout",...categories].map(c=><button key={c} onClick={()=>setF(c)} className={`btn !py-2 border ${f===c?"bg-ink text-gold border-ink":"border-ink/20"}`}>{c}</button>)}</div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{list.map(p=><button key={p.id} onClick={()=>setSel(p)} className="text-left group">
      <div className="relative aspect-[4/3] bg-ink overflow-hidden rounded-2xl">{coverOf(p)?<Image src={coverOf(p)!} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw"/>:<div className="absolute inset-0 grid place-items-center text-gold/60 text-xs tracking-widest">PHOTO À AJOUTER</div>}</div>
      <h3 className="mt-3 font-bold">{p.title}</h3><p className="text-sm text-ink/60">{p.category}</p><span className="mt-2 inline-block text-xs font-semibold tracking-widest text-[#8a6d12]">VOIR LE PROJET &rarr;</span></button>)}</div>
    {sel && <div className="fixed inset-0 z-[70] bg-ink/95 text-bone overflow-y-auto p-5" onClick={()=>setSel(null)} role="dialog">
      <div className="max-w-2xl mx-auto mt-10" onClick={e=>e.stopPropagation()}>
        <button className="btn btn-line mb-4" onClick={()=>setSel(null)}>Fermer</button>
        <div className="space-y-3">{sel.media?.length ? sel.media.map((m,i)=><MediaItem key={i} m={m} title={sel.title}/>) : sel.image ? <MediaItem m={{type:"image",src:sel.image}} title={sel.title}/> : <div className="aspect-[4/3] bg-[#111] grid place-items-center text-gold/60 text-xs tracking-widest">PHOTO À AJOUTER</div>}</div>
        <h3 className="font-display text-3xl mt-5">{sel.title}</h3><p className="mt-2 text-white/70">{sel.description}</p>
        <p className="mt-4 text-sm"><b className="text-gold">Matériaux :</b> {sel.materials.join(", ")}</p><p className="text-sm"><b className="text-gold">Techniques :</b> {sel.techniques.join(", ")}</p>
        <a className="btn btn-gold mt-6" href={waLink(siteConfig.phones[0].wa, `Bonjour PRINT-TECH STUDIO, je souhaite commander un projet similaire : ${sel.title}.`)}>Commander un projet similaire sur WhatsApp</a>
      </div></div>}
  </section>;
}
