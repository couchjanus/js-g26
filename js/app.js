/**
 * documentations
 */
"use strict"
const shoppingCart = document.querySelector('.shopping-cart');
const wishList = document.querySelector('.wish-list');

let addToCart = document.querySelector('.add-to-cart');


class Store {
    static init(key) {
        if(!Store.isset(key)) {
            Store.set(key, []);
        }
        return Store.get(key);
    }

    static set(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }

    static get(key){
        let value = localStorage.getItem(key);
        return value === null ? null : JSON.parse(value);
    }

    static isset(key){
        return Store.get(key) !== null;
    }

    static unset(key){
        if(Store.isset(key)){
            localStorage.removeItem(key);
        }
    }

    static clear() {
        localStorage.clear();
    }
}

let cart = [];

function countItems(elem) {
    let count = +elem.textContent;
    return ++count;
}

function saveCart(cart) {
    Store.set('basket', cart);
}

function addProductToCart(product, amount=1) {
    // console.log("product  =", product);

    shoppingCart.textContent = countItems(shoppingCart);
    let cartItem = {...product, amount:amount};
    // console.log("cartItem  =", cartItem);
    cart = [...cart, cartItem];
    // console.log("cart  =", cart);
    saveCart(cart);
}

function addProductToWishList(product){
    wishList.textContent = countItems(wishList);
}

function addToWishListButton() {
    let addToWEishListButtons = document.querySelectorAll('.add-to-wishlist');
    addToWEishListButtons.forEach((item) => {
      
        item.addEventListener('click', (event)=>{
            let productId = event.target.closest('.btn-block').dataset.id;
            let price = event.target.closest('.btn-block').dataset.price;
            addProductToWishList({id: productId, price: price});
        })
    });
}



function addToCartButton() {
    let addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(item => 
        item.addEventListener('click', event => {
            let productId = event.target.closest('.btn-block').dataset.id;
            let price = event.target.closest('.btn-block').dataset.price;
            addProductToCart({id: productId, price: price});
        })
    );
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.navbar-toggler').addEventListener('click', () => document.querySelector('.collapse').classList.toggle('show'));
    
    cart = Store.init('basket');

    addToCartButton();
    addToWishListButton();
   
});