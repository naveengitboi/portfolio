import React from "react";
import {motion, useScroll, useTransform} from 'framer-motion'
import { NavLink } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import { ImgCompo } from "../ImgComp";
import { useEffect } from "react";
export function OtherProjects(){
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
      let photoRanIndex = Math.floor(Math.random()*(ImgCompo[0].length))
      let psRanIndex = Math.floor(Math.random()*(ImgCompo[1].length))
      let artRanIndex = Math.floor(Math.random()*(ImgCompo[2].length))


    return(
        <>
        <motion.div className="page">
            <motion.h1 style={{scale}} className="middleHeading">Apart from dev</motion.h1>
        </motion.div>
        <div className="otherProjects">
            <div className="OPName" 
            style={{backgroundImage:`url(${ImgCompo[0][photoRanIndex]['image']})`, backgroundPosition:'center',  backgroundSize:'cover'}}
            >
                <NavLink to='/opcontent' >Photography</NavLink>
            </div>
           <div className="OPName"
            style={{backgroundImage:`url(${ImgCompo[1][psRanIndex]['image']})`, backgroundPosition:'center', backgroundSize:'cover'}}
            >
                <NavLink to='/opcontent' >Photoshop</NavLink>
            </div>
            <div className="OPName" 
            style={{backgroundImage:`url(${ImgCompo[2][artRanIndex]['image']})`, backgroundPosition:'center', 
             backgroundSize:'cover'}}
            >
                <NavLink to='/opcontent' >Art Work</NavLink>
            </div>
        </div>
        
        </>
    )
}