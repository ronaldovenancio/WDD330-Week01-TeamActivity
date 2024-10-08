import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  // Added visual discount if any
    const isDiscounted = product.FinalPrice < product.SuggestedRetailPrice;
    let discountAmount = 0;

    if (isDiscounted) {
        discountAmount = ((product.SuggestedRetailPrice - product.FinalPrice) / product.SuggestedRetailPrice * 100).toFixed(0);
    }
  return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Image}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`
}

export default class ProductListing {
  constructor(category, dataSource, listElement) {
    this.products = [];
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
/*
  // Stretch Activity Week 2 #2
  // Filter the products that are available
  filterProducts(list) {
    return list.filter((product) => product.Available === true);

  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const list = await this.dataSource.getData();
    
    // render the list
    this.renderList(list);
  }
  // render after doing the first stretch
  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);

  }
*/

  // Before Stretch Activity Week 2
  // Render the product listing
  // renderList(list) {
  //   const info = list.map((product) => productCardTemplate(product)).join("");
  //   this.listElement.innerHTML = info;
  // }



  // Sort the products/list by price or name
  sortList(list, criteria) {
    if (criteria === "name") {
      return list.sort((a, b) => a.Name.localeCompare(b.Name));
    } else if (criteria === "price") {
      return list.sort((a, b) => a.FinalPrice - b.FinalPrice);
    }
    return list;
  }

  // After Stretch Activity Week 2
  // Render the product listing

  renderList(list) {
    this.listElement.innerHTML = ""; // Clear the current list before rendering
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
  /*
  renderList(list) {
    if (list.length > 4) {
        list.length = 4
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
  }  */


// Initialize the product listing and fetch the data
async init() {
  const list = await this.dataSource.getData(this.category);
  // render the list
  this.renderList(list);

  // Sort the products/list by price or name
  const sortElement = document.getElementById("sort");
  sortElement.addEventListener("change", (event) => {
    const sortedList = this.sortList(list, event.target.value);
    this.renderList(sortedList);
  });

  //set the title to the current category
  // Capitalize the first letter of the category
  const title =
    this.category.charAt(0).toUpperCase() + this.category.slice(1);
  document.querySelector(".title").innerHTML = title;
}
}
