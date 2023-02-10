import {React, useState} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImgCompo } from "../ImgComp";
import '../cssComponents/Project.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import {AnimatePresence, motion} from 'framer-motion'
function Photography(){
    const [selectedId, setSelectedId] = useState(null)
            
    return(
        <>
        <div className="imageContainers">
            {
                ImgCompo[0].map((item)=> {
                    return(
                        <motion.div onClick={()=>setSelectedId(item.id)} 
                        layoutId={item.id} key={item.id} className="image">
                            <motion.img effect="blur" layout width={'100%'} height='100%' src={('/'+item.image)} alt="Image" />
                        </motion.div>
                    )
                })
            }
            {
                selectedId && 
                <div className="showImage"
                >
                <div className="closeBtn" onClick={()=> setSelectedId(null)}>
                    <div className="leftTilt"> <div className="rightTilt"></div></div>
                   
                </div>
                <img src= {( '/' + ImgCompo[0][selectedId-1].image)}  alt="image" />
            </div>
            }
            
        </div>
        </>
    )
}
export default Photography