import React from "react";

import "./navbarComponent.css";
import AirBnbLogo from "../../assets/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={AirBnbLogo} alt="logo-airbnb" className="logo" />
    </nav>
  );
}

export default Navbar;
