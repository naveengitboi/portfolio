import React from "react";
import '../cssComponents/Project.css'
import { ProjectDetails } from "./ProjectDetailer";
import {motion} from 'framer-motion'
import { bigH1 } from "./About";
import { useViewportScroll, useTransform } from "framer-motion";


function Project(props){
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2.5]);
  
    return(
        <>
            <motion.div  style={{ scale }} className="page" id="projectPage">
                <motion.h1 className="middleHeading">
                    what i did?
                </motion.h1>
            </motion.div>
            <div className="projectContainer">
                <ProjectDetails
                name="deplaceMaison Clone"
                projectDetail = "This is the self made learning project."
                link = "https://naveengitboi.github.io/deplaceMaisonClone/"
                />
                
                <ProjectDetails
                name="RedSquare Clone"
                projectDetail = "This is the self made learning project."
                link="https://naveengitboi.github.io/RedSquareClone/"
                />
             </div>

             <div className="projectContainer">
                <ProjectDetails
                name="Adobe Clone"
                projectDetail = "This is the self made learning project."
                link="https://naveengitboi.github.io/AdobeClone/"
                />
                
                <ProjectDetails
                name="BackstageTalks Clone"
                projectDetail = "This is the self made learning project."
                link = "https://naveengitboi.github.io/BackStageTalksClone/backStageTalk.html"
                />
             </div>
            
        </>
    )
}

export default Project;