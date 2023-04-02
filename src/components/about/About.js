import React from "react";
import Social from "../social/social";
import classes from "./About.module.css";
import SkillsDropdown from "./skills";
const About = () => {
  return (
    <div className={classes["about-container"]}>
      <div className={classes["about-me"]}>
        <h1>Hello! My name is Rishi.</h1>
        <h2>I'm an 18-year-old full-stack development student.</h2>
        <p>
          Hello and welcome to my page! My name is Rishi, and I am an
          18-year-old full-stack development student with a passion for coding.
          As a developer, I possess unmatched perspicacity and sheer
          indefatigability, which makes me a valuable asset to any team. I am
          driven to help my teammates thrive in the competitive tech industry,
          and I am always eager to learn and share my knowledge with others.
          Whether it's discussing data structures or algorithms, I'm always up
          for a 30-minute Zoom call to talk shop.
        </p>
        <p>
          If you're looking for a motivated and skilled developer to join your
          team, I would love to chat with you further. Thank you for taking the
          time to visit my page, and I look forward to hearing from you!
        </p>
        <div className={classes.socials}>
          <h3>My Socials</h3>
          <Social />
        </div>
      </div>
      <div className={classes.skills}>
        <SkillsDropdown />
      </div>
    </div>
  );
};

export default About;
