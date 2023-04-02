import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "../../navbar/Navbar";
import "./Root.css";

const Root = () => {
  const location = useLocation();
  const [pageBgColor, setPageBgColor] = useState("#fff"); // set initial value to white

  // update pageBgColor and slideDirection whenever the location changes
  useEffect(() => {
    // determine the background color based on the current path
    switch (location.pathname) {
      case "/":
        setPageBgColor("#22009d");
        break;
      case "/works":
        setPageBgColor("linear-gradient(120deg, #22009d 45%, rgb(57, 1, 179)  55%)");
        break;
      case "/about":
        setPageBgColor(
          "linear-gradient(120deg, rgb(57, 1, 179) 40%, rgba(90, 6, 246,1) 60%)"
        );
        break;
      case "/contact":
        setPageBgColor("#5907e8");
        break;
      default:
        setPageBgColor("#fff");
        break;
    }
  }, [location.pathname]);

  const pageStyle = {
    background: pageBgColor,
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={500}>
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Root;
