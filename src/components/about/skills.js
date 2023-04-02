import { useState } from "react";
import classes from "./skills.module.css";

function SkillsDropdown() {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showFrameworks, setShowFrameworks] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  function handleLanguagesClick(event) {
    event.stopPropagation();
    setShowLanguages(!showLanguages);
  }

  function handleFrameworksClick(event) {
    event.stopPropagation();
    setShowFrameworks(!showFrameworks);
  }

  function handleToolsClick(event) {
    event.stopPropagation();
    setShowTools(!showTools);
  }

  function handleSkillsClick() {
    setShowSkills(!showSkills);
  }

  return (
    <div className={classes.skills}>
      <h3 onClick={handleSkillsClick}>Skills:</h3>
      {showSkills && (
        <ul className={classes["skill-list"]}>
          <li onClick={handleLanguagesClick}>
            Languages
            {showLanguages && (
              <ul className={classes.langs}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C++</li>
                <li>C#</li>
                <li>Ruby</li>
              </ul>
            )}
          </li>
          <li onClick={handleFrameworksClick}>
            Frameworks and Libraries
            {showFrameworks && (
              <ul className={classes.framework}>
                <li>React</li>
                <li>Next.js</li>
                <li>Ruby on Rails</li>
                <li>Bootstrap</li>
              </ul>
            )}
          </li>
          <li onClick={handleToolsClick}>
            Tools
            {showTools && (
              <ul className={classes.tools}>
                <li>Git</li>
                <li>GitHub</li>
                <li>Jest</li>
                <li>Webpack</li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </div>
  );
}

export default SkillsDropdown;
