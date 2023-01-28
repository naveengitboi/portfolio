import React from "react";
import '../cssComponents/About.css'
import photographyImg from '../bgImages/photgraphy combined png.png'
import photoshopImg from '../bgImages/ps edited all.png'
import artworkImg from '../bgImages/arts combined edit.png'
import { motion } from "framer-motion";
import { pageAnimation } from "./Home";

export const bigH1 = {
    hidden:{
        y:200,
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
        transition:{
            duration:1
        }
    }
}
export const smallH1Container ={
    hidden:{
        x:-100,
        y:50,
        opacity:0
    },
    show:{
        x :0,
        y:0,
        opacity:1,
        transition:{
            delay:.25,
            staggerChildren:0.5
        }
    }
}

export const smallH1 = {
    hidden:{
        x:-100,
        opacity:0
    },
    show: {
        x:0,
        opacity:1,
        transition:{
            duration: 1,
            type:"spring",
            stiffness:100
        }
    }
}


function About(){
    return(
        <>
            <motion.div className="page" id="aboutPage">
                <div className="bgImgContainers">
                    <img src={photoshopImg} alt="" />
                    <img src={photographyImg} alt="" />
                    <img src={artworkImg} alt="" />

                </div>
                <motion.h1 variants={bigH1} initial="hidden" whileInView={"show"} viewport={{once:true,amount:0.75}} className="middleHeading">
                    What i can do?
                </motion.h1>
                <motion.div variants={smallH1Container} initial="hidden" whileInView={"show"} 
                
                className="answerPassage">
                    <motion.h1 variants={smallH1}>ADOBE PHOTOSHOP</motion.h1>
                    <motion.h1 variants={smallH1}>Photography</motion.h1>
                    <motion.h1 variants={smallH1}>Pencil Arts</motion.h1>
                    <motion.h1 variants={smallH1}>Programming</motion.h1>
                </motion.div>
            </motion.div>
        </>
    )
}
export default About;  