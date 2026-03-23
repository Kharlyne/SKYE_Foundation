import React, { useState } from 'react';
import { LuPhone, LuMail, LuGlobe, LuInstagram, LuLinkedin, LuFacebook } from 'react-icons/lu';
import './Contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://skyefoundation-production.up.railway.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Message envoyé avec succès !');
        setName(''); setPhone(''); setEmail(''); setMessage('');
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Erreur de connexion au serveur.');
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <header className="contact-header">
          <h1>Parlons ensemble.</h1>
          <p>
            Depuis Colfontaine, nous menons nos actions avec engagement. 
            Ancrés localement à Colfontaine et Mons, nous souhaitons élargir progressivement notre impact 
            dans le Hainaut, en Belgique, puis à l'international.
            Vous souhaitez vous engager, collaborer ou en savoir plus ? Notre porte
            vous est ouverte. Ensemble, avançons vers un monde plus inclusif.
          </p>
        </header>

        <section className="contact-main">
          <div className="contact-grid">
            <div className="contact-card">
              <LuMail size={28} className="card-icon" />
              <h3>Dons & Mécénat</h3>
              <p>Soutenez nos actions avec transparence et impact.</p>
            </div>
            <div className="contact-card">
              <LuGlobe size={28} className="card-icon" />
              <h3>Partenariats</h3>
              <p>Entreprises, institutions : collaborons pour demain.</p>
            </div>
            <div className="contact-card">
              <LuPhone size={28} className="card-icon" />
              <h3>Contact direct</h3>
              <p>Une question urgente ?</p>
              <a href="tel:+32492541250" className="phone-link">+32 492 54 12 50</a>
            </div>
          </div>

          <div className="map-wrapper">
            <h2>Retrouvez-nous à Colfontaine</h2>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.8190820162686!2d3.8699114!3d50.407209200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c25bcb252cb6b5%3A0x8f5a1b3a300e029a!2sRue%20des%20Ferronniers%2027%2C%207340%20Colfontaine%2C%20Belgique!5e0!3m2!1sfr!2scm!4v1773588483498!5m2!1sfr!2scm" 
                width="100%" 
                height="400" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Adresse SKYE Foundation Colfontaine"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Envoyez-nous un message</h2>
            <form className="minimal-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Votre numéro de téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Votre message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="btn-submit">Envoyer le message</button>
            </form>
          </div>

          <div className="social-connect">
            <p>Rejoignez notre communauté</p>
            <div className="social-links">
              <a href="#"><LuFacebook size={24} /></a>
              <a href="#"><LuInstagram size={24} /></a>
              <a href="#"><LuLinkedin size={24} /></a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;