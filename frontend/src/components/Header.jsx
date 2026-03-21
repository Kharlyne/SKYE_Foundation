import React from "react";
import "./Header.scss";
import Logo from "../assets/images/SKYEicon.png"; 
import DrawerToggle from "./SideDrawer/DrawerToggle/DrawerToggle";
import { Link } from "react-router-dom"; // Import nécessaire

const Header = ({ toggleDrawer, drawer }) => {
  // Liste des liens avec leurs routes
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={Logo} alt="Logo SKYE" />
      </div>

      {/* Menu Desktop */}
      <nav className="desktop-nav">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.path} className="nav-link">
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Menu Mobile */}
      <div className="mobile-toggle">
        <DrawerToggle toggle={toggleDrawer} show={drawer} />
      </div>
    </header>
  );
};

export default Header;