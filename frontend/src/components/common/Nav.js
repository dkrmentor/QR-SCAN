import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from 'react-router-dom';
import "../../assets/Style/nav.css";
import Logout from "../Auth/Logout";

const Nav = () => {
  // const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   navigate("/notifications");
  // }

  return (
    <div className="nav">
      <div className="nav__title">TABLEAU DE BORD</div>
      {/* <div onClick={handleSubmit} className="nav__icons">
        <FontAwesomeIcon icon={faBell} />
      </div> */}
      <div className="nav__icons">
        <Logout />
      </div>
    </div>
  );
};

export default Nav;