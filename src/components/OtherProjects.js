import React from "react";
import {motion, useScroll, useTransform} from 'framer-motion'
import { NavLink } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
export function OtherProjects(){
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
    return(
        <>
        <motion.div className="page">
            <motion.h1 style={{scale}} className="middleHeading">Apart from dev</motion.h1>
        </motion.div>
        <div className="otherProjects">
            <div className="OPName projectName">Photography</div>
            <div className="OPName projectName">PhotoShop</div>
            <div className="OPName projectName">Art Work</div>
        </div>

        </>
    )
}