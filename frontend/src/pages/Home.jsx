import React, { useState } from "react";
import "./Home.scss"; 
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ArticlesSection from "../components/ArticlesSection";
//import Services from "../components/Services"; 
import FeedBack from "../components/Feedback";

import SideDrawer from "../components/SideDrawer/SideDrawer";
import DrawerToggle from "../components/SideDrawer/DrawerToggle/DrawerToggle"; 

const Home = () => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer(!drawer);

  return (
    <div className="home-page">
      {/* 1. Header & Navigation */}
      <Header />
      
      <div className="mobile-only-toggle">
        <DrawerToggle toggle={toggleDrawer} show={drawer} />
      </div>

      <SideDrawer show={drawer} clicked={toggleDrawer} />
      
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Section de transition "À propos" */}
      <About />

      {/* 4. Services Section */}
      {/* <Services /> */}
      {/* 5. NOUVEAU : Section Articles */}
      <ArticlesSection />
      {/* 5. Feedback & Footer */}
      <FeedBack />
      
    </div>
  );
};

export default Home;