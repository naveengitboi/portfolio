import React from "react";
import  {ImgCompo}  from "../ImgComp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import '../cssComponents/Project.css'
function Photography(){
    return(
        <>
        
            <div className="imageContainers">
                <img src={ImgCompo[1][0]['image']} alt="Hello" />
            
                    {
                        ImgCompo[0].map((img, index) => (
                            <div className="image">
                                <LazyLoadImage key ={index} src={img.image} alt="Image" />
                            </div>
                        ) )
                    }
            </div>
        </>
    )
}
export default Photography