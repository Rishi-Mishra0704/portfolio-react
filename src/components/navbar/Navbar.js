import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = ({bgColor}) => {

  return (
    <header>
      <nav className={classes.nav}  style={{ backgroundColor: bgColor }}>
        <span className={classes.span}><Link to="/">MY LOGO</Link></span>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link to="/" className={classes.navLink}>Home</Link>
          </li>
          <li  className={classes.navItem}>
            <Link to="/works" className={classes.navLink}>Works</Link>
          </li>
          <li  className={classes.navItem}>
            <Link to="/about" className={classes.navLink}>About</Link>
          </li>
          <li  className={classes.navItem}>
            <Link to="/contact" className={classes.navLink}>Contact me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
