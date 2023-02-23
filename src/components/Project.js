import React from "react";
import '../cssComponents/Project.css'
import { ProjectDetails } from "./ProjectDetailer";
import {motion, useScroll} from 'framer-motion'
// import { bigH1 } from "./About";
import {  useTransform } from "framer-motion";
import { OtherProjects } from "./OtherProjects";
import deplace from '../projectsimages/5ede27e188219c6c4ab2af6b_man-default-p-500.jpg'
import red from '../projectsimages/7ee825e0906b2918e50a9f963c50198b5c26b27d_flip-thumb.jpg'
import backstage from '../projectsimages/backstage.png'
import adobe from '../projectsimages/adobe.png'
function Project(props){
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  
    return(
        <>
            <motion.div  style={{ scale }} className="page" id="projectPage">
                <motion.h1 className="middleHeading">
                    what i did?
                </motion.h1>
            </motion.div>
            <div className="projectContainer">
                <ProjectDetails
                img = {deplace}
                name="deplaceMaison Clone"
                projectDetail = "This is the self made learning project."
                link = "https://naveengitboi.github.io/deplaceMaisonClone/"
                />
                
                <ProjectDetails
                img = {red}
                name="RedSquare Clone"
                projectDetail = "This is the self made learning project."
                link="https://naveengitboi.github.io/RedSquareClone/"
                />
             </div>

             <div className="projectContainer">
                <ProjectDetails
                img = {adobe}
                name="Adobe Clone"
                projectDetail = "This is the self made learning project."
                link="https://naveengitboi.github.io/AdobeClone/"
                />
                
                <ProjectDetails
                img = {backstage}
                name="BackstageTalks Clone"
                projectDetail = "This is the self made learning project."
                link = "https://naveengitboi.github.io/BackStageTalksClone/backStageTalk.html"
                />
             </div>
            
            <OtherProjects/>
        </>
    )
}

export default Project;