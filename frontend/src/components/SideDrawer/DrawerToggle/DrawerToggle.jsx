import React from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Icônes pro
import classes from "./DrawerToggle.module.scss";

const DrawerToggle = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.toggle}>
      {/* Si 'show' est vrai, on affiche la croix, sinon le menu */}
      {props.show ? <HiX /> : <HiMenuAlt3 />}
    </div>
  );
};

export default DrawerToggle;