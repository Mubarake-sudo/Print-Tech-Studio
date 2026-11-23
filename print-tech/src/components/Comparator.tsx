"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import MaskTitle from "./MaskTitle";
import { comparisons } from "@/data/projects";

function Pane({ src, label, title, dark }: { src: string; label: string; title: string; dark: boolean }) {
  return src ? (
    <Image
      src={src}
      alt={`${title} - état ${label.toLowerCase()}`}
      fill
      className="object-cover"
      sizes="(max-width:768px) 100vw, 33vw"
      loading="lazy"
      decoding="async"
    />
  ) : (
    <div
      className={`absolute inset-0 grid place-items-center text-xs tracking-widest ${
        dark ? "bg-[#1c1c1f] text-white/40" : "bg-[#0d0d10] text-gold/60"
      }`}
    >
      PHOTO {label}
    </div>
  );
}

function Slider({ title, before, after }: { title: string; before: string; after: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  const move = (x: number) => {
    if (!box.current) return;
    const r = box.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  };

  return (
    <figure className="group">
      <div
        ref={box}
        className="relative aspect-[4/3] select-none overflow-hidden rounded-2xl [touch-action:pan-y] cursor-ew-resize border border-white/10 shadow-lg"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e.clientX);
        }}
        tabIndex={0}
        aria-label={`Comparateur avant/après pour : ${title}. Utilisez les flèches pour ajuster.`}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
        }}
      >
        <Pane src={after} label="APRÈS" title={title} dark={false} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Pane src={before} label="AVANT" title={title} dark />
        </div>
        <span className="absolute top-3 left-3 rounded bg-ink/85 backdrop-blur px-2.5 py-1 text-xs font-semibold text-white/90">
          AVANT
        </span>
        <span className="absolute top-3 right-3 rounded bg-gold px-2.5 py-1 text-xs font-bold text-ink shadow">
          APRÈS
        </span>
        <div className="absolute inset-y-0 w-0.5 bg-gold" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold text-ink grid place-items-center text-sm font-bold shadow-md">
            &harr;
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm font-medium text-white/80">{title}</figcaption>
    </figure>
  );
}

export default function Comparator() {
  return (
    <section id="avant-apres" className="px-5 md:px-10 py-24">
      <MaskTitle className="h2 max-w-3xl mb-10" text="Avant, après : la transformation." />
      <div className="grid md:grid-cols-3 gap-8">
        {comparisons.map((c) => (
          <Slider key={c.id} title={c.title} before={c.before} after={c.after} />
        ))}
      </div>
    </section>
  );
}
