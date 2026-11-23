"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, X } from "lucide-react";
import MaskTitle from "./MaskTitle";
import { siteConfig } from "@/data/siteConfig";
export default function Hero() {
  const [video,setVideo] = useState(false);
  return <section id="top" className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden">
    <Image src="/images/hero.jpg" alt="Façade Alucobond avec enseigne lumineuse PRINT-TECH STUDIO" fill priority sizes="100vw" className="object-cover object-[74%_50%] md:object-center"/>
    <div className="absolute inset-0 md:hidden bg-gradient-to-t from-ink via-ink/75 to-ink/10"/>
    <div className="absolute inset-y-0 left-0 hidden md:block w-[72%] bg-gradient-to-r from-ink/95 via-ink/70 to-transparent"/>
    <div className="relative z-10 w-full px-5 lg:px-10 pt-32 pb-14 md:pb-0">
      <div className="max-w-2xl border-l border-gold/60 pl-5 md:pl-8">
        <p className="flex items-center gap-4 text-gold2 font-bold tracking-[.2em] text-xs sm:text-sm">PRINT-TECH STUDIO<span className="hidden sm:block h-px w-24 bg-gold/50"/></p>
        <MaskTitle as="h1" className="h1 mt-4" text={"Donnez vie à vos idées avec style\u00a0!"} accent={"style\u00a0!"}/>
        <svg viewBox="0 0 300 14" className="w-40 sm:w-64 ml-auto mr-4 -mt-1" fill="none" aria-hidden><path d="M2 10 Q150 -2 298 6" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round"/></svg>
        <p className="mt-5 max-w-lg text-white/85 text-base sm:text-lg">Communication visuelle, imprimerie et signalétique haut de gamme pour une visibilité qui marque les esprits.</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a href="#realisations" className="btn btn-gold">Découvrir nos réalisations <ArrowRight size={18}/></a>
          {siteConfig.heroVideo
            ? <button onClick={()=>setVideo(true)} className="flex items-center gap-3 min-h-[44px]"><span className="w-12 h-12 rounded-full border border-gold grid place-items-center text-gold"><Play size={18} fill="currentColor"/></span>Voir la vidéo</button>
            : <a href="#realisations" className="flex items-center gap-3 min-h-[44px]"><span className="w-12 h-12 rounded-full border border-gold grid place-items-center text-gold"><Play size={18} fill="currentColor"/></span>Voir nos projets</a>}
        </div>
      </div>
    </div>
    {video && <div className="fixed inset-0 z-[80] bg-black/90 grid place-items-center p-4" onClick={()=>setVideo(false)}>
      <button aria-label="Fermer" className="absolute top-4 right-4 w-11 h-11 grid place-items-center text-gold"><X/></button>
      <video src={siteConfig.heroVideo} poster={siteConfig.heroPoster} controls autoPlay playsInline className="max-h-[85vh] w-full max-w-4xl" onClick={e=>e.stopPropagation()}/>
    </div>}
  </section>;
}
