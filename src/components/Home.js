import React from "react";
import '../cssComponents/Home.css'
import heroImg from '../bgImages/My edit 2.png'
import {motion} from 'framer-motion'
export const pageAnimation ={
    hidden:{y:100, opacity:0},
    show:{y:0, opacity:1,
    transition: {duration: 1}},
}
export const ChildrenElements = {
    hidden: {y:100, opacity:0},
    show:{y:0, opacity:1, transition:{duration:1}}
}
function Home(){
    return(
        <motion.div className="page" id="homePage"
        variants={pageAnimation}
            initial="hidden"
            whileInView={"show"}
        >
            <img  src={heroImg} alt="Profile" className="heroImg" />
            <motion.h1 variants={ChildrenElements}  className="middleHeading">
                Who am i?
            </motion.h1>
            <motion.div className="answerPassage" >
                <motion.h1 variants={ChildrenElements} >Iam Naveen, <br /> A creative web designer, <br /> 
                Student NIT Calicut</motion.h1>
            </motion.div>
        </motion.div>
    )
}

export default Home