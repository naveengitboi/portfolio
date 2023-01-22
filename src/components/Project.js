import React from "react";
import '../cssComponents/Project.css'
import { ProjectDetails } from "./ProjectDetailer";

function Project(props){
    return(
        <>
            <div className="page" id="projectPage">
                <h1 className="middleHeading">
                    what i did?
                </h1>
            </div>
            <div className="projectContainer">
                <ProjectDetails
                name="deplaceMaison Clone"
                projectDetail = "This is the self made learning project."
                link = "#projectPage"
                />
                
                <ProjectDetails
                name="RedSquare Clone"
                projectDetail = "This is the self made learning project."
                />
             </div>

             <div className="projectContainer">
                <ProjectDetails
                name="Adobe Clone"
                projectDetail = "This is the self made learning project."
                />
                
                <ProjectDetails
                name="BackstageTalks Clone"
                projectDetail = "This is the self made learning project."
                />
             </div>
            
        </>
    )
}

export default Project;