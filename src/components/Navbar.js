import React from 'react'
import '../cssComponents/Navbar.css'
import { NavLink } from 'react-router-dom';
function Navbar(){

    return(
        <div className="navbar">
            <h1 className='logo'>Naveen</h1>
            <ul className='navLinks'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/me">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;