// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]");
  }
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// it is an additional function
export function setContent(selector, content) {
  qs(selector).innerHTML = content;
}

// helper to get parameter strings
export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}


// function to take a list of objects and a template and insert the objects as HTML into the DOM
// This part is an anctivity week 2
export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false,) {
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function renderWithTemplate(template, parentElement, data, callback) {
  //console.log(templateFn);
  parentElement.insertAdjacentHTML("afterbegin", template);
  if (callback) {
    callback(data);
  }
}

export async function loadTemplate(path) {
  const html = await fetch(path);
  const template = await html.text();
  return template;
}


export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const headerElement = document.querySelector("#main-header");
  const footerElement = document.querySelector("#main-footer");
  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
  updateCartCount();
}

export function updateCartCount() {
  const cartItems = getLocalStorage("cart");
  const cartCountElement = document.querySelector(".card-count");
  cartCountElement.textContent = cartItems.length;
}