import {React, lazy, Suspense} from "react";
import '../cssComponents/Home.css'
import {motion} from 'framer-motion'
import { smallH1, smallH1Container } from "./About";
const Contact = lazy(()=>import('./Contact'))
const Project = lazy(()=> import('./Project'))
const About = lazy(()=> import('./About'))
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
        <div>
        <Suspense fallback='Loading...'>
            <motion.div className="page" id="homePage"
            variants={pageAnimation}
                initial="hidden"
                whileInView={"show"}
                viewport ={{once: true}}
            >
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
        </Suspense>
        </div>
    )
}

export default Home