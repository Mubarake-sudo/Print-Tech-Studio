"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight, MessageCircle, MapPin, CheckCircle2, Wrench, Layers, Sparkles } from "lucide-react";
import MaskTitle from "./MaskTitle";
import { projects, categories, type Project } from "@/data/projects";
import { siteConfig, waLink } from "@/data/siteConfig";

export default function Gallery() {
  const [f, setF] = useState<string>("Tout");
  const [sel, setSel] = useState<Project | null>(null);

  // Verrouillage du scroll en arrière-plan et gestion de la touche Échap
  useEffect(() => {
    if (sel) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSel(null);
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [sel]);

  const list = f === "Tout" ? projects : projects.filter((p) => p.category === f);

  return (
    <section id="realisations" className="bg-bone text-ink px-5 md:px-10 py-24">
      <div className="max-w-7xl mx-auto">
        <MaskTitle className="h2 mb-8" text="Nos réalisations" />

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Tout", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setF(c)}
              className={`btn !py-2 border transition-all duration-300 ${
                f === c
                  ? "bg-ink text-gold border-ink shadow-md"
                  : "border-ink/20 hover:border-ink/50 text-ink/80 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grille des réalisations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSel(p)}
              className="text-left group focus:outline-none focus:ring-2 focus:ring-gold rounded-2xl flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full bg-ink overflow-hidden rounded-2xl shadow-md border border-black/10">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} - réalisation ${p.category} par PRINT-TECH STUDIO`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-gold/60 text-xs tracking-widest">
                    PHOTO À AJOUTER
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold tracking-wider flex items-center gap-1.5 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/20">
                    Découvrir les détails <ArrowRight size={14} className="text-gold" />
                  </span>
                </div>
              </div>

              <div className="mt-3.5 flex flex-col flex-1">
                <span className="text-xs font-semibold tracking-wider uppercase text-gold2 text-[#8a6d12]">
                  {p.category}
                </span>
                <h3 className="mt-1 font-bold text-lg text-ink group-hover:text-gold transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink/70 line-clamp-2 leading-relaxed">
                  {p.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold tracking-widest text-ink group-hover:text-gold transition-colors pt-1 border-t border-ink/10">
                  VOIR LE PROJET &rarr;
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL DÉTAILS PROJET — Plein écran optimisé Desktop & Mobile avec scroll fluide (data-lenis-prevent) */}
      {sel && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md overflow-y-auto overscroll-contain p-4 sm:p-6 lg:p-10 animate-fade-in"
          onClick={() => setSel(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Détails du projet ${sel.title}`}
        >
          <div
            data-lenis-prevent="true"
            className="max-w-5xl mx-auto my-6 sm:my-10 bg-[#0e0e11] text-bone rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barre d'en-tête de la modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141418]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-bold text-gold">
                  {sel.category}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSel(null)}
                aria-label="Fermer la vue détails"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-gold hover:text-ink text-white/80 transition-colors text-xs font-semibold border border-white/10"
              >
                <span>Fermer</span>
                <X size={16} />
              </button>
            </div>

            {/* Corps de la modal : Grille 2 colonnes sur Desktop */}
            <div className="p-6 sm:p-8 lg:p-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Colonne Gauche : Photo Haute Définition & Défis techniques */}
              <div className="lg:col-span-6 space-y-6">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black border border-white/15 shadow-xl group">
                  <Image
                    src={sel.image}
                    alt={`${sel.title} - réalisation PRINT-TECH STUDIO`}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Localisation */}
                {sel.location && (
                  <div className="flex items-center gap-2 text-xs text-[#D1D5DB] bg-white/5 px-4 py-2.5 rounded-xl border border-white/10">
                    <MapPin size={16} className="text-gold shrink-0" />
                    <span className="font-medium">{sel.location}</span>
                  </div>
                )}

                {/* Challenge & Solution d'atelier (si présent) */}
                {(sel.challenge || sel.solution) && (
                  <div className="space-y-4 pt-2">
                    {sel.challenge && (
                      <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-amber-500/70 text-xs sm:text-sm text-white/80 space-y-1">
                        <p className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                          Le défi technique
                        </p>
                        <p className="leading-relaxed">{sel.challenge}</p>
                      </div>
                    )}
                    {sel.solution && (
                      <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-gold text-xs sm:text-sm text-white/80 space-y-1">
                        <p className="font-bold text-gold uppercase tracking-wider text-[11px]">
                          La solution PRINT-TECH STUDIO
                        </p>
                        <p className="leading-relaxed">{sel.solution}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Colonne Droite : Textes détaillés, Matériaux, Techniques et Devis WhatsApp */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {sel.title}
                  </h2>
                  {sel.subtitle && (
                    <p className="mt-2 text-sm sm:text-base text-gold2 font-medium">
                      {sel.subtitle}
                    </p>
                  )}

                  {/* Description complète et soignée */}
                  <div className="mt-5 text-sm sm:text-base text-white/85 leading-relaxed space-y-3 font-normal border-t border-white/10 pt-5">
                    <p>{sel.description}</p>
                  </div>

                  {/* Points clés & Highlights */}
                  {sel.highlights && sel.highlights.length > 0 && (
                    <div className="mt-6">
                      <p className="text-xs uppercase tracking-widest font-bold text-gold flex items-center gap-1.5 mb-3">
                        <Sparkles size={14} /> Points forts de la réalisation
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2.5">
                        {sel.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-white/80 bg-white/[0.04] p-2.5 rounded-lg border border-white/5"
                          >
                            <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Fiche technique Matériaux & Techniques */}
                  <div className="mt-6 space-y-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm">
                    <div>
                      <p className="font-semibold text-gold flex items-center gap-2 mb-1.5">
                        <Layers size={15} /> Matériaux mis en œuvre :
                      </p>
                      <ul className="list-disc list-inside text-white/75 space-y-1 pl-1">
                        {sel.materials.map((mat, i) => (
                          <li key={i}>{mat}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <p className="font-semibold text-gold flex items-center gap-2 mb-1.5">
                        <Wrench size={15} /> Techniques & Savoir-faire d&apos;atelier :
                      </p>
                      <ul className="list-disc list-inside text-white/75 space-y-1 pl-1">
                        {sel.techniques.map((tec, i) => (
                          <li key={i}>{tec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bouton de demande de devis WhatsApp proéminent */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <a
                    className="btn btn-gold w-full text-center py-3.5 px-6 font-bold text-base flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={waLink(
                      siteConfig.phones[0].wa,
                      `Bonjour PRINT-TECH STUDIO, je viens de consulter votre réalisation "${sel.title}" sur votre site et je souhaite obtenir un devis pour un projet similaire.`
                    )}
                  >
                    <MessageCircle size={20} className="shrink-0" />
                    <span>Demander un devis pour ce projet sur WhatsApp</span>
                  </a>
                  <p className="text-center text-[12px] text-white/50">
                    Réponse rapide et étude personnalisée sans engagement par l&apos;équipe technique.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
