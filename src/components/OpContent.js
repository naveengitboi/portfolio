import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import '../cssComponents/Project.css'
function OpContent(){
    return(
        <div className="opContentPage">
        <div className="opLinkManager">
            <NavLink to='/opcontent/photography'>photography</NavLink>
            <NavLink to='/opcontent/photoshop'>photoshop</NavLink>
            <NavLink to='/opcontent/artwork'>artwork</NavLink>
        </div>
        <Outlet/>
        </div>
    )
}

export default OpContent;