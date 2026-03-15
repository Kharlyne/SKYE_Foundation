import Tablets from "../assets/images/Icon awesome-tablets.svg";
import Syringe from "../assets/images/Icon metro-injection.svg";
import Bubbles from "../assets/images/Icon ionic-ios-chatbubbles.svg";

// Importe tes images ici
import img1 from "../assets/images/image2.jpg";
import img2 from "../assets/images/image3.jpg";
import img3 from "../assets/images/image4.jpg";

export const servicesList = [
  {
    id: 1,
    image: img1,
    icon: Bubbles,
    titleSmall: "ÉCOUTE & SOUTIEN",
    title: "Permanence d'écoute",
    description: "Un espace de parole bienveillant pour partager votre quotidien et ne plus vous sentir isolé(e)."
  },
  {
    id: 2,
    image: img2,
    icon: Tablets,
    titleSmall: "ACCOMPAGNEMENT",
    title: "Guidance parentale",
    description: "Conseils pratiques et outils adaptés pour faciliter le quotidien et l'autonomie de votre enfant."
  },
  {
    id: 3,
    image: img3,
    icon: Syringe,
    titleSmall: "PARCOURS DE SANTÉ",
    title: "Coordination de soins",
    description: "Aide à la mise en relation avec des professionnels de santé spécialisés et suivi des démarches."
  }
];