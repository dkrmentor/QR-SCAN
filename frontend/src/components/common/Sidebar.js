import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/Images/logo.png';
import "../../assets/Style/sidebar.css";
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();

  const handleClick = (event) => {
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
            <li onClick={handleClick} className='nav-menu-items'>

              <FontAwesomeIcon icon={faUsers} />
              <span>Users</span>

            </li>
          </ul>
        </div>
        <div >
          <ul className='nav-menu'>
            <li onClick={handleClickAddUser} className='nav-menu-items'>
              {/* <a href="/addUser"> */}
                <FontAwesomeIcon icon={faUsers} />
                <span>AddUsers</span>
              {/* </a> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
