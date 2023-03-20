
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MainSection from "./MainProductSection";


function App() {

  //viewport settings

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //load data
  let userStorage = [];
 

  if (localStorage.getItem("UserCart") !== null){
    const localData = JSON.parse(localStorage.getItem("UserCart"));
    userStorage = localData;
    console.log(userStorage)
    console.log("local storage loaded");
  }

  const [userCart, updateUserCart] = useState(userStorage);
  //add to cart functions logic

  const sneakers = {
    img: "./images/image-product-1-thumbnail.jpg",
    name: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring adurable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250.00,
    discount: .5
  };

 

  const [showCart, updateShowCart] = useState(false);

  function showCartBtn() {
    updateShowCart(showCart ? false : true);
  }

  function addToCart(amountToAdd, product) {
    const newid = userCart.length + 1;
    if (amountToAdd > 0) {
      let itemToAdd = {
        id: newid,
        product: product,
        amount: amountToAdd
      };
      updateUserCart(prevItems => {
        localStorage.setItem("UserCart", JSON.stringify([...prevItems, itemToAdd]));
        return [...prevItems, itemToAdd];
      })
    }
    
  }
  function deleteItem(id) {
    
    const updatedCart = userCart.filter(item => item.id !== id);
    localStorage.setItem("UserCart", JSON.stringify(updatedCart));
    updateUserCart(updatedCart);
  }

  return (
    <div className="app">
      <Navbar viewportWidth={viewportWidth} userCart={userCart} showCartBtn={showCartBtn} />


      <MainSection deleteItem={deleteItem} addToCart={addToCart} userCart={userCart} viewportWidth={viewportWidth} product={sneakers} showCart={showCart} />
    </div>
  );
}

export default App;
