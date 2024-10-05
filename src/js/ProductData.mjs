const baseURL = import.meta.env.VITE_SERVER_URL;
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  async getData(category) {
    const Response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(Response);
    return data.Result;
  }
  async findProductById(id) {
    const Response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(Response);
    return data.Result;
  }
}

/*
export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData();
    //console.log(products);
    return products.find((item) => item.Id === id);
  }
}

export async function findProductById(id) {
  const products = await this.getData();
  return products.find((item) => item.Id === id);
} 
*/



/*
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function findProductById(id) {
  const products = await getData();
  return products.find((item) => item.Id === id);
} 


export function getData(category = "tents") {
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    .then((data) => data);
}
*/
