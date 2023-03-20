import React, { useState, useEffect } from "react";


function PicturesCarousel(props) {

    
    function CarouselSlide() {
        switch (props.activeCarousel) {
            case 1:
            return <img onClick = {props.canIncreaseSize?props.showPreview:null} className={"main-picture " + (!props.canIncreaseSize?"main-preview-picture":"")} src="./images/image-product-1.jpg" alt="preview" />
            break;
                case 2:
            return <img  onClick ={props.canIncreaseSize?props.showPreview:null} className={"main-picture " + (!props.canIncreaseSize?"main-preview-picture":"")} src="./images/image-product-2.jpg" alt="preview" />
            break;
            case 3:
            return <img  onClick ={props.canIncreaseSize?props.showPreview:null} className={"main-picture " + (!props.canIncreaseSize?"main-preview-picture":"")} src="./images/image-product-3.jpg" alt="preview" />
            break;
            case 4:
            return <img   onClick = {props.canIncreaseSize?props.showPreview:null} className={"main-picture " + (!props.canIncreaseSize?"main-preview-picture":"")} src="./images/image-product-4.jpg" alt="preview"  />
            break;
        
            default:
            break;
        }
    }

    return (
        <div className={"carousel " + (!props.canIncreaseSize?"main-picture-container":"")}>
             {(!props.canIncreaseSize&&<button className="exit-preview-btn" onClick={props.showPreview}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
            </button>)}
            <CarouselSlide/>

            <button className={"carousel-btn btn-prev " + (props.canIncreaseSize?"hide-btns":"")}onClick={props.carouselPrevious}>
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
            </button>
            <button className={"carousel-btn btn-next " + (props.canIncreaseSize?"hide-btns":"")}onClick={props.carouselNext}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
            </button>
        </div>

    );
}

export default PicturesCarousel;