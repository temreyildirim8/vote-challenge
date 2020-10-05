import React from "react";
import "./Header.css";
import hepsiburadaLogo from "../../Resources/Hepsiburada.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <img src={hepsiburadaLogo} alt="logo" />
      </Link>
      <span className="header-text">
        <span className="header-text-bold">Link</span>
        <span className="header-text-lighter">VOTE </span>
        Challenge
      </span>
      <hr />
    </div>
  );
}

export default Header;
