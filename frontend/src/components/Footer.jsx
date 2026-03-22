import React from "react";
import "./Footer.scss"; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="col">
          <h4 className="title">SKYE Foundation</h4>
          <p className="sub">Sensibiliser, promouvoir l'inclusion et creer des liens autour de l'autisme</p>
        </div>
        
        <div className="col">
          <h4 className="title">Navigation</h4>
          <span className="sub">Services</span>
          <span className="sub">À propos</span>
          <span className="sub">Blog</span>
        </div>

        <div className="col">
          <h4 className="title">Contact</h4>
          <p className="sub">Tél: (+32) 492541250</p>
          <div className="icons">
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-square"></i>
          </div>
        </div>

        <div className="col">
          <h4 className="title">Localisation</h4>
          <p className="sub">Colfontaine, Belgique</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 SKYE Foundation - Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;