"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import MaskTitle from "./MaskTitle";
import { comparisons } from "@/data/projects";
function Pane({src,label,dark}:{src:string;label:string;dark:boolean}) {
  return src
    ? <Image src={src} alt={label} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw"/>
    : <div className={`absolute inset-0 grid place-items-center text-xs tracking-widest ${dark?"bg-[#1c1c1f] text-white/40":"bg-[#0d0d10] text-gold/60"}`}>PHOTO {label}</div>;
}
function Slider({ title, before, after }:{title:string;before:string;after:string}) {
  const box = useRef<HTMLDivElement>(null);
  const [pos,setPos] = useState(50);
  const move = (x:number)=>{ const r = box.current!.getBoundingClientRect(); setPos(Math.min(100,Math.max(0,((x-r.left)/r.width)*100))); };
  return <figure>
    <div ref={box} className="relative aspect-[4/3] select-none overflow-hidden [touch-action:pan-y] cursor-ew-resize"
      onPointerDown={e=>{ e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX); }}
      onPointerMove={e=>{ if(e.currentTarget.hasPointerCapture(e.pointerId)) move(e.clientX); }}>
      <Pane src={after} label="APRÈS" dark={false}/>
      <div className="absolute inset-0" style={{ clipPath:`inset(0 ${100-pos}% 0 0)` }}><Pane src={before} label="AVANT" dark/></div>
      <span className="absolute top-3 left-3 bg-ink/80 text-xs px-2 py-1">AVANT</span><span className="absolute top-3 right-3 bg-gold text-ink text-xs px-2 py-1">APRÈS</span>
      <div className="absolute inset-y-0 w-0.5 bg-gold" style={{ left:`${pos}%` }}><div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gold text-ink grid place-items-center text-sm">&harr;</div></div>
    </div>
    <figcaption className="mt-3 text-sm text-white/70">{title}</figcaption>
  </figure>;
}
export default function Comparator() {
  return <section id="avant-apres" className="px-5 md:px-10 py-24">
    <MaskTitle className="h2 max-w-3xl mb-10" text="Avant, après : la transformation."/>
    <div className="grid md:grid-cols-3 gap-8">{comparisons.map(c=><Slider key={c.id} title={c.title} before={c.before} after={c.after}/>)}</div>
  </section>;
}
