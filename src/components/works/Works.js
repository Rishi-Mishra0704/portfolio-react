import React, { useState } from "react";
import classes from "./Works.module.css";
import { FaGithub, FaLink } from "react-icons/fa";
import conference from "../assets/conference.png";
import food from "../assets/food.png";
import Modal from "../utilities/modal/Modal";

const displayWorks = [
  {
    name: "Conference page",
    description:
      "A Conference page to test my web development abilities built with html, css and vanilla Javascript. It has many features like responsiveness when used on mobile. When used on mobile it has a button to see more or less featured speakers . It also has an about section .Original design by Cindy shin",
    image: conference,
    liveLink: "https://rishi-mishra0704.github.io/Capstone/",
    languages: ["Html", "Css", "JavaScript"],
    sourceCode: "https://github.com/Rishi-Mishra0704/Capstone",
  },
  {
    name: "Food Cart",
    description:
      "A Food order website built with react and css modules. It fetches data from firebase realtime database and posts user data to the database. it has add-remove meals , cancel-order button, personal address and from verifications. This project was built to sharpen my knowledge of react .",
    image: food,
    liveLink: "https://rishi-mishra0704.github.io/resto-react/",
    languages: ["React.js", "Css.module", "Firebase Realtime Database"],
    sourceCode: "https://github.com/Rishi-Mishra0704/resto-react",
  },
];

const Works = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const handleClick = (increment) => {
    const lastIndex = displayWorks.length - 1;
    if (activeIndex + increment > lastIndex) {
      setActiveIndex(0);
    } else if (activeIndex + increment < 0) {
      setActiveIndex(lastIndex);
    } else {
      setActiveIndex(activeIndex + increment);
    }
    setShowDetails(false);
  };
  const work = displayWorks[activeIndex];

  return (
    <div className={classes["work-body"]}>
      <h2>Here are some of my works</h2>
      <div className={classes.card}>
        <div className={classes["works-container"]}>
          <div className={classes["image-container"]}>
            <img src={work.image} alt={work.name} className={classes.images} />
          </div>
          <div className={classes.work}>
            <h3>{work.name}</h3>
            <button onClick={() => setShowDetails(true)}>Show details</button>
          </div>
        </div>
      </div>
      <div className={classes["button-container"]}>
        <button className={classes.left} onClick={() => handleClick(-1)}>
          &#60; Previous
        </button>
        <button className={classes.right} onClick={() => handleClick(1)}>
          Next &#62;
        </button>
      </div>
      <Modal isOpen={showDetails} onClose={() => setShowDetails(false)}>
        <div>
          <p>{work.description}</p>
          <div className={classes["link-container"]}>
            <a href={work.liveLink}>
              <FaLink /> Live link
            </a>
            <ul>
              {work.languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
            <a href={work.sourceCode}>
              <FaGithub size={20} /> Source code
            </a>
          </div>
          <button onClick={() => setShowDetails(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};
export default Works;
