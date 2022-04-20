import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purbleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Esystems" />
          <h2>Esystems_platform _online.</h2>
        </div>

        <img src={landingImg} alt="Platform online" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Books" />
            Books
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Teachers bord" />
            Teacher bord
          </Link>
        </div>
        <span className="total-connections">
          DECODING THE FUTURE WITH CUTTING EDGE TECHNOLOGY
          <img src={purbleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
