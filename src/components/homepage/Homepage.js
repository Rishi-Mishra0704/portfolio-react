import React from "react";
import classes from "./Homepage.module.css";
import Social from "../social/social";
import photo from "./my-photo-removebg-preview.png";

const Homepage = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.intro__left}>
        <h1>Hey! Myself Rishi Mishra </h1>
        <p>
          Hello I'm A Software Developer! I Can Help You Build A Product,Feature
          Or Website. Look Through Some Of My Experience ! If You Have A Project
          You Need Coded.Don't Hesitate To Contact Me.
        </p>
        <p>Let's Connect</p>
        <Social />
      </div>
      <div className={classes.intro__right}>
        <div className={classes.intro__photo}>
          <img src={photo} alt="me" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
