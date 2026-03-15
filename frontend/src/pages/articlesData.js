// src/data/articlesData.js

// Importation des images pour permettre à Vite de les inclure dans le bundle
import event1 from "../assets/images/frenchhandicap.png";
import event1_detail from "../assets/images/englishhandicap.png";
import techEdu from "../assets/images/image4.jpg";
import bilan from "../assets/images/image3.jpg";

export const articlesData = [
  {
    id: 1,
    date: "2 Avril 2026",
    title: "Allié de l'autisme ",
    excerpt: "Rejoignez-nous ce 2 Avril pour une heure de partage dans le cadre d'une initiative locale à l'occasion de la Journée mondiale de sensibilisation à l'autisme.",
    fullContent: "Le 2 avril est une date qui nous tient particulièrement à cœur. C'est la Journée mondiale de sensibilisation à l'autisme, et cette année, nous vous invitons à nous rejoindre pour un moment de partage et d'échange. Cette initiative locale est née de la volonté de rassembler parents, professionnels et citoyens autour d'une cause commune : favoriser l'inclusion des enfants autistes dans notre société. Au programme : témoignages de familles, interventions de spécialistes, et moments de convivialité. Venez nombreux !",
    image: event1,
    gallery: [event1, event1_detail], // Tableau d'images pour le sidebar
    category: "Événement"
  },
  {
    id: 2,
    date: "15 Mars 2026",
    title: "au service de l'éducation",
    excerpt: "Comment nos nouvelles solutions digitales transforment l'apprentissage dans les zones rurales.",
    fullContent: "Dans le cadre de notre programme d'inclusion numérique, nous avons déployé des outils interactifs dans plus de 50 écoles rurales. Ces solutions permettent aux élèves d'accéder à des ressources pédagogiques jusqu'alors inaccessibles, tout en offrant aux enseignants un suivi personnalisé de la progression de chaque enfant. Les premiers résultats montrent une augmentation significative de l'engagement scolaire et une meilleure compréhension des concepts fondamentaux.",
    image: techEdu,
    articleImage: techEdu, // Remplace par ton image HD dédiée si nécessaire
    category: "Projet"
  },
  {
    id: 3,
    date: "1 Mars 2026",
    title: "Bilan annuel : Nos réussites",
    excerpt: "Une rétrospective sur les actions menées l'année passée grâce à votre soutien.",
    fullContent: "L'année 2025 a été une année charnière pour notre organisation. Grâce à la générosité de nos donateurs et à l'engagement infatigable de nos bénévoles, nous avons pu soutenir plus de 200 familles, lancer trois nouveaux projets d'envergure nationale et renforcer notre présence sur le terrain. Ce bilan annuel détaille chacune de nos interventions, les défis rencontrés et, surtout, les sourires que nous avons pu créer. Merci de faire partie de cette aventure humaine exceptionnelle.",
    image: bilan,
    articleImage: bilan, // Remplace par ton image HD dédiée si nécessaire
    category: "Actualité"
  }
];