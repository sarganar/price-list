"use strict";
import products, { categories } from "./DB.js";

export function getAllProducts() {
  addId(products);
  orderProducts(products);
  return products;
}

export function getCategoriesTable() {
  return categories;
}

function orderProducts(products) {
  products = products.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });
}

function addId(products) {
  let idCount = 1;
  products.forEach((element) => {
    element.id = idCount;
    idCount = idCount + 1;
  });
}
