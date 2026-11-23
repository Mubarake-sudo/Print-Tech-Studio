"use client";
import { useState } from "react";
import Image from "next/image";
import MaskTitle from "./MaskTitle";
import { projects, categories, type Project, type Media } from "@/data/projects";
import { siteConfig, waLink } from "@/data/siteConfig";

const coverOf = (p: Project) => {
  const m = p.media?.[0];
  return m ? (m.type === "image" ? m.src : m.poster) : p.image;
};

function VideoItem({ src, poster, title }: { src: string; poster: string; title: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10">
      {on ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-contain"
        />
      ) : (
        <>
          <Image
            src={poster}
            alt={`Miniature vidéo pour ${title}`}
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
            decoding="async"
          />
          <button
            type="button"
            aria-label={`Lire la vidéo de ${title}`}
            onClick={() => setOn(true)}
            className="absolute inset-0 grid place-items-center bg-black/30 hover:bg-black/50 transition-colors"
          >
            <span className="w-16 h-16 rounded-full bg-gold text-ink grid place-items-center text-2xl pl-1 shadow-lg transform transition-transform hover:scale-110">
              &#9654;
            </span>
          </button>
        </>
      )}
    </div>
  );
}

function MediaItem({ m, title }: { m: Media; title: string }) {
  return m.type === "video" ? (
    <VideoItem src={m.src} poster={m.poster} title={m.title ?? title} />
  ) : (
    <div className="relative aspect-[4/3] bg-[#111] rounded-xl overflow-hidden border border-white/10">
      <Image
        src={m.src}
        alt={m.alt ?? `${title} - réalisation PRINT-TECH STUDIO`}
        fill
        className="object-cover"
        sizes="100vw"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function Gallery() {
  const [f, setF] = useState<string>("Tout");
  const [sel, setSel] = useState<Project | null>(null);

  const list = f === "Tout" ? projects : projects.filter((p) => p.category === f);

  return (
    <section id="realisations" className="bg-bone text-ink px-5 md:px-10 py-24">
      <MaskTitle className="h2 mb-8" text="Nos réalisations" />
      <div className="flex flex-wrap gap-2 mb-8">
        {["Tout", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setF(c)}
            className={`btn !py-2 border transition-colors ${
              f === c ? "bg-ink text-gold border-ink" : "border-ink/20 hover:border-ink/50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setSel(p)}
            className="text-left group focus:outline-none focus:ring-2 focus:ring-gold rounded-2xl"
          >
            <div className="relative aspect-[4/3] bg-ink overflow-hidden rounded-2xl shadow-md border border-black/5">
              {coverOf(p) ? (
                <Image
                  src={coverOf(p)!}
                  alt={`${p.title} - réalisation ${p.category} par PRINT-TECH STUDIO`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center text-gold/60 text-xs tracking-widest">
                  PHOTO À AJOUTER
                </div>
              )}
            </div>
            <h3 className="mt-3 font-bold text-lg text-ink group-hover:text-gold transition-colors">{p.title}</h3>
            <p className="text-sm text-ink/65">{p.category}</p>
            <span className="mt-2 inline-block text-xs font-semibold tracking-widest text-[#8a6d12]">
              VOIR LE PROJET &rarr;
            </span>
          </button>
        ))}
      </div>

      {sel && (
        <div
          className="fixed inset-0 z-[70] bg-ink/95 text-bone overflow-y-auto p-5 backdrop-blur-sm"
          onClick={() => setSel(null)}
          role="dialog"
          aria-label={`Détails du projet ${sel.title}`}
        >
          <div className="max-w-2xl mx-auto mt-10 pb-16" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="btn btn-line mb-4 hover:border-gold hover:text-gold"
              onClick={() => setSel(null)}
            >
              Fermer
            </button>
            <div className="space-y-4">
              {sel.media?.length ? (
                sel.media.map((m, i) => <MediaItem key={i} m={m} title={sel.title} />)
              ) : sel.image ? (
                <MediaItem m={{ type: "image", src: sel.image }} title={sel.title} />
              ) : (
                <div className="aspect-[4/3] bg-[#111] grid place-items-center text-gold/60 text-xs tracking-widest rounded-xl">
                  PHOTO À AJOUTER
                </div>
              )}
            </div>
            <h3 className="font-display text-3xl mt-6 text-white">{sel.title}</h3>
            <p className="mt-2 text-white/75 leading-relaxed">{sel.description}</p>
            <div className="mt-5 space-y-1.5 p-4 rounded-xl bg-white/5 border border-white/10 text-sm">
              <p>
                <b className="text-gold">Matériaux :</b> {sel.materials.join(", ")}
              </p>
              <p>
                <b className="text-gold">Techniques :</b> {sel.techniques.join(", ")}
              </p>
            </div>
            <a
              className="btn btn-gold mt-6 w-full sm:w-auto inline-flex justify-center"
              target="_blank"
              rel="noopener noreferrer"
              href={waLink(
                siteConfig.phones[0].wa,
                `Bonjour PRINT-TECH STUDIO, je souhaite commander un projet similaire : ${sel.title}.`
              )}
            >
              Commander un projet similaire sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
