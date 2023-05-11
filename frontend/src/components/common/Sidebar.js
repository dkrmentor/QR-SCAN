import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/Images/logo.png';
import "../../assets/Style/sidebar.css";
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();
  const handleClickAdmin = (event) => {
    event.preventDefault();

    navigate("/admins");
  };

  const handleClickUser = (event) => {
    event.preventDefault();

    navigate("/users");
  };

  const handleClickAddUser = (event) => {
    event.preventDefault();
    navigate("/addUser");
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className='divider'></div>

      <nav>
      <div >
          <ul className='nav-menu'>
            <li onClick={handleClickAdmin} className='nav-menu-items'>

              <FontAwesomeIcon icon={faUsers} />
              <span>utilisateurs</span>

            </li>
          </ul>
        </div>
        <div >
          <ul className='nav-menu'>
            <li onClick={handleClickUser} className='nav-menu-items'>

              <FontAwesomeIcon icon={faUsers} />
              <span>informations utilisateur</span>

            </li>
          </ul>
        </div>
        <div >
          <ul className='nav-menu'>
            <li onClick={handleClickAddUser} className='nav-menu-items'>
              {/* <a href="/addUser"> */}
                <FontAwesomeIcon icon={faUsers} />
                <span>Ajouter un utilisateur</span>
                 </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;