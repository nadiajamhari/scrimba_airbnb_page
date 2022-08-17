import React from "react";

import "./heroComponent.css";
import HeroImg from "../../assets/hero.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-img">
        <img src={HeroImg} alt="hero-logo" className="hero-logo" />
      </div>
      <div className="hero-description">
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
