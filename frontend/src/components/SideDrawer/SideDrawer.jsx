import React from "react";
import classes from "./SideDrawer.module.scss";
import Backdrop from "../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  // Gestion propre des classes avec un tableau dynamique
  const attachedClasses = [
    classes.SideDrawer, 
    props.show ? classes.Open : classes.Close
  ];

  return (
    <React.Fragment>
      {/* Le Backdrop permet de fermer le menu en cliquant à côté */}
      <Backdrop show={props.show} clicked={props.clicked} />
      
      <div className={attachedClasses.join(" ")} onClick={props.clicked}>
        <div className={classes.LogoContainer}>
           {/* Optionnel : ajoute ton logo ici pour le branding */}
           <h3>SKYE Foundation</h3>
        </div>
        
        <nav className={classes.Nav}>
          <div className={classes.NavItems}>Home</div>
          <div className={classes.NavItems}>About Us</div>
          <div className={classes.NavItems}>Services</div>
          <div className={classes.NavItems}>Contact Us</div>
          <div className={classes.NavItems}>Blog</div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;