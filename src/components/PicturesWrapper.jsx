import React, { useState, useEffect } from "react";
import PicturesCarousel from "./PicturesCarousel";

function PicturesWrapper(props) {
    const [activeCarousel, changeActiveCarousel] = useState(1);



    function carouselNext() {
       changeActiveCarousel((activeCarousel + 1)>4? 1: activeCarousel + 1)
       
    }
    function carouselPrevious() {
        changeActiveCarousel((activeCarousel  - 1) == 0 ? 4: activeCarousel - 1)
    }

    return (
        <div className={"main-wrappers pictures-wrapper " + (!props.canIncreaseSize? "previewScreen":"")}>
           
            <PicturesCarousel   product = {props.product}  canIncreaseSize={props.canIncreaseSize} showPreview={props.showPreview} activeCarousel={activeCarousel} carouselNext={carouselNext} carouselPrevious={carouselPrevious}/>
            <div className={"thumbnail-pics" + (!props.canIncreaseSize? " preview-thumbnail-pics":"")}>
                <div className="thumbail-pic" onClick={()=>{changeActiveCarousel(1)}} >
                    <div className="displayed-picture-wrapper" data-status={activeCarousel===1? "active" : ""}>
                        <img className="displayed-picture" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail-pic" data-status={activeCarousel===1? "active" : ""} />
                    </div>
                </div>
                <div className="thumbail-pic" onClick={()=>{changeActiveCarousel(2)}} data-status={activeCarousel===2? "active" : ""}>
                    <div className="displayed-picture-wrapper" data-status={activeCarousel===2? "active" : ""}>
                        <img className="displayed-picture" src="./images/image-product-2-thumbnail.jpg" alt="thumbnail-pic" data-status={activeCarousel===2? "active" : ""}/>
                    </div>

                </div>
                <div className="thumbail-pic" onClick={()=>{changeActiveCarousel(3)}} data-status={activeCarousel===3? "active" : ""}>
                    <div className="displayed-picture-wrapper" data-status={activeCarousel===3? "active" : ""}>
                        <img className="displayed-picture" src="./images/image-product-3-thumbnail.jpg" alt="thumbnail-pic" data-status={activeCarousel===3? "active" : ""}/>
                    </div>

                </div>
                <div className="thumbail-pic" onClick={()=>{changeActiveCarousel(4)}} data-status={activeCarousel===4? "active" : ""}>
                    <div className="displayed-picture-wrapper" data-status={activeCarousel===4? "active" : ""}>
                        <img className="displayed-picture" src="./images/image-product-4-thumbnail.jpg" alt="thumbnail-pic" data-status={activeCarousel===4? "active" : ""} />
                    </div>

                </div>

            </div>
        </div>


    );
}

export default PicturesWrapper;