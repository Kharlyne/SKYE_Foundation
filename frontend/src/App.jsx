import React, { useState } from "react";
import "./App.scss";
import FeedBack from "./components/Feedback.jsx";
import Tablets from "./assets/images/Icon awesome-tablets.svg";
import Syringe from "./assets/images/Icon metro-injection.svg";
import Bubbles from "./assets/images/Icon ionic-ios-chatbubbles.svg";
import Arrow from "./assets/images/arrow.svg";
import Mail from "./assets/images/Icon feather-mail.svg";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import DrawerToggle from "./components/SideDrawer/DrawerToggle/DrawerToggle.jsx";
import Logo from "./assets/images/SKYEicon.png";

const App = () => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const closeModal = () => {
    setDrawer(false);
  };
  return (
    <div className="App">
      <DrawerToggle toggle={toggleDrawer} />
      <SideDrawer clicked={closeModal} hide={toggleDrawer} show={drawer} />
      <div className="top-container">
        <div className="top-container__left">
          <nav className="nav">
            <img src={Logo} alt="SKYE Foundation" className="logo" />
            <div className="nav-items">
              <div className="nav-item">Home</div>
              <div className="nav-item">About Us</div>
              <div className="nav-item">Services</div>
              <div className="nav-item">Blog</div>
              <div className="nav-item">Contact Us</div>
            </div>
          </nav>
          <div className="content">
            <div className="inner">
              <div className="update">
                <div className="new">New</div>
                <div className="latest">
                  ..............
                </div>
              </div>
              <h1 className="title">SKYE Foundation</h1>
              <div className="sub">

              Sky Foundation est une initiative de parents qui souhaitent se rassembler, partager et agir ensemble pour favoriser 
              l’inclusion des enfants autistes dans la société.
              </div>
              <button className="button get">commencer</button>
            </div>
            <div className="mother" />
          </div>
          <div className="fill-circle"></div>
          <div className="border-circle"></div>
        </div>
        <div className="top-container__right">
          <button className="button">Sign Up</button>
        </div>
      </div>

      <div className="about-container">
        <div className="about-container__images">
          <div className="img img-1" />
          <div className="img img-2" />
        </div>
        <div className="about-container__content">
          <div className="title-small">A propos de nous</div>
          <div className="title">
            Créer du lien autour de l’<b>autisme</b>
          </div>
          <div className="sub">
           Sky Foundation est une initiative née de l’expérience d’une maman d’enfant autiste.
Face aux défis du quotidien, mais aussi au sentiment d’isolement que peuvent vivre de nombreux parents, l’idée est née de créer un espace de rencontre, de partage et de solidarité.
          </div>
          <button className="button">lire plus</button>
        </div>
      </div>

    

      <FeedBack />



      <div className="blog-container">
        {/*
         <div className="title-small">BLOG</div>
         */}
        <div className="title">Derniers Articles</div>
        <div className="sub">Retrouvez tous nous articles ici</div>
        <div className="article-boxes">
          <div className="box box-1">
            <div className="top"></div>
            <div className="bottom">
              <div className="meta">
                <div className="date">13-03-2026</div>
                <div className="time ">5-min lecture </div>
              </div>
              <h4>Allié de l'autisme initiative</h4>
              <p>
               Rejoignez-nous ce 2Avril pour une heure de partage  dans le cadre d’une initiative locale  à l’occasion de la Journée mondiale de sensibilisation à l’autisme.
              </p>
            </div>
          </div>

         {/* <div className="box box-2">
            <div className="top"></div>
            <div className="bottom">
              <div className="meta">
                <div className="date">02-04-2026</div>
                <div className="time">5-min lecture</div>
              </div>
              <h4>On vous explique comemnt on percoit etc etc</h4>
              <p>
                  blalalalalalalalallalalallalalallammmmmmmmmmmmmmdddddd
                ffdffdfdfdf....
              </p>
            </div>
          </div>

          <div className="box box-3">
            <div className="top"></div>
            <div className="bottom">
              <div className="meta">
                <div className="date">8-09-2026</div>
                <div className="time">5-min lecture</div>
              </div>
              <h4>But I Must Explain To You How</h4>
              <p>
                 blalalalalalalalallalalallalalallammmmmmmmmmmmmm
               ffdffdfdfdf....fffffff
              </p>
            </div>
          </div> */}
        </div>
        <button className="button">Lire plus</button>
      </div>


      <footer className="footer-container">
        <div className="content con-1">
          <div className="title">Sitemap</div>
          <div className="sub">Services</div>
          <div className="sub">A propos de nous</div>
          <div className="sub">Article</div>
       
        </div>
        <div className="content con-2">
          <div className="title">Contactez nous</div>
          <div className="sub">Phone</div>
          <div className="sub">(+234) 812 873 9485</div>
          <div className="sub">reseaux sociaux</div>
          <div className="icons">
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-square"></i>
          </div>
        </div>
        <div className="content con-3">
          <div className="title">Adresse</div>
          <div className="sub">
            colfontaine .............
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
