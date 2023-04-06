import React, { useContext } from "react";

import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "../../assets/Style/logout.css";

const Logout = () => {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    handleLogout(false);
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div className="logout">
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Logout;
