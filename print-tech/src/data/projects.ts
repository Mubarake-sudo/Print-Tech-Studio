export type Category = "Enseignes lumineuses" | "Façades Alucobond" | "Lettres 3D & CNC" | "Vitrines & Panneaux";
export const categories: Category[] = ["Enseignes lumineuses", "Façades Alucobond", "Lettres 3D & CNC", "Vitrines & Panneaux"];

export type Media =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster: string; title?: string };

export interface Project {
  id: string;
  title: string;
  category: Category;
  materials: string[];
  techniques: string[];
  description: string;
  image: string;
  media?: Media[];
}

// 1. SECTION NOS RÉALISATIONS (6 projets synchronisés avec les images et vidéos optimisées)
export const projects: Project[] = [
  {
    id: "enseigne-lumineuse-pharmacie-bingerville",
    title: "Pharmacie Bingerville",
    category: "Enseignes lumineuses",
    materials: ["Plexiglas diffusant", "LED haute intensité", "Alucobond"],
    techniques: ["Découpe laser haute précision", "Rétroéclairage LED étanche", "Assemblage structure"],
    description: "Conception et installation d'une enseigne lumineuse grand format pour la Pharmacie Bingerville, garantissant un repérage immédiat de jour comme de nuit.",
    image: "/media/optimized/images/enseigne-lumineuse-pharmacie-bingerville.webp",
    media: [
      { type: "image", src: "/media/optimized/images/enseigne-lumineuse-pharmacie-bingerville.webp", alt: "Enseigne lumineuse de la Pharmacie Bingerville réalisée par PRINT-TECH STUDIO" },
      { type: "video", src: "/media/optimized/videos/v1.mp4", poster: "/media/optimized/videos/v1.jpg", title: "Pose et allumage de l'enseigne Pharmacie Bingerville" }
    ]
  },
  {
    id: "habillage-facade-alucobond-foodivoire",
    title: "FoodIvoire",
    category: "Façades Alucobond",
    materials: ["Panneaux Alucobond composite", "Ossature aluminium", "Fixations invisibles"],
    techniques: ["Rainurage & pliage CNC", "Fraisage d'angles", "Pose sur ossature ventilée"],
    description: "Habillage intégral de façade commerciale en panneaux composites Alucobond pour FoodIvoire. Finition moderne, résistance durable aux UV et au climat d'Abidjan.",
    image: "/media/optimized/images/habillage-facade-alucobond-foodivoire.webp",
    media: [
      { type: "image", src: "/media/optimized/images/habillage-facade-alucobond-foodivoire.webp", alt: "Habillage de façade composite Alucobond FoodIvoire par PRINT-TECH STUDIO" },
      { type: "video", src: "/media/optimized/videos/v2.mp4", poster: "/media/optimized/videos/v2.jpg", title: "Installation des panneaux Alucobond FoodIvoire" }
    ]
  },
  {
    id: "lettres-3d-decoupe-cnc-maison-sanaa",
    title: "Maison Sanaa",
    category: "Lettres 3D & CNC",
    materials: ["Acrylique haute densité", "Inox brossé", "Modules LED 12V"],
    techniques: ["Découpe numérique CNC", "Chants polis miroir", "Rétroéclairage halo indirect"],
    description: "Fabrication de lettres 3D en relief avec usinage CNC au millimètre pour la Maison Sanaa, apportant une identité élégante, statutaire et raffinée.",
    image: "/media/optimized/images/lettres-3d-decoupe-cnc-maison-sanaa.webp",
    media: [
      { type: "image", src: "/media/optimized/images/lettres-3d-decoupe-cnc-maison-sanaa.webp", alt: "Lettres 3D en relief usinées par découpe CNC pour Maison Sanaa" },
      { type: "video", src: "/media/optimized/videos/v3.mp4", poster: "/media/optimized/videos/v3.jpg", title: "Découpe CNC en atelier pour Maison Sanaa" }
    ]
  },
  {
    id: "habillage-vitrine-raffinement-boutique",
    title: "Raffinement Boutique",
    category: "Vitrines & Panneaux",
    materials: ["Vinyle polymère haute adhérence", "Film sablé décoratif", "Filtre anti-décoloration UV"],
    techniques: ["Impression grand format éco-solvant", "Lamination protectrice mate", "Pose sans bulle"],
    description: "Habillage graphique complet de la devanture et des vitrines de Raffinement Boutique, conjuguant attractivité commerciale et intimité.",
    image: "/media/optimized/images/habillage-vitrine-raffinement-boutique.webp",
    media: [
      { type: "image", src: "/media/optimized/images/habillage-vitrine-raffinement-boutique.webp", alt: "Habillage décoratif et signalétique de vitrine Raffinement Boutique" },
      { type: "video", src: "/media/optimized/videos/v5.mp4", poster: "/media/optimized/videos/v5.jpg", title: "Pose d'adhésifs grand format vitrine" }
    ]
  },
  {
    id: "totem-publicitaire-grand-format-marjorel",
    title: "Totem Marjorel",
    category: "Vitrines & Panneaux",
    materials: ["Acier tubulaire galvanisé", "Tôles alu thermo-laquées", "Profils lumineux LED"],
    techniques: ["Châssis mécano-soudé", "Découpe laser", "Scellement chimique au sol"],
    description: "Conception, fabrication et implantation sur site d'un totem signalétique vertical grand format pour Marjorel, assurant un repérage à 360 degrés.",
    image: "/media/optimized/images/totem-publicitaire-grand-format-marjorel.webp",
    media: [
      { type: "image", src: "/media/optimized/images/totem-publicitaire-grand-format-marjorel.webp", alt: "Totem publicitaire vertical grand format Marjorel par PRINT-TECH STUDIO" },
      { type: "video", src: "/media/optimized/videos/v7.mp4", poster: "/media/optimized/videos/v7.jpg", title: "Implantation et allumage du totem Marjorel" }
    ]
  },
  {
    id: "enseigne-neon-led-k-lounge",
    title: "K-Lounge",
    category: "Enseignes lumineuses",
    materials: ["Néon flexible LED silicone nouvelle génération", "Support acrylique transparent 8mm", "Transformateur 12V"],
    techniques: ["Façonnage thermique", "Gravure CNC pour passage de fils", "Fixation sur entretoises inox"],
    description: "Création artistique d'une enseigne néon LED sur mesure pour le K-Lounge, ambiance lumineuse nocturne spectaculaire et consommation électrique maîtrisée.",
    image: "/media/optimized/images/enseigne-neon-led-k-lounge.webp",
    media: [
      { type: "image", src: "/media/optimized/images/enseigne-neon-led-k-lounge.webp", alt: "Enseigne lumineuse néon LED sur mesure pour K-Lounge" },
      { type: "video", src: "/media/optimized/videos/v6.mp4", poster: "/media/optimized/videos/v6.jpg", title: "Effets lumineux et finition néon LED K-Lounge" }
    ]
  }
];

// 2. SECTION AVANT / APRÈS (3 comparateurs interactifs haute résolution)
export const comparisons = [
  {
    id: "comparateur-facade-broderie-elephant",
    title: "Façade commerciale - Broderie Éléphant",
    before: "/media/optimized/images/avant-facade-broderie-elephant.webp",
    after: "/media/optimized/images/apres-facade-broderie-elephant.webp"
  },
  {
    id: "comparateur-vitrine-la-baguette-dor",
    title: "Habillage vitrine - La Baguette d'Or",
    before: "/media/optimized/images/avant-vitrine-la-baguette-dor.webp",
    after: "/media/optimized/images/apres-vitrine-la-baguette-dor.webp"
  },
  {
    id: "comparateur-enseigne-chez-maliya",
    title: "Enseigne lumineuse - Chez Maliya",
    before: "/media/optimized/images/avant-enseigne-chez-maliya.webp",
    after: "/media/optimized/images/apres-enseigne-chez-maliya.webp"
  }
];

// 3. SECTION NOS VIDÉOS (7 vidéos de chantier et réalisations v1 à v7 avec miniatures optimisées)
export const videos = [
  {
    id: "v1",
    title: "Pose et mise en lumière d'une enseigne de pharmacie",
    src: "/media/optimized/videos/v1.mp4",
    poster: "/media/optimized/videos/v1.jpg"
  },
  {
    id: "v2",
    title: "Habillage intégral de façade commerciale Alucobond",
    src: "/media/optimized/videos/v2.mp4",
    poster: "/media/optimized/videos/v2.jpg"
  },
  {
    id: "v3",
    title: "Découpe numérique CNC et usinage de précision en atelier",
    src: "/media/optimized/videos/v3.mp4",
    poster: "/media/optimized/videos/v3.jpg"
  },
  {
    id: "v4",
    title: "Assemblage et rétroéclairage de lettres 3D en relief",
    src: "/media/optimized/videos/v4.mp4",
    poster: "/media/optimized/videos/v4.jpg"
  },
  {
    id: "v5",
    title: "Pose d'adhésifs grand format sur vitrine commerciale",
    src: "/media/optimized/videos/v5.mp4",
    poster: "/media/optimized/videos/v5.jpg"
  },
  {
    id: "v6",
    title: "Fabrication et test d'une enseigne néon LED d'ambiance",
    src: "/media/optimized/videos/v6.mp4",
    poster: "/media/optimized/videos/v6.jpg"
  },
  {
    id: "v7",
    title: "Installation sur site et raccordement électrique sécurisé",
    src: "/media/optimized/videos/v7.mp4",
    poster: "/media/optimized/videos/v7.jpg"
  }
];
