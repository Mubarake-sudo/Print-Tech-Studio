"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, X } from "lucide-react";
import MaskTitle from "./MaskTitle";
import { siteConfig } from "@/data/siteConfig";
export default function Hero() {
  const [video,setVideo] = useState(false);
  return <section id="top" className="relative bg-ink overflow-hidden md:h-[clamp(560px,46vw,800px)]">
    <div className="relative aspect-[5/4] sm:aspect-[16/9] md:absolute md:inset-0 md:aspect-auto">
      <Image
        src="/images/hero-mobile.webp"
        alt="Façade PRINT-TECH STUDIO illuminée la nuit à Abidjan"
        fill
        sizes="100vw"
        priority
        fetchPriority="high"
        className="md:hidden object-cover object-[66%_50%]"
      />
      <Image
        src="/images/hero.webp"
        alt="Façade Alucobond avec enseigne lumineuse moderne PRINT-TECH STUDIO"
        fill
        sizes="100vw"
        priority
        fetchPriority="high"
        className="hidden md:block object-cover object-[center_36%]"
      />
      <div className="absolute inset-0 md:hidden bg-gradient-to-t from-ink via-ink/20 to-ink/50" />
      <div className="absolute inset-y-0 left-0 hidden md:block w-[58%] bg-gradient-to-r from-ink via-ink/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 hidden md:block bg-gradient-to-b from-ink/70 to-transparent" />
    </div>
    <div className="relative z-10 -mt-20 px-5 pb-12 sm:-mt-32 md:mt-0 md:h-full md:flex md:items-center md:px-10 md:pb-0 md:pt-20">
      <div className="max-w-[640px] border-l border-gold/60 pl-5 md:pl-8">
        <p className="eyebrow flex items-center gap-4 text-gold2">PRINT-TECH STUDIO<span className="hidden sm:block h-px w-24 bg-gold/50"/></p>
        <MaskTitle as="h1" className="h1 mt-4" text={"Donnez vie à vos idées avec style\u00a0!"} accent={"style\u00a0!"}/>
        <svg viewBox="0 0 300 14" className="w-36 sm:w-56 ml-auto -mt-1" fill="none" aria-hidden><path d="M2 10 Q150 -2 298 6" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round"/></svg>
        <p className="lead mt-4 max-w-[34rem]">Communication visuelle, imprimerie et signalétique haut de gamme pour une visibilité qui marque les esprits.</p>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href="#realisations" className="btn btn-gold">Découvrir nos réalisations <ArrowRight size={18}/></a>
          <button onClick={()=> siteConfig.heroVideo ? setVideo(true) : document.getElementById("videos")?.scrollIntoView({behavior:"smooth"})} className="flex items-center gap-3 min-h-[44px] text-[15px] font-semibold">
            <span className="w-12 h-12 rounded-full border border-gold grid place-items-center text-gold"><Play size={18} fill="currentColor"/></span>Voir la vidéo</button>
        </div>
      </div>
    </div>
    {video && <div className="fixed inset-0 z-[80] bg-black/90 grid place-items-center p-4" onClick={()=>setVideo(false)}>
      <button aria-label="Fermer" className="absolute top-4 right-4 w-11 h-11 grid place-items-center text-gold"><X/></button>
      <video src={siteConfig.heroVideo} poster={siteConfig.heroPoster} controls autoPlay playsInline className="max-h-[85vh] w-full max-w-4xl" onClick={e=>e.stopPropagation()}/>
    </div>}
  </section>;
}
