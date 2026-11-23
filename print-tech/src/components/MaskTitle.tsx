"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function MaskTitle({ text, as:Tag="h2", className="", accent="" }:{text:string; as?:"h1"|"h2"; className?:string; accent?:string}) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".w", { yPercent:105 }, { yPercent:0, duration:1.1, ease:"expo.out", stagger:0.05, scrollTrigger:{ trigger:ref.current, start:"top 88%" } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return <Tag ref={ref} className={className}>{text.split(" ").map((w,i)=>(
    <span key={i} className="inline-block overflow-hidden align-bottom mr-[.25em]"><span className={`w inline-block ${w===accent?"text-gold2":""}`}>{w}</span></span>))}</Tag>;
}
