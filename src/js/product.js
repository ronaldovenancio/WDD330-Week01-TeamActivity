import { getParam, loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();


const productId = getParam("product");
const dataSource = new ExternalServices();
//const dataSource = new ProductData("tents");
const product = new ProductDetails(productId, dataSource);

product.init();




/*


import { getParams, loadHeaderFooter, setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { findProductById } from "./ProductData.mjs";
import { qs, setContent } from "./utils.mjs"

loadHeaderFooter();

function addProductToCart(product) {
  // TODO product should be an array
  const currentCart = getLocalStorage("so-cart") || [];
  currentCart.push(product);
  setLocalStorage("so-cart", currentCart);
}

export default async function productDetails(productID) {
  const product = await findProductById(productId);
  renderProductDetails(product);
}

function renderProductDetails(products){
  //set basic content
  setContent("#productName", product.Brand.Name);
  setContent("#productNameWithoutBrand", product.Brand.NameWithoutBrand);
  setContent("#productFinalPrice", product.FinalPrice);
  setContent("#productDescriptionHtmlSimple", product.DescriptionHtmlSimple);
  //set image src
  qs("#productImage").setAttribute("src", product.Image);
  // handle add to cart
  qs("addToCart").addEventListener{
    "click",
    addProducttoCart.bind(null,product)
  }
}




// add to cart button event handler
async function addToCartHandler(e) {  
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}


// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);


const dataSource = new ProductData("tents");
const productId = getParams("product");

const product = new ProductDetails(productId, dataSource);
product.init();
*/




/*
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./ProductData.mjs";
//import { getParams, loadHeaderFooter } from "./utils.mjs";
//import ProductDetails from "./ProductDetails.mjs";
//const dataSource = new ProductData("tents");
  
  function addProductToCart(product) {
    // TODO product should be an array
    const currentCart = getLocalStorage("so-cart") || [];
    currentCart.push(product);
    setLocalStorage("so-cart", currentCart);
  }
  
  // add to cart button event handler
  async function addToCartHandler(e) {  
    const product = await findProductById(e.target.dataset.id);
    addProductToCart(product);
  }
  
  // add listener to Add to Cart button
  document
    .getElementById("addToCart")
    .addEventListener("click", addToCartHandler);
*/
