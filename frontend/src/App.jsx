import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Footer from "./components/Footer"; // 1. Import ton Footer
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import ScrollToTop from "./components/ScrollToTop";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetail from "./pages/ArticleDetail";
import AdminPage from "./pages/admin/AdminPage";
import "./App.scss"; 

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className="App">
        {/* Composants persistants (visibles sur toutes les pages) */}
        <Header toggleDrawer={toggleDrawerHandler} drawer={drawerOpen} />
        <SideDrawer show={drawerOpen} clicked={toggleDrawerHandler} />

        {/* Le contenu des pages change dynamiquement ici */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/aboutus" element={<Aboutus />} />
             <Route path="/article" element={<ArticlePage/>} />
             <Route path="/article/:id" element={<ArticleDetail />} />
             <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>

        {/* Le Footer est placé ici pour rester en bas, peu importe la route */}
        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  );
};

export default App;