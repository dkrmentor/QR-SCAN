import React from 'react';
import vector1 from './../../assets/Vector(3).png';
import vector2 from './../../assets/Vector(4).png';
import vector3 from './../../assets/Vector(5).png';
import './../../Style/navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <ul>
                    <li> <img className='nav-menu' src={vector1} alt="nav-icon" /> </li>
                    <li> <p className='navbar-dashboard'>DashBoard</p> </li>
                    <ul>
                        <li> <img className='nav-notification' src={vector2} alt="nav-icon" /> </li>
                        <li> <img className='nav-search'  src={vector3} alt="nav-icon" /> </li>
                    </ul>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;