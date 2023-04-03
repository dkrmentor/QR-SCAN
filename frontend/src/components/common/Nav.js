import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import "../../assets/Style/nav.css";

const Nav = () => {

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    navigate("/notifications");
  }

  return (
    <div className="nav">
      {/* <div className="nav__menu-toggle">
        <FontAwesomeIcon icon={faBars} />
      </div> */}
      <div className="nav__title">DASHBOARD</div>
      <div onClick={handleSubmit} className="nav__icons">
         
          <FontAwesomeIcon icon={faBell} />
        {" "}
        {/* <FontAwesomeIcon icon={faSearch} /> */}
      </div>
    </div>
  );
};

export default Nav;
