import React from 'react'
import '../cssComponents/Navbar.css'
function Navbar(){

    return(
        <div className="navbar">
            <h1 className='logo'>Naveen</h1>
            <ul className='navLinks'>
                <li><a href="#homePage">Home</a></li>
                <li><a href="#aboutPage">About</a></li>
                <li><a href="#projectPage">projects</a></li>
                <li><a href="#contactPage">contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;