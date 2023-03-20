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

    function mapItems(item) {
        return (
            <div className="cart-basket-item">
                <div className="cart-basket-img">
                    <img className="cart-basket-img-preview" src={item.product.img} />
                </div>
                <div className="cart-item-description">
                    <p className="cart-basket-item-name">
                        {item.product.name}
                    </p>
                    <p>
                        {(item.product.price * (1 - item.product.discount)).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })} x {item.amount}
                        <span className="total-price">
                            {(item.product.price * (1 - item.product.discount) * item.amount).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            })}
                        </span>
                    </p>
                </div>
                <button className="delete-btn" onClick={()=>{
                    props.deleteItem(item.id)
                }}>
                    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" />
                        </defs>
                        <use fill="#C3CAD9" fill-rule="nonzero" xlinkHref="#a" />
                    </svg>
                </button>
            </div>
        )
    }
    
```
im proud of this one because i made it so that this web app is made for dynamic use in the future. 
Users can add new items inside an array and that array is saved inside the local storage
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
