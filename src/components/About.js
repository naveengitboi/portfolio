import React from "react";
import '../cssComponents/About.css'
import photographyImg from '../bgImages/photgraphy combined png.png'
import photoshopImg from '../bgImages/ps edited all.png'
import artworkImg from '../bgImages/arts combined edit.png'

import { motion } from "framer-motion";
function About(){
    return(
        <motion.div  className="page" id="aboutPage">
            <div className="bgImgContainers">
                <img src={photoshopImg} alt="" />
                <img src={photographyImg} alt="" />
                <img src={artworkImg} alt="" />

            </div>
            <h1 className="middleHeading">
                What i can do?
            </h1>
            <div className="answerPassage">
                <h1>ADOBE PHOTOSHOP <br />
                    PHOTOGRAPHY   <br />
                    PENCIL ART   <br />
                    PROGRAMMING
                </h1>
            </div>
        </motion.div>
    )
}
export default About;  