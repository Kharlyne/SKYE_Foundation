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
    "Construire une école inclusive, c’est permettre à chaque enfant de trouver sa place, d’apprendre à son rythme et d’évoluer dans un environnement bienveillant, respectueux des différences.",
  fullContent:
    "L’école inclusive repose sur une idée essentielle : chaque enfant, quelles que soient ses particularités, doit pouvoir apprendre, participer et s’épanouir dans un cadre adapté à ses besoins. Pour les enfants autistes et plus largement les enfants en situation de handicap ou de neurodiversité, cela implique une meilleure compréhension de leurs réalités au quotidien.\n\nUne école inclusive ne signifie pas seulement accueillir la différence, mais aussi mettre en place des conditions concrètes pour favoriser la réussite de tous. Cela peut passer par des aménagements pédagogiques, un dialogue constant entre les familles et les professionnels, une sensibilisation des autres élèves, ainsi qu’une écoute attentive des besoins spécifiques de l’enfant.\n\nL’inclusion scolaire se construit aussi grâce à la coopération. Enseignants, parents, accompagnants et direction doivent pouvoir travailler ensemble afin de créer un environnement rassurant, stimulant et respectueux. Lorsqu’un enfant se sent compris, soutenu et valorisé, il peut développer sa confiance, ses compétences et son autonomie.\n\nPromouvoir l’inclusion à l’école, c’est enfin transmettre une valeur essentielle à tous les élèves : apprendre à vivre ensemble, dans le respect des différences, de la diversité et de la dignité de chacun.",
  image: techEdu,
  articleImage: techEdu,
  category: "Projet"
},
  {
    id: 3,
    date: "15 Mars 2026",
    title: "2025 : une année fondatrice pour notre engagement",
    excerpt: "L’année 2025 a marqué une étape décisive dans la structuration de notre fondation, à travers des actions de sensibilisation, des témoignages, un travail de terrain et la préparation de notre lancement officiel prévu le 2 avril 2026.",
     fullContent: [
    {
      type: "paragraph",
      text: "L’année 2025 a été une étape essentielle dans la construction de notre fondation."
    },
    {
      type: "paragraph",
      text: "En tant que collectif de parents, nous avons mené un travail de fond, à la fois humain et de terrain, afin de mieux comprendre les réalités vécues et d’orienter nos actions de manière concrète et pertinente."
    },
    {
      type: "paragraph",
      text: "Plusieurs initiatives ont vu le jour :"
    },
    {
      type: "list",
      items: [
        "Des actions de sensibilisation à travers des vidéos et témoignages diffusés sur nos réseaux",
        "Une interview marquante retraçant le parcours d’une maman, du diagnostic à l’acceptation",
        "La mobilisation de personnes alliées à notre cause, qui ont contribué à relayer et amplifier notre message",
        "La création de contenus par des groupes d’enfants, donnant une parole authentique et précieuse"
      ]
    },
    {
      type: "paragraph",
      text: "Dans cette dynamique, une bande dessinée a été réalisée à partir des mots et ressentis des enfants, afin de proposer un outil de sensibilisation accessible à tous. Celle-ci sera mise à disposition sur notre site pour une utilisation libre dans un objectif de sensibilisation."
    },
        {
      type: "paragraph",
      text: "En parallèle, nous avons apporté un soutien, de manière officieuse, à une initiative au Cameroun. Cette expérience nous a permis d’observer, d’apprendre et d’approfondir notre compréhension du terrain, tant au niveau local qu’international."
    },
       {
      type: "paragraph",
      text: "Ce travail d’investigation, mené depuis plusieurs années en tant que parents engagés, nous a permis de poser des bases solides, d’identifier les besoins réels et de définir des actions que nous pouvons concrètement mettre en place."
    },
    {
      type: "paragraph",
      text: "Aujourd’hui, forts de ce parcours, nous sommes prêts à franchir une nouvelle étape."
    },
    {
      type: "paragraph",
      text: "Le lancement officiel de la fondation est prévu le 2 avril 2026."
    },
    {
      type: "paragraph",
      text: "Nous remercions chaleureusement toutes les personnes qui nous ont déjà soutenus et accompagnés dans cette aventure."
    },
    {
      type: "paragraph",
      text: "Et pour celles et ceux qui souhaitent s’engager à nos côtés, soutenir nos actions ou simplement en savoir plus : vous êtes les bienvenus."
    },
    {
      type: "paragraph",
      text: "Ce travail d’investigation, mené depuis plusieurs années en tant que parents engagés, nous a permis de poser des bases solides, d’identifier les besoins réels et de définir des actions que nous pouvons concrètement mettre en place."
    }
    
  ],
    articleImage: bilan, // Remplace par ton image HD dédiée si nécessaire
    image:bilan,
    category: "Actualité"
  }
];