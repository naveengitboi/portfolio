import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImgCompo } from "../ImgComp";
import '../cssComponents/Project.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
function Artwork(){
    return(
        <div className="imageContainers">
            {
                ImgCompo[2].map((item, index)=> {
                    return(
                        <div className="image">
                            <LazyLoadImage effect="blur" width={'100%'} height='100%' key={index} src={('/'+item.image)} alt="Image" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Artwork