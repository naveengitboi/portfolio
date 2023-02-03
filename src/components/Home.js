import React from "react";
import '../cssComponents/Home.css'
import heroImg from '../bgImages/My edit 2.png'
import {motion} from 'framer-motion'
import About from "./About";
import { smallH1, smallH1Container } from "./About";
import Project from "./Project";
import { OtherProjects } from "./OtherProjects";
import { Contact } from "./Contact";
export const pageAnimation ={
    hidden:{ opacity:0},
    show:{ opacity:1,
    transition: {duration: 1}},
}
export const ChildrenElements = {
    hidden: {x:-100, opacity:0},
    show:{x:0, opacity:1, transition:{duration:1}}
}
function Home(){
    return(
        <>
        <motion.div className="page" id="homePage"
        variants={pageAnimation}
            initial="hidden"
            whileInView={"show"}
            viewport ={{once: true}}
        >
            {/* <img  src={heroImg} alt="Profile" className="heroImg" /> */}
            <motion.h1 variants={ChildrenElements}  className="middleHeading">
                Who am i?
            </motion.h1>
            <motion.div variants={smallH1Container} className="answerPassage" >
                <motion.h1  variants={smallH1} >Iam Naveen</motion.h1>
                <motion.h1  variants={smallH1}> A creative web designer</motion.h1>
                <motion.h1  variants={smallH1}>student Nit calicut</motion.h1>
            </motion.div>
        </motion.div>

        <About/>
        <Project/>
        <Contact/>
        </>
    )
}

export default Home