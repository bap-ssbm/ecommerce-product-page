import React, { useState, useEffect } from "react";
import AddItems from "./AddItems";


function DescriptionWrapper(props) {
    return (
        <div className="main-wrappers description-wrapper">
            <h2 className="company-title">SNEAKER COMPANY</h2>

            <h1 className="product-title">{props.product.name}</h1>

            <p className="description">
                {props.product.description}
            </p>
            <div className="price-wrapper-container">
                <div className="price-wrapper">
                    <h1 className="price">
                        {(props.product.price * (1-props.product.discount)).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}
                    </h1>

                    <div className="discount-box">
                        <p>{props.product.discount*100}%</p>
                    </div>
                </div>

                <h3 className="discount-price">
                    {(props.product.price).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    })}
                </h3>
            </div>
            <AddItems product = {props.product} addToCart={props.addToCart}/>

            
        </div>
    );
}

export default DescriptionWrapper;