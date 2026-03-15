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
  title: "Les clés d'une école inclusive",
  excerpt:
    "Construire une école inclusive, c’est permettre à chaque enfant de trouver sa place, d’apprendre à son rythme et d’évoluer dans un environnement bienveillant, respectueux des différences.",
  fullContent:
    "L’école inclusive repose sur une idée essentielle : chaque enfant, quelles que soient ses particularités, doit pouvoir apprendre, participer et s’épanouir dans un cadre adapté à ses besoins. Pour les enfants autistes et plus largement les enfants en situation de handicap ou de neurodiversité, cela implique une meilleure compréhension de leurs réalités au quotidien.\n\nUne école inclusive ne signifie pas seulement accueillir la différence, mais aussi mettre en place des conditions concrètes pour favoriser la réussite de tous. Cela peut passer par des aménagements pédagogiques, un dialogue constant entre les familles et les professionnels, une sensibilisation des autres élèves, ainsi qu’une écoute attentive des besoins spécifiques de l’enfant.\n\nL’inclusion scolaire se construit aussi grâce à la coopération. Enseignants, parents, accompagnants et direction doivent pouvoir travailler ensemble afin de créer un environnement rassurant, stimulant et respectueux. Lorsqu’un enfant se sent compris, soutenu et valorisé, il peut développer sa confiance, ses compétences et son autonomie.\n\nPromouvoir l’inclusion à l’école, c’est enfin transmettre une valeur essentielle à tous les élèves : apprendre à vivre ensemble, dans le respect des différences, de la diversité et de la dignité de chacun.",
  image: techEdu,
  articleImage: techEdu,
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