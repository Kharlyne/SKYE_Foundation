import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.scss";
import HeroImage from "../assets/images/image4.jpg";

const Hero = () => {
  const [isMob, setIsMob] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const chk = () => setIsMob(window.innerWidth < 950);
    chk();
    setReady(true);
    window.addEventListener("resize", chk);
    return () => window.removeEventListener("resize", chk);
  }, []);

  if (!ready) return null;
  return isMob ? <MobileLayout /> : <DesktopLayout />;
};

// Contenu avec logique de rendu conditionnel pour le paragraphe
const Content = ({ isMobile }) => (
  <div className="hero-content-inner">
    <span className="badge">Soutien & Bienveillance</span>
    <h1>Accompagner les parents, <br /><span>un pas après l'autre.</span></h1>
    
    {!isMobile && (
      <p>La SKYE Foundation offre des ressources pour naviguer sereinement dans les défis du développement.</p>
    )}

    <div className="hero-btns">
      <button className="btn-primary">Découvrir nos services</button>
      <button className="btn-outline">Nous contacter</button>
    </div>
  </div>
);

const DesktopLayout = () => (
  <section className="hero-section desktop-layout">
    <div className="hero-container">
      <Content isMobile={false} />
      <div className="hero-image">
        <img src={HeroImage} alt="SKYE" />
      </div>
    </div>
  </section>
);

const MobileLayout = () => (
  <section className="hero-section immersive">
    <div className="bg-img">
      <img src={HeroImage} alt="SKYE" />
      <div className="overlay" />
    </div>
    <Content isMobile={true} />
  </section>
);

export default Hero;