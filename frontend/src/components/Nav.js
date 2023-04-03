import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "../Style/nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__menu-toggle">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="nav__title">DASHBOARD</div>
      <div className="nav__icons">
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};

export default Nav;

