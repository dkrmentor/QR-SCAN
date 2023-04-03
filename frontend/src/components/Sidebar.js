import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import './../Style/sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className='divider'></div>
      <nav>
        <ul className='nav-menu'>   
          <li className='nav-menu-items'>
            <a href="/users">
              <FontAwesomeIcon icon={faUsers} />
              <span>Users</span>
            </a>
          </li>
    
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
