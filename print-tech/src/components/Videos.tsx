"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Volume2, VolumeX, Maximize2, X } from "lucide-react";
import MaskTitle from "./MaskTitle";
import { videos } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

function VideoCard({ v, onOpenModal }: { v: (typeof videos)[0]; onOpenModal: (v: (typeof videos)[0]) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Détection d'entrée dans le viewport via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (videoRef.current) {
              videoRef.current.play().catch(() => {
                // Ignore l'erreur si autoplay bloqué par le navigateur
              });
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { rootMargin: "80px 0px", threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      setIsMuted(nextMuted);
      videoRef.current.muted = nextMuted;
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div ref={containerRef} className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[calc((100%-3rem)/3)]">
      <div className="relative aspect-video overflow-hidden rounded-[1.75rem] bg-[#111114] border border-white/10 group shadow-lg">
        {inView && v.src ? (
          <video
            ref={videoRef}
            src={v.src}
            poster={v.poster}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full bg-black object-cover"
          />
        ) : v.poster ? (
          <Image
            src={v.poster}
            alt={`Miniature vidéo : ${v.title}`}
            fill
            sizes="(max-width:768px) 85vw, 34vw"
            loading="lazy"
            decoding="async"
            className="object-cover"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center text-xs tracking-widest text-gold/50">
            VIDÉO À AJOUTER
          </span>
        )}

        {/* Boutons d'interaction son et agrandissement */}
        {v.src && (
          <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity">
            <button
              onClick={toggleSound}
              type="button"
              aria-label={isMuted ? `Activer le son pour ${v.title}` : `Couper le son pour ${v.title}`}
              className="flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs text-white backdrop-blur border border-white/20 hover:bg-gold hover:text-ink transition-colors"
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              <span>{isMuted ? "Son coupé" : "Son actif"}</span>
            </button>
            <button
              onClick={() => onOpenModal(v)}
              type="button"
              aria-label={`Agrandir la vidéo ${v.title}`}
              className="w-8 h-8 rounded-full bg-black/70 grid place-items-center text-white backdrop-blur border border-white/20 hover:bg-gold hover:text-ink transition-colors"
            >
              <Maximize2 size={14} />
            </button>
          </div>
        )}
      </div>
      <p className="mt-3 text-sm text-[#D1D5DB] font-medium leading-snug">{v.title}</p>
    </div>
  );
}

export default function Videos() {
  const track = useRef<HTMLDivElement>(null);
  const [modalVideo, setModalVideo] = useState<(typeof videos)[0] | null>(null);

  const go = (d: number) => {
    track.current?.scrollBy({ left: d * track.current.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="videos" className="px-3 sm:px-6 lg:px-10 py-16">
      <div className="rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-[#0b0b0d] px-5 sm:px-8 py-16 md:py-24">
        <div className="text-center">
          <MaskTitle className="h2 uppercase" text="Nos vidéos" />
          <p className="lead mt-3 max-w-xl mx-auto">
            Enseignes allumées, chantiers et poses : nos réalisations en mouvement.
          </p>
        </div>

        <div
          ref={track}
          className="mt-12 flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((v) => (
            <VideoCard key={v.id} v={v} onOpenModal={setModalVideo} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button onClick={() => go(-1)} aria-label="Vidéo précédente" className="btn btn-line !px-0 w-12">
            <ChevronLeft />
          </button>
          <button onClick={() => go(1)} aria-label="Vidéo suivante" className="btn btn-line !px-0 w-12">
            <ChevronRight />
          </button>
          <a
            href={siteConfig.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            Voir plus de vidéos sur TikTok <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Modal plein écran si demandé par l'utilisateur */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-[80] bg-black/95 grid place-items-center p-4"
          onClick={() => setModalVideo(null)}
          role="dialog"
          aria-label={modalVideo.title}
        >
          <button
            aria-label="Fermer la vidéo"
            className="absolute top-4 right-4 w-11 h-11 grid place-items-center text-gold bg-black/50 rounded-full border border-gold/40 hover:bg-gold hover:text-ink transition"
            onClick={() => setModalVideo(null)}
          >
            <X size={20} />
          </button>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <video
              src={modalVideo.src}
              poster={modalVideo.poster}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[80vh] rounded-2xl bg-black object-contain border border-white/10"
            />
            <p className="mt-3 text-center text-white/90 text-base font-semibold">{modalVideo.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
