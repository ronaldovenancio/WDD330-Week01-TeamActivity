import { getParam } from "./utils.mjs";

import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const category = getParam("category");

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();

