// Logo vectoriel (SVG) : net à toute taille, sans grain ni flou.
export default function Logo({ className="h-14 w-auto" }:{ className?:string }) {
  const t = { fontFamily:"var(--font-jakarta), sans-serif", fontWeight:800, fontStyle:"italic" } as const;
  return <svg viewBox="0 0 810 405" className={className} role="img" aria-label="PRINT-TECH STUDIO" xmlns="http://www.w3.org/2000/svg">
    <polygon points="140,6 288,6 152,210 8,210" fill="#09090B" stroke="#A3A3A8" strokeWidth="6" strokeLinejoin="round"/>
    <polygon points="300,18 428,210 176,210" fill="#FFD60A"/>
    <polygon points="323,6 466,6 630,248 485,248" fill="#E6007E"/>
    <polygon points="494,6 640,6 806,248 660,248" fill="#00A3E0"/>
    <text x="4" y="338" fontSize="104" fill="#FFFFFF" style={t} textLength="800" lengthAdjust="spacingAndGlyphs">PRINT-TECH</text>
    <text x="330" y="402" fontSize="70" fill="#E8B923" style={t} textLength="470" lengthAdjust="spacingAndGlyphs">STUDIO</text>
  </svg>;
}
