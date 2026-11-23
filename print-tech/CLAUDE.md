# PRINT-TECH STUDIO - guide de développement (v2 : hero photo)
Le hero utilise la photo `public/images/hero.jpg` (plus de scène 3D). Logo : `public/images/logo-print-tech.png` (fond transparent, texte blanc : à utiliser sur fond sombre). Menu : Accueil, À propos, Expertise, Réalisations, Processus, Pourquoi nous choisir ?, Contact (ids de section correspondants). Vidéo du hero : renseigner `heroVideo` dans siteConfig.ts.
## Charte
Fond `#09090B` (ink), sections claires `#F7F7F5` / `#FFFFFF`, accent unique or `#D4AF37` (reflets `#E5C76B`). Pas de dégradé arc-en-ciel, pas d'emoji, pas de lorem ipsum. Logo directement sur fond sombre, sans cartouche. Titres Syne, corps Plus Jakarta Sans. Titres en `clamp()` (classes `.h1`, `.h2`). Boutons min 44x44px (`.btn`).
## Architecture
- `src/data/siteConfig.ts` : coordonnées, réseaux, `waLink()`. Source unique.
- `src/data/projects.ts` : réalisations et comparaisons avant/après (champs `image`, `before`, `after`).
- `src/components/` : SmoothScroll (Lenis + ScrollTrigger), MaskTitle (révélation masquée), Navbar (drawer), Savoir (tracé CNC), Comparator, Gallery (filtres + lightbox), Footer, WhatsAppFab.
## Conventions GSAP / Three.js
- Toujours `gsap.context()` + `ctx.revert()` au démontage.
- Easings : `expo.out`, `power3.out`, `cubic-bezier(.22,1,.36,1)`. Jamais de linéaire (sauf scrub).
- Respecter `prefers-reduced-motion`. Une seule chose bouge à la fois.
- Comparateur : `touch-action: pan-y` pour ne pas bloquer le scroll vertical.

## Médias bruts (photos et vidéos)
1. Déposez vos fichiers (.JPG, .jpeg, .HEIC, .PNG, .MOV, .MP4) dans `public/media/raw/` (ignoré par git, sous-dossiers acceptés).
2. `npm install` puis `npm run optimize:media`. Options : `-- --keep-audio` (garde un son AAC 96k, sinon vidéos muettes), `-- --force` (régénère tout).
3. Résultat : images `.webp` (max 1920px) dans `public/media/optimized/images/`; vidéos `.mp4` H.264/yuv420p (max 1280px, faststart) + miniature `.jpg` dans `public/media/optimized/videos/`; la liste des chemins est dans `public/media/optimized/manifest.json`.
4. Dans `src/data/projects.ts`, renseignez `media` d'un projet avec les chemins du manifest (`{type:"image",src}` ou `{type:"video",src,poster}`). La première entrée sert de couverture. Les vidéos ne se chargent qu'au clic (aucun autoplay).
5. Pour l'Avant / Après, utilisez les chemins `.webp` dans `comparisons`.
