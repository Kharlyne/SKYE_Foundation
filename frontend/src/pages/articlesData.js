// src/data/articlesData.js

// Importation des images pour permettre à Vite de les inclure dans le bundle
import event1 from "../assets/images/frenchhandicap.png";
import event1_detail from "../assets/images/englishhandicap.png";
import techEdu from "../assets/images/ecole.jpg";
import bilan from "../assets/images/avril.png";

export const articlesData = [
  {
    id: 1,
    date: "2 Avril 2026",
    title: "Alliés de l'autisme ",
    excerpt: "Rejoignez-nous ce 2 Avril pour une heure de partage dans le cadre d'une initiative locale à l'occasion de la Journée mondiale de sensibilisation à l'autisme.",
    fullContent: "Le 2 avril est une date qui nous tient particulièrement à cœur. C'est la Journée mondiale de sensibilisation à l'autisme, et cette année, nous vous invitons à nous rejoindre pour un moment de partage et d'échange. Cette initiative locale est née de la volonté de rassembler parents, professionnels et citoyens autour d'une cause commune : Promouvoir l'inclusion des personnes atteintes du trouble du spectre de l'autisme dans le monde.Au programme courte presentation sur l'autisme ,temoignages parents et alliés de l'autisme. Venez nombreux !",
    image: event1,
    gallery: [event1, event1_detail], // Tableau d'images pour le sidebar
    category: "Événement"
  },
 {
  id: 2,
  date: "15 Mars 2026",
  title: "Promouvoir l'inclusion",
  excerpt:
    "Promouvoir l’inclusion, c’est permettre à chaque enfant de se sentir accepté, d’échanger et de partager des moments avec d’autres, quels que soient leurs besoins ou particularités.",
  fullContent: [
    {
      type: "paragraph",
      text:"Promouvoir l’inclusion, c’est permettre à chaque enfant de se sentir accepté, d’échanger et de partager des moments avec d’autres, quels que soient leurs besoins ou particularités. Notre objectif est de favoriser des espaces et des activités où tous les enfants et leurs familles peuvent se rencontrer et partager des expériences enrichissantes. "
    },
     {
      type: "paragraph",
      text:"Par exemple, le 27 juin, nous organisons une marche détente inclusive, ouverte aux enfants à besoins spécifiques et neurotypiques, ainsi qu’à leurs familles et aux citoyens sensibles à l’autisme. Cette activité vise à offrir un moment agréable de partage, de rencontre et d’échanges, avec quelques animations pour permettre aux enfants de se côtoyer, de jouer et de mieux se comprendre."
    },
     {
      type: "paragraph",
      text:"D’autres événements viendront compléter cette démarche tout au long de l’année, afin de promouvoir l’inclusion dans la vie quotidienne et de créer des occasions concrètes où chacun peut se sentir valorisé et accueilli. "
    }
  ] ,
  image: techEdu,
  articleImage: techEdu,
  category: "Projet"
},
  {
    id: 3,
    date: "15 Mars 2026",
    title: "2025 : une année prépatatoire pour notre projet",
    excerpt: "En 2025, nous avons commencé à poser les bases de notre action, en nous engageant progressivement dans la sensibilisation à l’autisme.",
     fullContent: [
    {
      type: "paragraph",
      text: "L’année 2025 a été une étape essentielle dans la construction de notre fondation."
    },
    {
      type: "paragraph",
      text: "En tant que collectif de parents, nous avons initié des actions concrètes pour faire connaître les réalités vécues par les enfants et leurs familles :"
    },
    {
      type: "list",
      items: [
        "La réalisation et la diffusion de vidéos de sensibilisation, comprenant le témoignage marquant d’une maman retraçant son parcours, du diagnostic à l’acceptation. Cette vidéo est disponible sur notre chaîne YouTube Skye Foundation. (VIDEO1 TEMOIGNAGE D'UE MAMAN VIVANT AVEC UN ENFANT AUTISTE)",
        "La participation de jeunes enfants et de personnes volontaires dans la création de contenus vidéos pour sensibiliser à l’autisme. Toutes ces vidéos peuvent être visionnées sur notre site et sur YouTube Skye Foundation. ",
        "La préparation d’une bande dessinée basée sur les mots et ressentis des enfants, destinée à devenir un outil de sensibilisation accessible à tous, et qui sera mise à disposition sur notre site. ",
      ]
    },
    {
      type: "paragraph",
      text: "Ces actions, menées de manière officieuse, nous ont permis de prendre contact avec différentes personnes et de mieux comprendre comment structurer notre futur projet."
    },
    {
      type: "paragraph",
      text: "Aujourd’hui, forts de cette première expérience, nous sommes prêts à franchir une nouvelle étape : le lancement officiel de la fondation, prévu le 2 avril 2026."
    },       {
      type: "paragraph",
      text: "Nous remercions chaleureusement toutes les personnes qui nous ont déjà soutenus et accompagnés dans cette aventure. Et pour celles et ceux qui souhaitent s’engager à nos côtés, soutenir nos actions ou simplement en savoir plus : vous êtes les bienvenus"
    }
  ],
    articleImage: bilan, // Remplace par ton image HD dédiée si nécessaire
    image:bilan,
    category: "Actualité"
  }
];