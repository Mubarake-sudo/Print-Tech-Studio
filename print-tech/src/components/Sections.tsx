import MaskTitle from "./MaskTitle";
import { siteConfig } from "@/data/siteConfig";
export function About() {
  return <section id="a-propos" className="px-5 lg:px-10 py-24 grid lg:grid-cols-2 gap-10 items-start">
    <div><p className="text-gold2 tracking-[.25em] text-xs mb-4">À PROPOS</p>
      <MaskTitle className="h2" text="Un studio d'Abidjan pour les marques qui veulent se faire voir."/></div>
    <div className="space-y-5 text-white/75">
      <p>{siteConfig.name} accompagne commerces, entreprises et institutions dans la création de leur image : conception graphique, impression grand format, signalétique, décoration intérieure et habillage de façades.</p>
      <p>Dirigé par {siteConfig.owner}, le studio maîtrise l'ensemble de la chaîne, du dessin sur Adobe Illustrator et Photoshop à la découpe CNC et laser, jusqu'à la pose sur site.</p>
      <p className="text-gold2">Alucobond, plexiglas, acrylique, LED : des matériaux choisis pour durer sous le climat d'Abidjan.</p>
    </div>
  </section>;
}
const steps = [["01","Échange et devis","Vous nous décrivez votre besoin sur WhatsApp ou par téléphone. Nous vous répondons avec un devis clair."],["02","Conception","Maquette graphique sur mesure, validée avec vous avant toute fabrication."],["03","Fabrication","Découpe CNC et laser, impression, assemblage et câblage LED dans notre atelier."],["04","Pose et suivi","Installation soignée sur site et accompagnement après livraison."]];
export function Process() {
  return <section id="processus" className="px-5 lg:px-10 py-24">
    <p className="text-gold2 tracking-[.25em] text-xs mb-4">PROCESSUS</p>
    <MaskTitle className="h2 max-w-3xl mb-12" text="De l'idée à la pose, en quatre étapes."/>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{steps.map(([n,t,d])=><div key={n} className="border-t border-gold pt-5"><span className="text-gold2 font-extrabold text-3xl">{n}</span><h3 className="mt-3 text-xl">{t}</h3><p className="mt-2 text-sm text-white/70">{d}</p></div>)}</div>
  </section>;
}
const why = [["Maîtrise complète","Conception, fabrication et pose réunies : un seul interlocuteur, aucun intermédiaire."],["Matériaux durables","Alucobond, acrylique et LED sélectionnés pour tenir dans le temps."],["Sur mesure","Chaque enseigne ou façade est dessinée pour votre marque et votre local."],["Réactivité","Réponse rapide sur WhatsApp et devis sans attente."]];
export function Why() {
  return <section id="pourquoi" className="bg-bone text-ink px-5 lg:px-10 py-24">
    <p className="text-[#8a6d12] tracking-[.25em] text-xs mb-4">POURQUOI NOUS CHOISIR ?</p>
    <MaskTitle className="h2 max-w-3xl mb-12" text="La rigueur d'un atelier, le regard d'un studio."/>
    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">{why.map(([t,d])=><div key={t} className="border-l-2 border-gold pl-5"><h3 className="text-xl">{t}</h3><p className="mt-1 text-ink/70">{d}</p></div>)}</div>
  </section>;
}
