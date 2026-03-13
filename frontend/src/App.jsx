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

      <div className="services-container ">
        <div className="texts">
          <div className="title-small">SERVICES</div>
          <div className="title">Services que nous offrons</div>
          <div className="sub">
          bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
          </div>
        </div>

        <div className="boxes">
          <div className="box">
            <div className="content">
              <img src={Tablets} alt="tablets" className="icon tablet" />
              <div className="title-small">OLDER & CHILDREN</div>
              <div className="title">
                Medication <br /> Tracker
              </div>
              <div className="sub">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born.
              </div>
              <div className="more">
                Learn More <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="content">
              <img src={Syringe} alt="tablets" className="icon syr" />
              <div className="title-small">CHILDREN</div>
              <div className="title">
                Vaccination <br /> Tracker
              </div>
              <div className="sub">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born.
              </div>
              <div className="more">
                Learn More <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="content">
              <img src={Bubbles} alt="tablets" className="icon syr" />
              <div className="title-small">OLDER & CHILDREN</div>
              <div className="title doc">DocChat</div>
              <div className="sub">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born.
              </div>
              <div className="more">
                Learn More <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeedBack />

      <div className="location ">
        <div className="find-box">
          <div className="content">
            <h2 className="title">
              Let's Find A Hospital <br /> Near You.
            </h2>
            <p className="sub">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of.
            </p>
            <div className="input-con">
              <input placeholder="Enter Your Location" type="text" />
              <button className="button">Search</button>
            </div>
          </div>
        </div>
      </div>

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

      <div className="newsletter">
        <div className="title">
          Subscribe To Our <b>NewsLetter</b>
        </div>
        <p className="sub">
          Receive our weekly digest of featured health articles
        </p>
        <div className="input-con">
          <div className="container">
            <img src={Mail} alt="mail" />
            <input type="text" placeholder="example@mail.com" />
          </div>
          <button className="button">Subscribe</button>
        </div>
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
