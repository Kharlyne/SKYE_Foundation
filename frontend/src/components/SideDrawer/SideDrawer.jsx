import React from "react";
import { Link } from "react-router-dom";
import { LuX, LuChevronRight } from "react-icons/lu";
import classes from "./SideDrawer.module.scss";
import Backdrop from "../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  // Utilisation des classes CSS Modules
  const attachedClasses = [classes.SideDrawer, props.show ? classes.Open : classes.Close];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }, 
  ];

  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.clicked} />
      
      <div className={attachedClasses.join(" ")}>
        <button className={classes.CloseBtn} onClick={props.clicked}>
          <LuX size={24} />
        </button>

        <div className={classes.LogoContainer}>
          <h3>SKYE Foundation</h3>
        </div>
        
        <nav className={classes.Nav}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={classes.NavItem} 
              onClick={(e) => {
                e.stopPropagation(); 
                props.clicked();
              }}
            >
              <span>{link.name}</span>
              <LuChevronRight size={18} className={classes.Arrow} />
            </Link>
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;