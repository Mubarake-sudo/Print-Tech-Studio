// Source unique des coordonnées. Modifiez ici, tout le site suit.
export const siteConfig = {
  name:"PRINT-TECH STUDIO", owner:"Abdullah Issah",
  address:"Marcory Sans Fil au Palmier, Abidjan, Côte d'Ivoire",
  email:"Abdullahissah63@gmail.com",
  phones:[
    { label:"+225 07 17 10 77 36", tel:"+2250717107736", wa:"2250717107736", short:"07 17 10 77 36" },
    { label:"+225 07 19 55 55 70", tel:"+2250719555570", wa:"2250719555570", short:"07 19 55 55 70" },
  ],
  socials:{
    facebook:"https://www.facebook.com/profile.php?id=61589467804432",
    tiktok:"https://www.tiktok.com/@printtechstudio",
    instagram:"https://www.instagram.com/studioprinttech?lqvp=MWg0ZHVpemxrZWtkNg==",
  },
  heroVideo:"/media/optimized/videos/v1.mp4",
  heroPoster:"/media/optimized/videos/v1.jpg",
  defaultMessage:"Bonjour PRINT-TECH STUDIO, je souhaite un devis pour un projet d'enseigne, façade, décoration intérieure ou signalétique.",
};
export const waLink = (wa:string, msg:string = siteConfig.defaultMessage) => `https://wa.me/${wa}?text=${encodeURIComponent(msg)}`;
export const navLinks = [["Accueil","top"],["À propos","a-propos"],["Expertise","expertise"],["Réalisations","realisations"],["Processus","processus"],["Pourquoi nous choisir ?","pourquoi"],["Contact","contact"]];
