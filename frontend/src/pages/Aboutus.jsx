import React from "react";
import "./Aboutus.scss";

const Aboutus = () => {
  return (
    <section className="about-us-page">
      <div className="about-us-container">
        <header className="about-us-header">
          <h1>Qui sommes-nous ?</h1>
          <h2>SKYE Foundation, une présence dédiée aux familles.</h2>
        </header>

        <div className="about-us-content">
          <p>
            Skye Foundation est une initiative née de l’expérience d’une maman
            d’enfant autiste. Face aux défis du quotidien, mais aussi au
            sentiment d’isolement que peuvent vivre de nombreux parents, l’idée
            est née de créer un espace de rencontre, de partage et de
            solidarité.
          </p>

          <p>
            Au fil du temps, il est apparu que beaucoup de familles traversent
            des difficultés similaires : besoin d’être écoutées, de partager
            des expériences, de trouver des idées et de se soutenir
            mutuellement.
          </p>

          <p>
            Skye Foundation souhaite donc créer des liens entre parents,
            favoriser les échanges et relayer les ressources existantes afin que
            chacun puisse se sentir moins seul face aux défis liés à l’autisme,
            à la neurodiversité et au handicap.
          </p>

          <p>
            Notre initiative est ouverte à toutes les familles, mais aussi à
            toute personne sensible à la cause de l’inclusion. Car mieux
            comprendre les différences et se soutenir les uns les autres est une
            première étape vers une société plus bienveillante et inclusive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;