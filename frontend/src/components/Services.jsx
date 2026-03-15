import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesList } from "../pages/servicesData";
import "./Services.scss";

const Services = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % servicesList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="services-luxury-slider">
      <div className="slider-viewport">
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="slide-content"
          >
            <div className="img-wrapper">
              <motion.img 
                src={servicesList[index].image} 
                alt={servicesList[index].title}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 7, ease: "linear" }}
              />
              <div className="icon-overlay">
                <img src={servicesList[index].icon} alt={servicesList[index].alt} />
              </div>
            </div>

            <div className="text-wrapper">
              <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                {servicesList[index].titleSmall}
              </motion.span>
              <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                {servicesList[index].title}
              </motion.h2>
              <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                {servicesList[index].description}
              </motion.p>
              <div className="progress-bar">
                <motion.div className="fill" animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;