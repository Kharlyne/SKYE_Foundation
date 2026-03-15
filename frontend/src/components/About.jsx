import React from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import "./About.scss";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  // Animation séquentielle
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.6, delayChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="about-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span variants={itemVariants} className="subtitle">
            Créer du lien autour de l’autisme
          </motion.span>
          
          <motion.h2 variants={itemVariants}>
            SKYE Foundation, une présence dédiée aux familles.
          </motion.h2>
          
          <motion.p variants={itemVariants}>
            Sky Foundation est une initiative née de l’expérience d’une maman d’enfant autiste. 
            Face aux défis du quotidien, mais aussi au sentiment d’isolement, l’idée est née 
            de créer un espace de rencontre, de partage et de solidarité.
          </motion.p>

          <motion.div variants={itemVariants} className="stats">
            <div className="stat-item">
              <span>{isInView && <CountUp end={120} duration={7} suffix="+" />}</span>
              Familles aidées
            </div>
            <div className="stat-item">
              <span>{isInView && <CountUp end={10} duration={15} suffix="+" />}</span>
              Experts dédiés
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;