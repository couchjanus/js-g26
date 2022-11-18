/**
 * documentations
 */
"use strict"
const shoppingCart = document.querySelector('.shopping-cart');

let addToCart = document.querySelector('.add-to-cart');

function add_to_cart(){
    console.log("Product added to cart");
    console.log(shoppingCart.textContent);
    let val = shoppingCart.textContent;
    // val = parseInt(val);
    val = +val;
    // val = val + 1;
    // val +=1;
    ++val;
    shoppingCart.textContent = val;
}

// addToCart.onclick = add_to_cart;

// addToCart.addEventListener('click', add_to_cart);

// addToCart.addEventListener('click', function(){
//     let val = shoppingCart.textContent;
//     val = +val;
//     ++val;
//     shoppingCart.textContent = val;
// });

// addToCart.addEventListener('click', () => {
//     let val = shoppingCart.textContent;
//     val = +val;
//     ++val;
//     shoppingCart.textContent = val;
// });
// shoppingCart.textContent = 10;
// console.log(shoppingCart.textContent);



document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.navbar-toggler').addEventListener('click', () => document.querySelector('.collapse').classList.toggle('show'));


    addToCart.addEventListener('click', () => {
        let val = shoppingCart.textContent;
        val = +val;
        ++val;
        shoppingCart.textContent = val;
    });

    document.querySelector('.add-to-wishlist').addEventListener('click', () => {
        let val = document.querySelector('.wish-list').textContent;
        val = +val;
        ++val;
        document.querySelector('.wish-list').textContent = val;
        // document.querySelector('.wish-list').style.cssText += 'color: red; font-size:2rem;';
        document.querySelector('.wish-list').style.color = 'red';
    });
    // add-to-wishlist
});