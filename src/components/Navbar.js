import React from 'react'
import '../cssComponents/Navbar.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
function Navbar(){
    const [navOpen, setNavOpen] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    function controlMenu(){
       setNavOpen(prev => !prev)
       sideBarHandler()
    }

    function sideBarHandler(){
        setSidebar(prev => !prev)
    }

    return(
        <div className="navbar">
            <h1 className='logo'>Naveen</h1>
            <div className='Menu' 
            style={navOpen ? {background:'red'} :{background:'white'}} 
            onClick={()=>controlMenu()}>
            </div>
            <ul className={sidebar ? 'sidebar' : 'navLinks'}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/me">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;