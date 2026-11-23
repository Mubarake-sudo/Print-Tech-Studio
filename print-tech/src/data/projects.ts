export type Category = "Enseignes lumineuses"|"Façades Alucobond"|"Lettres 3D & CNC"|"Vitrines & Panneaux";
export const categories: Category[] = ["Enseignes lumineuses","Façades Alucobond","Lettres 3D & CNC","Vitrines & Panneaux"];
export type Media =
  | { type:"image"; src:string; alt?:string }
  | { type:"video"; src:string; poster:string }; // poster = miniature .jpg générée par le script
export interface Project { id:string; title:string; category:Category; materials:string[]; techniques:string[]; description:string;
  // MÉDIAS MIXTES : après `npm run optimize:media`, copiez les chemins de public/media/optimized/manifest.json. Exemple :
  // media:[{type:"image",src:"/media/optimized/images/facade-1.webp"},{type:"video",src:"/media/optimized/videos/chantier-1.mp4",poster:"/media/optimized/videos/chantier-1.jpg"}]
  media?:Media[];
  image?:string; // PHOTO FINALE : déposez le fichier dans public/images/projects/ puis écrivez "/images/projects/nom.jpg"
}
export const projects: Project[] = [
  { id:"enseigne-boutique", title:"Enseigne lumineuse de boutique", category:"Enseignes lumineuses", materials:["Plexiglas","LED","Alucobond"], techniques:["Découpe laser","Rétroéclairage LED"], description:"Enseigne rétroéclairée à haute visibilité de jour comme de nuit." },
  { id:"facade-alucobond", title:"Habillage de façade commerciale", category:"Façades Alucobond", materials:["Alucobond","Structure aluminium"], techniques:["Pliage","Découpe CNC"], description:"Façade composite aux lignes nettes, durable et résistante aux intempéries." },
  { id:"lettres-3d", title:"Lettres 3D en relief", category:"Lettres 3D & CNC", materials:["Acrylique","Inox","LED"], techniques:["Découpe CNC","Finition polie"], description:"Lettres découpées sur mesure, avec ou sans éclairage." },
  { id:"vitrine", title:"Habillage de vitrine", category:"Vitrines & Panneaux", materials:["Vinyle","Impression grand format"], techniques:["Impression numérique","Pose"], description:"Vitrine habillée pour attirer l'oeil et valoriser votre offre." },
  { id:"panneau", title:"Panneau publicitaire grand format", category:"Vitrines & Panneaux", materials:["Bâche","Dibond"], techniques:["Impression grand format"], description:"Panneaux visibles de loin, conçus pour durer." },
  { id:"enseigne-caisson", title:"Caisson lumineux double face", category:"Enseignes lumineuses", materials:["Aluminium","Plexiglas","LED"], techniques:["Fabrication sur mesure"], description:"Caisson perpendiculaire pour une visibilité dans la rue." },
];
// AVANT / APRÈS : remplacez before/after par vos vraies photos (même cadrage idéalement).
export const comparisons = [
  { id:"c1", title:"Façade de boutique", before:"" /* "/images/projects/avant-1.jpg" */, after:"" /* "/images/projects/apres-1.jpg" */ },
  { id:"c2", title:"Vitrine commerciale", before:"", after:"" },
  { id:"c3", title:"Enseigne lumineuse", before:"", after:"" },
];
