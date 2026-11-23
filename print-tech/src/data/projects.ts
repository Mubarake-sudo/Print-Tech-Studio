export type Category = "Enseignes lumineuses" | "Façades Alucobond" | "Lettres 3D & CNC" | "Vitrines & Panneaux";
export const categories: Category[] = ["Enseignes lumineuses", "Façades Alucobond", "Lettres 3D & CNC", "Vitrines & Panneaux"];

export type Media =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster: string; title?: string };

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: Category;
  location?: string;
  materials: string[];
  techniques: string[];
  description: string;
  challenge?: string;
  solution?: string;
  highlights?: string[];
  image: string;
  media?: Media[];
}

// 1. SECTION NOS RÉALISATIONS (Descriptions complètes, techniques et détaillées pour chaque projet)
export const projects: Project[] = [
  {
    id: "enseigne-lumineuse-pharmacie-bingerville",
    title: "Pharmacie du Palais de Justice",
    subtitle: "Enseigne lumineuse monumentale & caisson rétroéclairé haute visibilité",
    category: "Enseignes lumineuses",
    location: "Bingerville, Abidjan (Côte d'Ivoire)",
    materials: [
      "Plexiglas coulé diffusant 4mm (anti-jaunissement UV)",
      "Panneaux composites Alucobond 4mm laqué blanc & vert médical",
      "Modules LED SMD étanches IP67 basse consommation 12V",
      "Structure mécano-soudée acier traité anti-corrosion"
    ],
    techniques: [
      "Découpe numérique laser assistée par ordinateur",
      "Rétroéclairage LED uniforme sans zones d'ombre",
      "Thermoformage et pliage de chants étanches",
      "Raccordement électrique sécurisé avec boîtiers étanches IP68"
    ],
    description:
      "Conception, usinage en atelier et pose intégrale d'une enseigne lumineuse grand format pour la Pharmacie du Palais de Justice à Bingerville. Le projet a été pensé pour conférer au bâtiment une présence visuelle prestigieuse et statutaire, garantissant un repérage immédiat de jour comme de nuit à plus de 200 mètres le long de l'axe principal.",
    challenge:
      "Assurer une luminosité puissante et homogène sur l'ensemble de la longueur sans aucun effet de halo ou de point chaud, tout en garantissant une résistance absolue face aux fortes chaleurs et à l'humidité tropicale d'Abidjan.",
    solution:
      "Intégration d'une double ligne de modules LED haute luminescence avec lentilles de diffusion grand angle 160°, montés sur un châssis ventilé en aluminium avec fixations renforcées contre les vents côtiers.",
    highlights: [
      "Visibilité nocturne longue portée (> 200 mètres)",
      "Consommation électrique optimisée (-65% vs néon traditionnel)",
      "Étanchéité certifiée IP67 adaptée au climat équatorial",
      "Croix et typographies conformes aux normes de signalétique officinale"
    ],
    image: "/media/optimized/images/enseigne-lumineuse-pharmacie-bingerville.webp",
    media: [
      {
        type: "image",
        src: "/media/optimized/images/enseigne-lumineuse-pharmacie-bingerville.webp",
        alt: "Enseigne lumineuse monumentale de la Pharmacie du Palais de Justice à Bingerville réalisée par PRINT-TECH STUDIO"
      }
    ]
  },
  {
    id: "habillage-facade-alucobond-foodivoire",
    title: "Façade Commerciale FoodIvoire",
    subtitle: "Habillage architectural en panneaux composites Alucobond & calepinage sur mesure",
    category: "Façades Alucobond",
    location: "Abidjan, Côte d'Ivoire",
    materials: [
      "Panneaux Alucobond 4mm avec noyau minéral ignifuge",
      "Finition laquée PVDF multicouche haute résistance UV",
      "Ossature secondaire en profilés aluminium anodisé",
      "Joints d'étanchéité élastomère & visserie inox A2 invisible"
    ],
    techniques: [
      "Usinage et rainurage en V sur fraiseuse CNC grand format",
      "Pliage mécanique de cassettes aux angles nets 90°",
      "Calepinage au niveau laser rotatif millimétré",
      "Montage sur système de façade rideau ventilée"
    ],
    description:
      "Transformation architecturale complète et modernisation de la façade de l'enseigne FoodIvoire. L'intervention métamorphose un bâtiment urbain standard en un complexe commercial moderne aux lignes nettes et épurées, incarnant le dynamisme et l'hygiène de la marque agroalimentaire.",
    challenge:
      "Rattraper d'importants faux aplombs sur la maçonnerie existante tout en assurant un alignement rigoureusement parfait des joints creux sur toute la périphérie du bâtiment.",
    solution:
      "Mise en œuvre d'une ossature d'adaptation réglable en 3 dimensions avec cassettes composites façonnées sur mesure en atelier, offrant une ventilation naturelle réduisant la chaleur transmise au bâtiment.",
    highlights: [
      "Finition ultra-moderne sans aucune vis ni fixation apparente",
      "Bouclier thermique isolant réduisant l'échauffement intérieur",
      "Garantie anti-décoloration et résistance aux intempéries",
      "Valorisation instantanée de l'attractivité commerciale"
    ],
    image: "/media/optimized/images/habillage-facade-alucobond-foodivoire.webp",
    media: [
      {
        type: "image",
        src: "/media/optimized/images/habillage-facade-alucobond-foodivoire.webp",
        alt: "Habillage intégral de façade commerciale Alucobond FoodIvoire par PRINT-TECH STUDIO"
      }
    ]
  },
  {
    id: "lettres-3d-decoupe-cnc-maison-sanaa",
    title: "Maison Sanaa — Enseigne & Lettres 3D",
    subtitle: "Usinage numérique CNC de précision & rétroéclairage halo or raffiné",
    category: "Lettres 3D & CNC",
    location: "Zone 4, Abidjan (Côte d'Ivoire)",
    materials: [
      "Acrylique coulé haute densité 15mm poli miroir",
      "Placage inox brossé avec traitement anti-oxydation",
      "Micro-modules LED blanc chaud 3000K spécial halo",
      "Entretoises de fixation usinées en laiton massif"
    ],
    techniques: [
      "Fraisage numérique CNC à haute vitesse de rotation",
      "Polissage thermique des chants au diamant",
      "Laquage métallisé or avec vernis polyuréthane de protection",
      "Installation avec gabarit de perçage au micron"
    ],
    description:
      "Création sur mesure de l'identité en relief pour l'enseigne de prestige Maison Sanaa. Les lettres découpées en 3D apportent une signature haut de gamme et sophistiquée, idéale pour un positionnement luxe. L'éclairage indirect crée une aura dorée feutrée qui sublime la texture du mur d'accueil.",
    challenge:
      "Réaliser des découpes calligraphiques extrêmement fines et complexes tout en conservant une rigidité structurelle parfaite et une diffusion lumineuse sans ombrage.",
    solution:
      "Usinage multi-passes avec fraises hélicoïdales de petit diamètre et implantation de mini-LEDs réparties dans un caisson creusé à l'arrière de chaque caractère.",
    highlights: [
      "Effet de relief et de lévitation murale saisissant",
      "Ambiance lumineuse halo chaleureuse et non éblouissante",
      "Finition artisanale d'orfèvre sur acrylique poli",
      "Consommation minime (moins de 45 Watts au total)"
    ],
    image: "/media/optimized/images/lettres-3d-decoupe-cnc-maison-sanaa.webp",
    media: [
      {
        type: "image",
        src: "/media/optimized/images/lettres-3d-decoupe-cnc-maison-sanaa.webp",
        alt: "Lettres 3D en relief découpées sur CNC pour Maison Sanaa par PRINT-TECH STUDIO"
      }
    ]
  },
  {
    id: "habillage-vitrine-raffinement-boutique",
    title: "Raffinement Boutique",
    subtitle: "Enseigne bandeau en relief & habillage de devanture commerciale",
    category: "Vitrines & Panneaux",
    location: "Koumassi Remblais, Carrefour Ibo, Abidjan",
    materials: [
      "Bandeau caisson Alucobond noir mat satiné",
      "Lettres relief thermo-découpées finition or scintillant",
      "Vinyle adhésif polymère haute adhérence avec filtre anti-UV",
      "Spots LED orientables intégrés sous corniche"
    ],
    techniques: [
      "Impression numérique haute définition 1200 DPI encres éco-solvants",
      "Lamination protectrice mate anti-reflets et anti-rayures",
      "Découpe assistée par ordinateur de lettrages adhésifs",
      "Pose sur vitrage sous tension constante sans bulle d'air"
    ],
    description:
      "Conception globale de l'habillage de la façade et des vitrines de Raffinement Boutique à Koumassi. Le bandeau supérieur noir profond avec son logo couronné et ses lettres dorées offre un contraste saisissant, tandis que les informations de contact et le design des vitrages accueillent la clientèle avec élégance.",
    challenge:
      "Protéger les articles de mode exposés en vitrine contre la décoloration solaire tout en maintenant une visibilité commerciale percutante et une parfaite lisibilité des numéros de téléphone.",
    solution:
      "Combinaison d'un bandeau rigide en composite Alucobond thermo-résistant et de films vitrophanie protecteurs filtrant 98% des rayons ultraviolets.",
    highlights: [
      "Impact visuel fort dès le premier coup d'œil dans la rue",
      "Excellente lisibilité des coordonnées commerciales et réseaux",
      "Protection solaire des vêtements et mannequins exposés",
      "Tenue garantie dans le temps sans décollement ni décoloration"
    ],
    image: "/media/optimized/images/habillage-vitrine-raffinement-boutique.webp",
    media: [
      {
        type: "image",
        src: "/media/optimized/images/habillage-vitrine-raffinement-boutique.webp",
        alt: "Habillage de devanture et vitrine pour Raffinement Boutique à Abidjan par PRINT-TECH STUDIO"
      }
    ]
  },
  {
    id: "totem-publicitaire-grand-format-marjorel",
    title: "Totem Signalétique Marjorel",
    subtitle: "Totem autoportant double-face grand format & intégration LED",
    category: "Vitrines & Panneaux",
    location: "Abidjan, Côte d'Ivoire",
    materials: [
      "Châssis interne tubulaire en acier galvanisé à chaud 60x60mm",
      "Habillage externe en tôles aluminium thermo-laquées 2mm",
      "Faces diffusantes en PMMA opale résistant aux chocs",
      "Platines de fixation avec tiges filetées haute résistance M20"
    ],
    techniques: [
      "Calcul des charges aux vents et dimensionnement de structure",
      "Découpe laser industrielle des lettrages et logos",
      "Rétroéclairage intérieur étanche par réglettes LED haute efficacité",
      "Scellement chimique et coulage de massif béton armé"
    ],
    description:
      "Fabrication d'atelier et érection sur site d'un totem signalétique vertical monumental pour le groupe Marjorel. Cet élément majeur d'orientation permet aux visiteurs, clients et collaborateurs d'identifier instantanément le complexe d'entreprises dès l'entrée du site.",
    challenge:
      "Garantir une stabilité aérodynamique sans faille face aux intempéries violentes et rafales de vent de saison des pluies, tout en conservant une ligne fine et esthétique.",
    solution:
      "Ancrage sur massif en béton armé avec structure mécano-soudée contreventée et trappe de visite technique discrète pour faciliter les opérations de maintenance électrique.",
    highlights: [
      "Repère urbain et signalétique à 360 degrés sur axe passant",
      "Structure ultra-robuste conçue pour une longévité décennale",
      "Éclairage bi-face homogène basse consommation",
      "Finition thermolaquée anti-corrosion adaptée au milieu lagunaire"
    ],
    image: "/media/optimized/images/totem-publicitaire-grand-format-marjorel.webp",
    media: [
      {
        type: "image",
        src: "/media/optimized/images/totem-publicitaire-grand-format-marjorel.webp",
        alt: "Totem signalétique autoportant grand format Marjorel par PRINT-TECH STUDIO"
      }
    ]
  },
  {
    id: "enseigne-neon-led-k-lounge",
    title: "Enseigne Néon LED K-Lounge",
    subtitle: "Création artistique néon flexible silicone & variateur d'ambiance",
    category: "Enseignes lumineuses",
    location: "Marcory / Zone 4, Abidjan (Côte d'Ivoire)",
    materials: [
      "Néon flexible LED silicone nouvelle génération (flex neon 12V)",
      "Plaque support en acrylique optique ultra-transparent 8mm",
      "Câblage argent invisible & connecteurs étanches",
      "Variateur électronique d'intensité lumineuse télécommandé"
    ],
    techniques: [
      "Gravure numérique de rainures guides sur machine CNC",
      "Façonnage thermique et collage polymère des néons flexibles",
      "Soudures électroniques protégées sous gaine thermo-rétractable",
      "Fixation murale sur entretoises inox design décollées du mur"
    ],
    description:
      "Conception artistique et confection sur mesure d'une enseigne néon LED pour le K-Lounge. Cette pièce lumineuse unique insuffle une atmosphère nocturne contemporaine et branchée, devenant le point d'attraction visuel principal pour les photos et partages des clients sur les réseaux sociaux.",
    challenge:
      "Obtenir des courbes calligraphiques parfaites sans rupture de flux lumineux et dissimuler tous les fils d'alimentation sur un fond acrylique totalement transparent.",
    solution:
      "Fraisage arrière au dos du plexiglas pour encastrer le micro-câblage et utilisation d'un néon silicone souple diffusant la lumière à 180° sans aucun point sombre.",
    highlights: [
      "Consommation électrique ultra-basse (12V sécurisé, sans verre)",
      "Attractivité visuelle maximale, optimisée pour Instagram & TikTok",
      "Durée de vie supérieure à 50 000 heures de fonctionnement",
      "Variateur pour ajuster l'intensité entre le jour et la nuit"
    ],
    image: "/media/optimized/images/enseigne-neon-led-k-lounge.webp",
    media: [
      {
        type: "image",
        src: "/media/optimized/images/enseigne-neon-led-k-lounge.webp",
        alt: "Enseigne lumineuse néon LED d'ambiance pour K-Lounge par PRINT-TECH STUDIO"
      }
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
