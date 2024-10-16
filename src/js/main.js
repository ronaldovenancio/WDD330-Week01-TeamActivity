import { loadHeaderFooter } from "./utils.mjs";
//import ProductList from "./ProductList.mjs";
import { Modal } from "./modal.mjs";

// Load the header and footer
loadHeaderFooter();

const title = "🎁 Register Now & Be a Winner! 🎁";
const message = "Sign up on your first visit and get a chance to get a win premium camping gear – tents, sleeping bags, and more! 🏕️";
const modal = new Modal(title, message, true);
modal.ShowModal();

/*
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

// Create an instance of ProductData
const productData = new ProductData("tents");

// Define the list element
const listElement = document.querySelector(".product-list");

// Create an instance of ProductList
const productListing = new ProductList("tents", productData, listElement);
productListing.init();

loadHeaderFooter();
*/

/*
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

// Create an instance of ProductData
const productData = new ProductData("tents");

// Define the list element
const listElement = document.querySelector(".product-list");

// Create an instance of ProductList
const productListing = new ProductList("tents", productData, listElement);
productListing.init();

loadHeaderFooter();
*/
