# PRINT-TECH STUDIO - site vitrine

Site portfolio de PRINT-TECH STUDIO (Abidjan) : enseignes lumineuses, façades Alucobond, lettres 3D et CNC, impression grand format.

## Stack
Next.js 14 (App Router) + TypeScript, Tailwind CSS 3, GSAP + ScrollTrigger (animations), Lenis (défilement fluide), lucide-react (icônes), `next/image` (images optimisées AVIF/WebP), `sharp` + `ffmpeg-static` + `heic-convert` (script d'optimisation des médias). Polices : Plus Jakarta Sans (titres) et Inter (texte).

## Démarrer
Prérequis : Node.js 18.18 ou plus récent.
```bash
npm install
npm run dev        # http://localhost:3000 (ou 3001 si le port est pris)
npm run build      # vérifie TypeScript et crée la version de production
npm start          # lance la version de production
```

## Où modifier quoi
- `src/data/siteConfig.ts` : téléphones, WhatsApp, e-mail, adresse, réseaux sociaux, menu, vidéo du hero.
- `src/data/projects.ts` : réalisations, comparaisons Avant/Après, vidéos.
- `src/components/` : Hero, Navbar, Logo (SVG vectoriel), Videos, Gallery, Comparator, Footer...
- `public/images/` : `hero.webp` (bannière ordinateur), `hero-mobile.webp` (bannière mobile).
- Détails de la charte et des conventions : `CLAUDE.md`.

## Ajouter photos et vidéos sans ralentir le site
1. Déposez vos fichiers bruts (`.JPG`, `.HEIC`, `.PNG`, `.MOV`, `.MP4`) dans `public/media/raw/` (ignoré par git).
2. Lancez `npm run optimize:media` (options : `-- --keep-audio`, `-- --force`).
   - Photos : converties en `.webp`, 1920px maximum.
   - Vidéos : `.mp4` H.264 1280px maximum, sans audio, démarrage rapide, plus une miniature `.jpg`.
3. Ouvrez `public/media/optimized/manifest.json` et copiez les chemins :
   - galerie : champ `media` d'un projet dans `projects.ts` ;
   - Avant/Après : `before` et `after` dans `comparisons` ;
   - section "Nos vidéos" : `src` (`.mp4`) et `poster` (`.jpg`) dans `videos`.

Règles de performance déjà appliquées :
- Les vidéos ne se chargent qu'au clic (`preload="none"`), jamais en lecture automatique : seule la miniature est téléchargée.
- Les images passent par `next/image` : redimensionnées, converties en AVIF/WebP et chargées au fil du défilement.
- Seule la bannière du haut est prioritaire.

Conseils :
- Gardez chaque vidéo courte (10 à 30 secondes) et sous 5 Mo si possible.
- Pour des vidéos longues, hébergez-les sur YouTube, Vimeo ou Cloudinary et ouvrez-les au clic, au lieu de les mettre dans `public/`.
- Évitez de commiter les fichiers bruts : ils pèsent lourd et ne servent qu'au script.

## Déploiement
Le plus simple est Vercel : poussez le dépôt sur GitHub, importez-le, et le build est automatique.

## Nommer vos fichiers (important)
Le script `npm run optimize:media` garde le **nom du fichier** pour créer le fichier optimisé (`mon-fichier.JPG` devient `mon-fichier.webp`). Les sous-dossiers de `public/media/raw/` ne comptent pas : seul le nom compte, et **chaque nom doit être unique**. Règles : minuscules, sans accents ni espaces, tirets `-` entre les mots, numéros sur 2 chiffres (`01`, `02`). Extension libre (`.JPG`, `.HEIC`, `.PNG`, `.MOV`, `.MP4`).

Placez toujours vos photos et vidéos dans `public/media/raw/` (jamais directement dans `public/images/`, réservé à la bannière et au logo). Les noms ci-dessous servent à les retrouver dans `manifest.json`.

| Où ça s'affiche | Modèle de nom | Exemple |
|---|---|---|
| Réalisations (photos) | `real-<categorie>-<projet>-<NN>` | `real-facade-pharmacie-cocody-01.jpg` |
| Réalisations (vidéo d'un projet) | `real-<categorie>-<projet>-video` | `real-facade-pharmacie-cocody-video.mov` |
| Avant / Après | `avant-apres-<projet>-avant` et `avant-apres-<projet>-apres` | `avant-apres-boutique-marcory-avant.jpg` |
| Section "Nos vidéos" | `video-<sujet>` | `video-pose-enseigne-lumineuse.mov` |

`<categorie>` correspond aux filtres de la galerie : `enseigne` (Enseignes lumineuses), `facade` (Façades Alucobond), `lettres` (Lettres 3D et CNC), `vitrine` (Vitrines et Panneaux). Un projet = un `<projet>` ; la photo `01` est la couverture. Pour l'Avant/Après, gardez le même cadrage entre les deux photos.

Branchement après le script :
- Réalisations : dans `projects.ts`, `media:[{type:"image",src:"/media/optimized/images/real-facade-pharmacie-cocody-01.webp"}, ...]`.
- Avant/Après : `before` et `after` de `comparisons` avec les deux `.webp`.
- Vidéos : `src:"/media/optimized/videos/video-pose-enseigne-lumineuse.mp4"` et `poster:"/media/optimized/videos/video-pose-enseigne-lumineuse.jpg"`.
