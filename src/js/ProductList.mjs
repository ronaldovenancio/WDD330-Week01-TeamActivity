// ProductList.mjs
export default class ProductListing {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
      this.products = [];
  }

  async init() {
      try {
          this.products = await this.getData();
          this.render();
      } catch (error) {
          console.error('Error fetching product data:', error);
      }
  }

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