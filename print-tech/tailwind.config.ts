import type { Config } from "tailwindcss";
export default { content:["./src/**/*.{ts,tsx}"], theme:{extend:{colors:{ink:"#09090B",bone:"#F7F7F5",gold:"#D4AF37",gold2:"#E5C76B"},fontFamily:{display:["var(--font-jakarta)"],body:["var(--font-inter)"]}}}, plugins:[] } satisfies Config;
