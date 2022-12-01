/**
 * documentations
 */
"use strict"


let addToCart = document.querySelector('.add-to-cart');
const catalog = document.querySelector('.catalog');
const modalWindow = document.querySelector('.modal-window');
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


const setSvgIcons = () => `
<svg width="0" height="0" class="hidden">
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="delivery-time-1">
          <title>Delivery Time</title>
          <desc>A line styled icon from Orion Icon Library.</desc>
          <path data-name="layer2" fill="none" stroke="#202020" stroke-miterlimit="10" d="M62 46v-5l-8-7h-8" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
          <circle data-name="layer2" cx="24" cy="54" r="4" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></circle>
          <circle data-name="layer2" cx="54" cy="54" r="4" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></circle>
          <path data-name="layer2" fill="none" stroke="#202020" stroke-miterlimit="10" d="M50 54H28m-8 0h-4v-8h46v8h-4M24.5 24H46v22m-30 0V29.8M2 38h6m-2 8h2" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
          <circle data-name="layer1" cx="14" cy="18" r="12" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></circle>
          <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10" d="M14 12v8h6" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="helpline-24h-1">
          <title>Helpline 24h</title>
          <desc>A line styled icon from Orion Icon Library.</desc>
          <path data-name="layer2" d="M52.3 48.8c1.2.8 3 1.9 2.7 4.3S51 62 43 62s-17.7-6.3-26.2-14.8S2 28.9 2 21 9 9.3 10.9 9s3.6 1.5 4.3 2.7l6 9.2a4.3 4.3 0 0 1-1.1 5.8c-2.6 2.1-6.8 4.6 2.9 14.3s12.3 5.4 14.3 2.9a4.3 4.3 0 0 1 5.8-1.1z" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
          <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10" d="M54 2l-6 14h14m-4-6v12m-14 0H32l8.5-10v-.2A6 6 0 0 0 32 3.6" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
        </symbol>

        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="label-tag-1">
          <title>Label Tag</title>
          <desc>A line styled icon from Orion Icon Library.</desc>
          <path data-name="layer2" fill="none" stroke="#202020" stroke-miterlimit="10" d="M25.6 61L3 38.4 38.4 3l21.2 1.4L61 25.6 25.6 61z" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
          <circle data-name="layer2" cx="48" cy="15" r="4" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></circle>
          <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10" d="M31.3 21.4l11.3 11.3m-22.6 0l8.5 8.5M25.6 27l5.7 5.7" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
        </symbol>

      </svg>
`;

let productItemTemplate = (product) => `
<div class="col-xl-3 col-lg-4 col-sm-6">
<div class="product text-center">
  <div class="position-relative d-block mb-3">
    <div class="badge text-white bg-"></div><a class="d-block" href="detail.html"><img class="img-fluid w-100" src="${product.image}" alt="${product.name}"></a>
    <div class="product-overlay">
      <ul class="mb-0 list-inline btn-block" data-id="${product.id}" data-price="${product.price}">
        <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark add-to-wishlist" href="#!"><i class="far fa-heart"></i></a></li>
        <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-dark add-to-cart" href="#!">Add to cart</a></li>
        <li class="list-inline-item me-0"><a class="btn btn-sm btn-outline-dark detail" href="#productView" data-bs-toggle="modal"><i class="fas fa-expand"></i></a></li>
      </ul>
    </div>
  </div>
  <h6> <a class="reset-anchor product-name" href="detail.html">${product.name}</a></h6>
  <p class="small text-muted">$<span class="product-price">${product.price}</span></p>
</div>
</div>
`;

const setFooter = () => `
<div class="container py-4">
          <div class="row py-5">
            <div class="col-md-4 mb-3 mb-md-0">
              <h6 class="text-uppercase mb-3">Customer services</h6>
              <ul class="list-unstyled mb-0">
                <li><a class="footer-link" href="#!">Help &amp; Contact Us</a></li>
                <li><a class="footer-link" href="#!">Returns &amp; Refunds</a></li>
                <li><a class="footer-link" href="#!">Online Stores</a></li>
                <li><a class="footer-link" href="#!">Terms &amp; Conditions</a></li>
              </ul>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <h6 class="text-uppercase mb-3">Company</h6>
              <ul class="list-unstyled mb-0">
                <li><a class="footer-link" href="#!">What We Do</a></li>
                <li><a class="footer-link" href="#!">Available Services</a></li>
                <li><a class="footer-link" href="#!">Latest Posts</a></li>
                <li><a class="footer-link" href="#!">FAQs</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <h6 class="text-uppercase mb-3">Social media</h6>
              <ul class="list-unstyled mb-0">
                <li><a class="footer-link" href="https://www.twitter.com" target="_blank" title="Twitter" rel="nofollow"><i class="fab fa-twitter"></i> Twitter</a></li>
                <li><a class="footer-link" href="https://www.instagram.com" target="_blank" title="Instagram" rel="nofollow"><i class="fab fa-instagram"></i> Instagram</a></li>
                <li><a class="footer-link" href="https://www.facebook.com" target="_blank" title="Facebook" rel="nofollow"><i class="fab fa-facebook"></i> Facebook</a></li>
              </ul>
            </div>


          </div>
          <div class="border-top pt-4" style="border-color: #1d1d1d !important">
            <div class="row">
              <div class="col-md-6 text-center text-md-start">
                <p class="small text-muted mb-0">© 2022 All rights reserved.</p>
              </div>
              <div class="col-md-6 text-center text-md-end">
                <p class="small text-muted mb-0">Template designed by <a class="text-white reset-anchor" href="#">Shopaholic</a></p>
              </div>
            </div>
          </div>
        </div>
`;

function populateProductsList() {
    let content = "";
    for (const item of products) {
        content += productItemTemplate(item);
    }

    return content;
}


const setHeader = () => `
<div class="container px-lg-3">
          <nav class="navbar navbar-expand navbar-light py-3 px-lg-0">
            <!-- navbar-brand -->
            <a href="index.html" class="navbar-brand"><span class="fw-bold text-uppercase text-dark">Shopaholic</span></a>
            <!-- navbar-toggler -->

            <button class="navbar-toggler" type="button"><span class="navbar-toggler-icon"></span></button>
            
            <div class="navbar-collapse collapse">
              <!-- navbar-nav -->
              <ul class="navbar-nav me-auto">
                <!-- nav-item -->
                <li class="nav-item">
                  
                  <a href="index.html" id="index.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                 <a href="shop.html" id="shop.html" class="nav-link">Shop</a>
                </li>
                <li>
                  <a href="contact.html" id="contact.html" class="nav-link">Contact</a>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto">               
                <li class="nav-item">
                  <a href="cart.html" class="nav-link"><i class="fas fa-dolly-flatbed me-1 text-gray"></i>Cart<small class="text-gray fw-normal">(<span class="shopping-cart">2</span>)</small></a>
                </li>
                <li class="nav-item"><a href="#!" class="nav-link"><i class="far fa-heart me-1"></i><small class="text-gray fw-normal">(<span class="wish-list">0</span>)</small></a>
                </li>
                <li class="nav-item"><a href="#!" class="nav-link"><i class="fas fa-user me-1 text-gray fw-normal"></i>Login</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
`; 

let modalTemplate = (product) => `
<div class="modal" id="productView">
          <div class="modal-dialog">
            <div class="modal-content overflow-hidden border-0">
              <a href="#!" class="p-4 btn-close close"><i class="fas fa-times"></i></a>
            
              <div class="modal-body p-0">
            
                <div class="row align-items-stretch">
                  <div class="col-lg-6 p-lg-0">
                    <div class="bg-center bg-cover d-block h-100" style="background: url(${product.image});">
                    </div>
                  </div>
                
                  <div class="col-lg-6">
                    <div class="p-4 my-md-4">
                      
                      <ul class="list-inline mb-2">
                        <li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li><li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li><li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li><li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li><li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li>
                      </ul>
                    
                      <h2 class="h4">${product.name}</h2>
                      <p class="text-muted">$${product.price}</p>
                      <p class="text-sm mb-4">${product.description}</p>

                      <div class="row align-items-stretch mb-4">
                  
                        <div class="col-sm-7">
                          <div class="border d-flex align-items-center justify-content-between py-1 px-3">
                            <span class="small text-uppercase text-gray mr-4">Quantity</span>
                            <div class="quantity">
                              <i class="fas fa-caret-left p-0 dec-btn"></i>
                              <input class="form-control border-0 shadow-0 p-0" type="text" value="1">
                              <i class="fas fa-caret-right p-0 inc-btn"></i>
                            </div>
                          </div>
                        </div>
                  
                        <div class="col-sm-5">
                          <a class="btn btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center px-0" href="#!">Add to cart</a>
                        </div>
                    
                      </div>

                      <a class="btn btn-link text-dark reset-anchor p-0" href="#!"><i class="far fa-heart me-2"></i> Add to wish list</a>
                  
                    </div>
                
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
`;


function toggleModal(param, product={}) {

    if(modalWindow.innerHTML == '') {
        modalWindow.innerHTML = modalTemplate(product);
    }else{
        modalWindow.innerHTML = '';
    }
    modalWindow.style.display = param;
}

function detailButton() {
    let detailButtons = catalog.querySelectorAll('.detail');
    detailButtons.forEach(button => {
        button.addEventListener('click', event => {
            let productId = event.target.closest('.btn-block').dataset.id;
            let product = products.find(item => item.id == productId);

            toggleModal('block', product);

            modalWindow.querySelector('.close').addEventListener('click', event => {
                event.preventDefault();
                toggleModal('none');
            });
        });
    });
}

// active

let setActiveLink = () => {
    let arr = location.href.split('/');
    let current = arr.pop();
    let alink = document.getElementById(current);
    alink.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('icons')){
        document.getElementById('icons').innerHTML = setSvgIcons();
    }
    
    document.getElementById('header').innerHTML = setHeader();
    
    const shoppingCart = document.querySelector('.shopping-cart');
    const wishList = document.querySelector('.wish-list');
    setActiveLink();
    document.querySelector('.navbar-toggler').addEventListener('click', () => document.querySelector('.collapse').classList.toggle('show'));
    
    cart = Store.init('basket');

    
    catalog.innerHTML = populateProductsList();

    addToCartButton();
    addToWishListButton();

    detailButton();
   
    document.getElementById('footer').innerHTML = setFooter();
});