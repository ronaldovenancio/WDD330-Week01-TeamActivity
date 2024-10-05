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
    //this.products = [];
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  // Initialize the product listing and fetch the data
  async init() {
    const list = await this.dataSource.getData(this.category);
    this.renderList(list);
    document.querySelector(".title").innerHTML = this.category;
  }

  // Stretch Activity Week 2 #2
  // Filter the products that are available
  //filterProducts(list) {
    //return list.filter((product) => product.Available === true);
  //}

  // Before Stretch Activity Week 2
  // Render the product listing
  // renderList(list) {
  //   const info = list.map((product) => productCardTemplate(product)).join("");
  //   this.listElement.innerHTML = info;
  // }

  // After Stretch Activity Week 2
  // Render the product listing
  renderList(list) {
    if (list.length > 4) {
        list.length = 4
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
  }

  /*
  // Initialize the product listing and fetch the data
  async init() {
    const list = await this.dataSource.getData();
    // console.log(list);
    // Filter the list
    const filteredList = this.filterProducts(list);
    // console.log(filteredList);
    // Render the filtered list
    this.renderList(filteredList);
  }
    */
}
  /*  
  async init() {
      try {
          this.products = await this.getData();
          this.render();
      } catch (error) {
          console.error('Error fetching product data:', error);
      }
  }
  */

  /*

  async getData() {
      const response = await fetch(this.dataSource);
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.filter(product => product.category === this.category);
  }

  render() {
      this.listElement.innerHTML = ""; // Clear previous content
      this.products.forEach(product => {
          const card = this.createProductCard(product);
          this.listElement.appendChild(card);
      });
  }

  createProductCard(product) {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <span>$${product.price}</span>
      `;
      return card;
  }
}
*/



/*
export default class ProductListing {
    constructor(category, dataSource, listElement) {
      // We passed in this information to make our class as reusable as possible.
      // Being able to define these things when we use the class will make it very flexible
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }

    async init() {
      // our dataSource will return a Promise...so we can use await to resolve it.
      const list = await this.dataSource.getData();
      // render the list - to be completed
    }
  }
*/
