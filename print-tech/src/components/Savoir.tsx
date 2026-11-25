"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskTitle from "./MaskTitle";

const skills = [
  ["Façades Alucobond", "Habillage composite durable, pliage et pose soignés."],
  ["Découpe CNC & laser", "Précision au dixième de millimètre sur plexiglas, acrylique et aluminium."],
  ["Lettres 3D & enseignes LED", "Relief, rétroéclairage et finitions sur mesure."],
  ["Impression grand format", "Vitrines, panneaux et bâches, du dessin Illustrator à la pose."],
  ["Décoration intérieure", "Habillage mural design, néons LED d'ambiance, découpe décorative et signalétique sur mesure."],
];

// Pièces du logo : [points, couleur de remplissage final]
const parts = [
  ["140,6 288,6 152,210 8,210", "#09090B"],
  ["300,18 428,210 176,210", "#FFD60A"],
  ["323,6 466,6 630,248 485,248", "#E6007E"],
  ["494,6 640,6 806,248 660,248", "#00A3E0"],
];

export default function Savoir() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".lg-line", { strokeDashoffset: 0 });
      gsap.set(".lg-fill", { opacity: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.set(".lg-line", { strokeDasharray: 1, strokeDashoffset: 1, willChange: "stroke-dashoffset" });
      gsap.set(".lg-fill", { opacity: 0, willChange: "opacity" });
      gsap.timeline({
        scrollTrigger: {
          trigger: ".lg-wrap",
          start: "top 80%",
          end: "bottom 45%",
          scrub: 1,
        },
      })
        .to(".lg-line", { strokeDashoffset: 0, ease: "none", stagger: 0.25, duration: 1 })
        .to(".lg-fill", { opacity: 1, ease: "none", stagger: 0.1, duration: 0.5 }, ">-0.2");
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="expertise" ref={ref} className="bg-bone text-ink px-5 lg:px-10 py-20 md:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <MaskTitle className="h2 max-w-xl" text="Un savoir-faire d'atelier, une précision industrielle." />
        <div className="lg-wrap justify-self-center lg:justify-self-end w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[420px]">
          <svg viewBox="-6 -6 824 266" className="w-full h-auto overflow-visible" fill="none" aria-hidden>
            {parts.map(([p, c]) => (
              <polygon key={p} points={p} className="lg-fill" fill={c === "#09090B" ? "transparent" : c} fillOpacity={0.9} />
            ))}
            {parts.map(([p]) => (
              <polygon key={p + "l"} points={p} pathLength={1} className="lg-line" stroke="#D4AF37" strokeWidth="5" strokeLinejoin="round" />
            ))}
          </svg>
        </div>
      </div>

      {/* Grille responsive harmonieuse pour 5 prestations (2 colonnes mobile/tablette, 5 colonnes desktop) */}
      <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map(([t, d]) => (
          <div key={t} className="border-t border-gold pt-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-ink leading-snug">{t}</h3>
              <p className="mt-2 text-sm text-ink/75 leading-relaxed">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
