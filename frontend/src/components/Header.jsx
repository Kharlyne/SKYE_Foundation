import React from "react";
import "./Header.scss";
import Logo from "../assets/images/SKYEicon.png"; 
import DrawerToggle from "./SideDrawer/DrawerToggle/DrawerToggle";

const Header = ({ toggleDrawer, drawer }) => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={Logo} alt="Logo SKYE" />
      </div>

      {/* Menu Desktop */}
      <nav className="desktop-nav">
        {["Home", "About Us", "Services", "Blog", "Contact Us"].map(item => (
          <span key={item} className="nav-link">{item}</span>
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