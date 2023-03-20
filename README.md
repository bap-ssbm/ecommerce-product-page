## Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart 
- View the cart and remove items from it
- save data to local storage so that cart is saved even if page is refreshed
### Screenshot

![(https://prnt.sc/z_hfOfdCmY09)]


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://bap-ssbm.github.io/ecommerce-product-page/]

## My process
desktop first

first created the appearances with html css. inside react. I decided also to create the hamburger menu with react js only. 


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desk-top first workflow
- [React](https://reactjs.org/) - JS library



### What I learned



```html

     <div className="addToCart">
            <div className="add-subtract-items">
                <button className="subtract-btn btn" onClick={decreaseAmount}>
                    <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" />
                        </defs>
                        <use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#a" />
                    </svg>
                </button>
                <input className="amount-input-num" value={amountToAdd} onChange={catchChange}></input>
                <button className="add-btn btn" onClick={increaseAmount}>
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" />
                        </defs>
                        <use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#b" />
                    </svg>
                </button>
            </div>
            <button className="cart-btn" onClick={()=>{
                props.addToCart(amountToAdd, props.product);
            }}>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero" />
                </svg>
                <p> Add to cart</p>
            </button>

        </div>
```
im proud of this one because i made it so that this web app is made for dynamic use in the future. 
Users can add new items inside an array and that array is saved inside the local storage, and also, users are also able to type the amount of  items using the input html tag. Inputting letters doesnt work, and programmed it so that it doesnt display as "nan"
as well as use the button to increase the number
```css
/* width */
::-webkit-scrollbar {
    width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #ffffff;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: hsla(25, 17%, 40%, 0.435);
    border-radius: 50px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #55555583;
}

```
I learned how to change thescrollbar appearancer which was pretty cool. 
```js
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
```
i like how simple i made this code



### Continued development

I felt like i was able to complete this project withinmy predicted time- which was within 2 days. 

#
