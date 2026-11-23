"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import MaskTitle from "./MaskTitle";
import { videos } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
export default function Videos() {
  const track = useRef<HTMLDivElement>(null);
  const [playing,setPlaying] = useState<string|null>(null);
  const go = (d:number) => track.current?.scrollBy({ left:d*track.current.clientWidth*0.8, behavior:"smooth" });
  return <section id="videos" className="px-3 sm:px-6 lg:px-10 py-16">
    <div className="rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-[#0b0b0d] px-5 sm:px-8 py-16 md:py-24">
      <div className="text-center">
        <MaskTitle className="h2 uppercase" text="Nos vidéos"/>
        <p className="lead mt-3 max-w-xl mx-auto">Enseignes allumées, chantiers et poses : nos réalisations en mouvement.</p>
      </div>
      <div ref={track} className="mt-12 flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {videos.map(v=><div key={v.id} className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[calc((100%-3rem)/3)]">
          <div className="relative aspect-video overflow-hidden rounded-[1.75rem] bg-[#111114]">
            {playing===v.id && v.src
              ? <video src={v.src} poster={v.poster} controls autoPlay playsInline preload="none" className="absolute inset-0 h-full w-full bg-black object-contain"/>
              : <button onClick={()=>v.src && setPlaying(v.id)} aria-label={`Lire : ${v.title}`} className="group absolute inset-0">
                  {v.poster ? <Image src={v.poster} alt={v.title} fill sizes="(max-width:768px) 85vw, 34vw" className="object-cover"/> : <span className="absolute inset-0 grid place-items-center text-xs tracking-widest text-gold/50">VIDÉO À AJOUTER</span>}
                  <span className="absolute inset-0 grid place-items-center"><span className="grid h-16 w-16 place-items-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur transition-transform duration-500 group-hover:scale-110"><Play size={22} fill="currentColor"/></span></span>
                </button>}
          </div>
          <p className="mt-3 text-sm text-[#D1D5DB]">{v.title}</p>
        </div>)}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button onClick={()=>go(-1)} aria-label="Précédent" className="btn btn-line !px-0 w-12"><ChevronLeft/></button>
        <button onClick={()=>go(1)} aria-label="Suivant" className="btn btn-line !px-0 w-12"><ChevronRight/></button>
        <a href={siteConfig.socials.tiktok} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Voir plus de vidéos sur TikTok <ArrowRight size={16}/></a>
      </div>
    </div>
  </section>;
}
