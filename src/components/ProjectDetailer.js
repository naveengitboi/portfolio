import React from "react";
import '../cssComponents/Project.css'
import {motion} from 'framer-motion'

const projectNameVariants = {
    hidden:{
        x:100,
        opacity:0
    },
    show:{
        x :0,
        opacity:1,
        transition:{
            duration:1, 
            type:"spring"
        }
    }
}

const projectDetailVariant = {
    hidden:{
        x:100,
        opacity:0
    },
    show:{
        x :0,
        opacity:1,
        transition:{
            duration:1, 
            delay:0.5,
            type:"spring"
        }
    }
}

export function ProjectDetails(props){
    return(
        <div className="project">
    
                    {/* <img src="" alt="" /> */}
                    <div className="img"></div>
                    <div className="projectDetails">
                        <motion.h1 variants={projectNameVariants} initial="hidden" whileInView={"show"} className="projectName"><a href={props.link} target="_blank">{props.name}</a></motion.h1>
                        <motion.p variants={projectDetailVariant} initial="hidden" whileInView={"show"} className="projectDetail">{props.projectDetail}</motion.p>  
                    </div>

            </div>
    )
}