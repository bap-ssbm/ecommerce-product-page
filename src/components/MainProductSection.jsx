import React, { useState, useEffect } from "react";
import PicturesWrapper from "./PicturesWrapper";
import DescriptionWrapper from "./DescriptionWrapper";
import CartBasket from "./CartBasket";

function MainSection(props) {
    const [increaseSize, changeIncreaseSize] = useState(false);

    function showPreview(){
   
        if(increaseSize){
            changeIncreaseSize(false);
            document.body.style.overflow = 'auto';
        }else{
            changeIncreaseSize(true);
            document.body.style.overflow = 'hidden'
        }
    }
    if(props.viewportWidth < 782){
        
        document.body.style.overflow = 'auto';
      }else if (increaseSize){
        document.body.style.overflow = 'hidden';
      }
      
    

    return (
        <main>
            <div className="main-container">
            {props.showCart&&<CartBasket  deleteItem={props.deleteItem} userCart={props.userCart} product = {props.product} />}
                <PicturesWrapper showPreview={props.viewportWidth>782?showPreview:null} viewportWidth={props.viewportWidth} canIncreaseSize={true}/>
                <DescriptionWrapper  product = {props.product} addToCart={props.addToCart} />
                {(increaseSize&&props.viewportWidth>782)&&(<PicturesWrapper showPreview={showPreview} canIncreaseSize={false}/>)}
            </div>
            
        </main>
    );
}

export default MainSection;