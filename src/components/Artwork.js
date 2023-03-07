import {React, useState} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImgCompo } from "../ImgComp";
import '../cssComponents/Project.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AnimatePresence, motion } from "framer-motion";
function Artwork(){
    const [selectedId, setSelectedId] = useState(null)
    return(
        <div className="imageContainers">
            {
                ImgCompo[2].map((item, index)=> {
                    return(
                        <div  onClick={()=>setSelectedId(item.id)} 
                        layoutId={item.id} key={item.id} className="image">
                            <LazyLoadImage effect="blur" width={'100%'} height='100%' key={index} src={('/'+item.image)} alt="" />
                        </div>
                    )
                })
            }

             <AnimatePresence>
            {
                selectedId && 
                <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration: 0.25}} exit={{scale:0}} className="showImage">
                <img src= {( '/' + ImgCompo[2][selectedId-1].image)}  alt="image" />
                <div className="closeBtn" onClick={()=> setSelectedId(null)}>
                    <div className="leftTilt"> <div className="rightTilt"></div></div>
                   
                </div> 
            </motion.div>
            
            }
            </AnimatePresence>
        </div>
    )
}

export default Artwork