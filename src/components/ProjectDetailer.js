import React from "react";
import '../cssComponents/Project.css'
export function ProjectDetails(props){
    return(
        <div className="project">
    
                    {/* <img src="" alt="" /> */}
                    <div className="img"></div>
                    <div className="projectDetails">
                        <h1 className="projectName"><a href={props.link}>{props.name}</a></h1>
                        <p className="projectDetail">{props.projectDetail}</p>
                    </div>

            </div>
    )
}