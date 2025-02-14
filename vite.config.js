import { resolve } from "path";
import { defineConfig } from "vite";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  root: "src/",
  server: {
    host: "localhost",
    port: 3000,
    open: true,
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
        listing: resolve(__dirname, "src/product-listing/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
      },
    },
  },
});


/*
I did this change in week02 
It was changeg by the new build above
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        product1: resolve(
          __dirname,
          "src/product_pages/cedar-ridge-rimrock-2.html",
        ),
        product2: resolve(__dirname, "src/product_pages/marmot-ajax-3.html"),
        product3: resolve(
          __dirname,
          "src/product_pages/northface-alpine-3.html",
        ),
        product4: resolve(
          __dirname,
          "src/product_pages/northface-talus-4.html",
        ),
      },
    },
  },
});
*/
