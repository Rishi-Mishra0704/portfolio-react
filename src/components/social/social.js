import React from "react";
import classes from "./Social.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className={classes.social}>
      <ul className={classes.socialul}>
        <li className={classes.socialli}>
          <a href="https://github.com/Rishi-Mishra0704">
            {" "}
            <FaGithub size={32} />
          </a>
        </li>
        <li className={classes.socialli}>
          <a href="https://www.linkedin.com/in/rishi-mishra-756718257/">
            <FaLinkedin size={32} />
          </a>
        </li>
        <li className={classes.socialli}>
          <a href="https://twitter.com/RishiMi31357764">
            {" "}
            <FaTwitter size={32} />
          </a>
        </li>
        <li className={classes.socialli}>
          <a href="https://www.instagram.com/rishi_mishra0704/">
            {" "}
            <FaInstagram size={32} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
