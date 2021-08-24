import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'


export default function Navbar() {
    return (
        <div className='Navbar'>

            <NavLink to='/nasa-rover' className='Navbar-logo'> 
                <img src="https://logos-world.net/wp-content/uploads/2020/05/NASA-Logo.png" alt="" width='200px' />
                <h1>Nasa-Rover</h1>
            </NavLink> 
            
            <ul className="Navbar-nav">
                <li> 
                    <NavLink to='/nasa-rover' activeClassName="selected"> 
                        Welcome
                    </NavLink> 
                </li>
                
                <li> 
                    <NavLink to='/main' activeClassName="selected"> 
                        Rovers 
                    </NavLink> 
                </li>

            </ul>
        </div>
    )
}
