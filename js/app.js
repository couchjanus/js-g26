/**
 * documentations
 */
"use strict"
const shoppingCart = document.querySelector('.shopping-cart');
const wishList = document.querySelector('.wish-list');

let addToCart = document.querySelector('.add-to-cart');



function countItems(elem) {
    let count = +elem.textContent;
    return ++count;
}

function addProductToCart(product) {
    console.log("product  =", product);
    shoppingCart.textContent = countItems(shoppingCart);
}

function addToCartButton() {
    let addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((item) => {
        // console.log("Element  => ", item);
        item.addEventListener('click', (event)=>{
            // console.log("event: ", event.target);
            let parentItem =  event.target.parentNode.parentNode.parentNode.parentNode.parentNode;

            let productName =  parentItem.querySelector('h6 .product-name'); 
            let productPrice =  parentItem.querySelector('p .product-price'); 
            // console.log(productName, productPrice);
            // console.log("currentItem: ", currentItem.parentNode.parentNode.parentNode.parentNode.parentNode);
            let product = {
                name: productName.textContent,
                price: productPrice.textContent
            };
            addProductToCart(product);
        })
    });
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.navbar-toggler').addEventListener('click', () => document.querySelector('.collapse').classList.toggle('show'));

    
    addToCartButton();

    // for(let i=0; i<addToCartButtons.length; i++){
    //     console.log("Element ", i, " => ", addToCartButtons[i]);
    // }
    // let i=0;
    // while (i<addToCartButtons.length) {
    //     console.log("Element ", i, " => ", addToCartButtons[i]);
    //     i++;
    // }

    // addToCartButtons.forEach((item) => {
    //     console.log("Element  => ", item);
    // });

    // addToCart.addEventListener('click', () => {
    //     shoppingCart.textContent = countItems(shoppingCart);
    // });

    // document.querySelector('.add-to-wishlist').addEventListener('click', () => { 
    //     document.querySelector('.wish-list').textContent = countItems(wishList);
    //     document.querySelector('.wish-list').style.color = 'red';
    // });
   
});