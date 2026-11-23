"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskTitle from "./MaskTitle";
const skills = [["Façades Alucobond","Habillage composite durable, pliage et pose soignés."],["Découpe CNC & laser","Précision au dixième de millimètre sur plexiglas, acrylique et aluminium."],["Lettres 3D & enseignes LED","Relief, rétroéclairage et finitions sur mesure."],["Impression grand format","Vitrines, panneaux et bâches, du dessin Illustrator à la pose."]];
export default function Savoir() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const p = ref.current!.querySelector<SVGPathElement>("#cnc")!;
      const len = p.getTotalLength();
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.set(p,{ strokeDasharray:len, strokeDashoffset:len });
      gsap.to(p,{ strokeDashoffset:0, ease:"none", scrollTrigger:{ trigger:ref.current, start:"top 60%", end:"bottom 70%", scrub:1 } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return <section id="expertise" ref={ref} className="bg-bone text-ink px-5 md:px-10 py-24">
    <MaskTitle className="h2 max-w-3xl" text="Un savoir-faire d'atelier, une précision industrielle."/>
    <svg viewBox="0 0 800 160" className="w-full max-w-4xl my-10 overflow-visible" fill="none" aria-hidden>
      <path d="M10 140 H120 V30 H300 A50 50 0 0 1 300 130 H220 M400 140 V20 H520 M400 80 H500 M600 140 L680 20 L760 140 M630 100 H730" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="cnc"/>
    </svg>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{skills.map(([t,d])=><div key={t} className="border-t border-gold pt-4"><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 text-sm text-ink/70">{d}</p></div>)}</div>
  </section>;
}
