# PRINT-TECH STUDIO — Portfolio & Vitrine Haute Performance

> **Atelier d'excellence à Abidjan** : enseignes lumineuses, habillage de façades composites Alucobond, découpe numérique CNC & laser, lettres 3D en relief, signalétique et impression grand format.

---

## 1. Présentation du Projet

**PRINT-TECH STUDIO** est une application web vitrine ultra-performante développée pour valoriser les réalisations et l'expertise d'artisanat industriel de l'atelier dirigé par **Abdullah Issah** à Marcory Sans Fil au Palmier, Abidjan (Côte d'Ivoire).

### Stack Technique
- **Framework** : Next.js 14 (App Router) / React 18 / TypeScript 5
- **Styles & Design System** : Tailwind CSS 3 (Palette prestige : Ink `#09090B`, Bone `#F7F7F5`, Or `#D4AF37` / `#E5C76B`)
- **Typographies** : Plus Jakarta Sans (titres percutants H1/H2) et Inter (textes, boutons, micro-typographie)
- **Animations & Défilement** : GSAP 3 + ScrollTrigger (tracés CNC vectoriels, reveals masqués), Lenis (défilement inertiel haute fluidité)
- **Moteur Médias** : Sharp (compression WebP/AVIF), FFmpeg Static (transcodage H.264 FastStart et génération de posters)
- **Icônes & Composants** : Lucide React + SVG vectoriels optimisés

---

## 2. Architecture des Dossiers & Pipeline Médias

```text
Print-Tech-Studio/
├── print-tech/
│   ├── public/
│   │   ├── images/                       # Bannière Hero (hero.webp, hero-mobile.webp)
│   │   └── media/
│   │       ├── raw/                      # Sources brutes déposées (JPG, PNG, HEIC, MOV, MP4)
│   │       ├── optimized/                # Médias générés par le pipeline
│   │       │   ├── images/               # Images .webp (max 1920px, qualité 80)
│   │       │   ├── videos/               # Vidéos .mp4 (H.264, 1280px, faststart) + posters .jpg
│   │       │   └── manifest.json         # Index JSON des médias optimisés
│   │       └── manifest.json             # Miroir direct pour l'accès public
│   ├── scripts/
│   │   └── optimize-media.mjs            # Pipeline automatisé de transcodage et synchronisation
│   ├── src/
│   │   ├── app/                          # App Router (layout.tsx, page.tsx, globals.css)
│   │   ├── components/                   # Composants React (Hero, Gallery, Comparator, Videos, Savoir, Navbar...)
│   │   └── data/
│   │       ├── projects.ts               # Base de données typée des projets, comparateurs et vidéos
│   │       └── siteConfig.ts             # Coordonnées uniques, réseaux sociaux et liens WhatsApp
│   ├── next.config.mjs                   # Configuration Next.js, cache immutable et compression
│   ├── tailwind.config.ts                # Configuration du thème et des tokens graphiques
│   └── tsconfig.json                     # Configuration TypeScript stricte
└── README.md                             # Documentation d'architecture et de référence
```

### Fonctionnement du Pipeline Médias
1. **Dépôt des médias bruts** : Les photos et vidéos sont déposées dans `public/media/raw/`.
2. **Exécution du script** : La commande `npm run optimize:media` parcourt récursivement `raw/` :
   - Les photos (`.jpg`, `.jpeg`, `.png`, `.heic`) sont converties en `.webp` (largeur max 1920px, `fit: inside`, compression 80%).
   - Les vidéos (`.mp4`, `.mov`) sont transcodées en H.264 (`-c:v libx264 -crf 24 -pix_fmt yuv420p -movflags +faststart`, 1280px max) et extraient automatiquement une miniature `.jpg` à `0.5s`.
   - Le catalogue complet est généré dans `public/media/optimized/manifest.json` et synchronisé dans `public/media/manifest.json`.
3. **Consommation applicative** : `src/data/projects.ts` associe directement les chemins `.webp`, `.mp4` et `.jpg` aux interfaces typées (`Project`, `MediaItem`, `Comparison`, `VideoItem`).

---

## 3. Détail des Corrections Apportées

### Diagnostic du problème initial d'affichage
Bien que les fichiers médias aient été ajoutés dans `public/media/raw/`, ils ne s'affichaient pas sur le site après `npm run dev` pour trois raisons identifiées :
1. **Champs vides dans `src/data/projects.ts`** : Les objets `projects`, `comparisons` et `videos` contenaient des chaînes vides `""`, déclenchant l'affichage des placeholders de secours (*"PHOTO À AJOUTER"*, *"VIDÉO À AJOUTER"*).
2. **Vidéos non encodées dans `optimized/videos/`** : Le dossier était vide (seul `.gitkeep` était présent) et `manifest.json` contenait `"videos": []`.
3. **Synchronisation du manifest** : Le fichier n'était écrit que dans `optimized/manifest.json` sans copie miroir à la racine `/media/manifest.json`.

### Synchronisation complète effectuée

#### A. Section Nos Réalisations (6 projets reliés en WebP et vidéo)
1. **Pharmacie Bingerville** (`Enseignes lumineuses`) : `/media/optimized/images/enseigne-lumineuse-pharmacie-bingerville.webp` + vidéo `v1.mp4`.
2. **FoodIvoire** (`Façades Alucobond`) : `/media/optimized/images/habillage-facade-alucobond-foodivoire.webp` + vidéo `v2.mp4`.
3. **Maison Sanaa** (`Lettres 3D & CNC`) : `/media/optimized/images/lettres-3d-decoupe-cnc-maison-sanaa.webp` + vidéo `v3.mp4`.
4. **Raffinement Boutique** (`Vitrines & Panneaux`) : `/media/optimized/images/habillage-vitrine-raffinement-boutique.webp` + vidéo `v5.mp4`.
5. **Totem Marjorel** (`Vitrines & Panneaux`) : `/media/optimized/images/totem-publicitaire-grand-format-marjorel.webp` + vidéo `v7.mp4`.
6. **K-Lounge** (`Enseignes lumineuses`) : `/media/optimized/images/enseigne-neon-led-k-lounge.webp` + vidéo `v6.mp4`.

#### B. Section Avant / Après (3 comparateurs interactifs haute résolution)
1. **Façade** : `avant-facade-broderie-elephant.webp` / `apres-facade-broderie-elephant.webp`
2. **Vitrine** : `avant-vitrine-la-baguette-dor.webp` / `apres-vitrine-la-baguette-dor.webp`
3. **Enseigne** : `avant-enseigne-chez-maliya.webp` / `apres-enseigne-chez-maliya.webp`

#### C. Section Vidéos (7 vidéos de réalisations v1.mp4 à v7.mp4)
- Toutes les vidéos ont été transcodées au format optimisé H.264 FastStart avec posters extraits :
  - `v1.mp4` / `v1.jpg` : Pose et mise en lumière d'une enseigne de pharmacie
  - `v2.mp4` / `v2.jpg` : Habillage intégral de façade commerciale Alucobond
  - `v3.mp4` / `v3.jpg` : Découpe numérique CNC et usinage de précision en atelier
  - `v4.mp4` / `v4.jpg` : Assemblage et rétroéclairage de lettres 3D en relief
  - `v5.mp4` / `v5.jpg` : Pose d'adhésifs grand format sur vitrine commerciale
  - `v6.mp4` / `v6.jpg` : Fabrication et test d'une enseigne néon LED d'ambiance
  - `v7.mp4` / `v7.jpg` : Installation sur site et raccordement électrique sécurisé

---

## 4. Optimisations de Performance Web (Core Web Vitals)

### Images & LCP (Largest Contentful Paint)
- **Préchargement LCP** : Les images Hero (ordinateur et mobile) bénéficient des attributs `priority` et `fetchPriority="high"` pour déclencher leur téléchargement immédiat.
- **Images sous la flottaison** : Attributs `loading="lazy"` et `decoding="async"` appliqués sur la Galerie, les Comparateurs et les miniatures.
- **Zéro CLS (Cumulative Layout Shift)** : Conteneurs à ratio fixe verrouillé (`aspect-[4/3]`, `aspect-video`, `aspect-[5/4]`) avec `sizes` adaptatifs pour garantir une réservation d'espace sans décalage de mise en page.

### Vidéos & Économie de Bande Passante
- **Contrôle via Intersection Observer** : Dans `Videos.tsx`, les éléments `<video>` ne démarrent leur téléchargement et leur lecture (`autoPlay muted loop playsInline`) que lorsqu'ils entrent dans le viewport. Hors écran, la lecture est automatiquement suspendue pour économiser la batterie, le GPU et le réseau.
- **Preload contrôlé** : `preload="metadata"` activé avec affichage d'un poster `.jpg` léger avant intersection.
- **Contrôles utilisateur** : Bouton d'activation/coupure du son direct sur chaque carte et possibilité d'agrandissement en modal plein écran.

### Découpage du Code & Animations 60fps
- **Code Splitting dynamique** : Utilisation de `next/dynamic` sur les composants secondaires (`Comparator`, `Gallery`, `Videos`) pour délester le bundle JavaScript initial et accélérer le FCP (First Contentful Paint).
- **GSAP Context & Sécurité mémoires** : Dans `Savoir.tsx` et `MaskTitle.tsx`, les animations sont encapsulées dans `gsap.context()` avec appel de `ctx.revert()` au démontage.
- **Accessibilité motrice** : Détection du flag `prefers-reduced-motion` avec repli immédiat sur un affichage statique visible sans saccade.
- **En-têtes HTTP de mise en cache** : Configuration de directives `Cache-Control: public, max-age=31536000, immutable` dans `next.config.mjs` pour tous les fichiers médias et images statiques.

---

## 5. Audit de Sécurité & Qualité de Code

### Sécurité Applicative
- **Prévention du Reverse Tabnabbing** : Ajout systématique de `rel="noopener noreferrer"` et `target="_blank"` sur l'ensemble des liens externes (TikTok, Facebook, Instagram, boutons WhatsApp).
- **Injection & XSS** : Absence totale de `dangerouslySetInnerHTML`, de fonctions `eval()` ou de saisie non contrôlée.
- **Masquage d'en-têtes serveur** : `poweredByHeader: false` activé dans la configuration Next.js pour éviter la divulgation de version.
- **Encodage d'URL** : Les messages personnalisés WhatsApp passent par `encodeURIComponent()`.

### Typage TypeScript & Qualité
- **Compilateur TypeScript** : `npx tsc --noEmit` validé avec **0 erreur**.
- **Build de Production** : `npm run build` exécuté avec succès, pages statiques pré-générées (SSG), sans avertissement d'OpenGraph (`metadataBase` configuré).
- **Accessibilité & SEO** : Attributs `alt` détaillés et contextualisés sur chaque image et miniature, labels ARIA explicites sur les boutons d'action.

---

## 6. Guide d'Utilisation des Commandes

### Installation
```bash
cd print-tech
npm install
```

### Traitement et Optimisation des Médias
```bash
# Déposer les photos et vidéos dans public/media/raw/
npm run optimize:media

# Options supplémentaires :
npm run optimize:media -- --keep-audio   # Conserver le flux audio des vidéos
npm run optimize:media -- --force        # Forcer la régénération de tous les médias
```

### Développement Local
```bash
npm run dev
# Ouvrir http://localhost:3000
```

### Build & Déploiement
```bash
npm run build
npm run start
```
