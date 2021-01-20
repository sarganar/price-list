import { getAllProducts, getCategoriesTable } from "./API.js";
import { printProducts, initUI } from "./UI.js";

let fullProducts = [];
export let keyedFullProducts = [];
export let categoriesTable;
export let categorizedProducts = [];

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  categoriesTable = getCategoriesTable();
  initUI();

  fullProducts = getAllProducts();
  keyedFullProducts = keyBy(fullProducts, "id");
  enrichProducts(keyedFullProducts);

  // console.log("keyedFullProducts:", keyedFullProducts);
  categorizedProducts = buildCategorizedProducts(fullProducts);

  printProducts();
}

const keyBy = (arr, key) =>
  arr.reduce((acc, el) => {
    acc[el[key]] = el;
    return acc;
  }, {});

function enrichProducts(keyedFullProducts) {
  for (const key in keyedFullProducts) {
    const product = keyedFullProducts[key];
    //product.isVisibleByCategory = true;

    // rich de tag with more topics words
    let nameSplitted = product.name.toLowerCase().split(" ");
    nameSplitted = removeShortWords(nameSplitted);
    product.tags = product.tags.concat(nameSplitted);
    product.tags = product.tags.concat(product.brand.toLowerCase());
  }
}
const removeShortWords = (array) => array.filter((word) => word.length > 2);

function buildCategorizedProducts(fullProducts) {
  const categoriesSet = new Set();

  fullProducts.forEach((product) => categoriesSet.add(product.categories));

  let categoryObj = [];
  // console.log("*categoriesSet", categoriesSet);
  const categoriesArray=[...categoriesSet].sort();
  // console.log("*categoriesArray", categoriesArray);


  categoriesArray.forEach((category) => {
    let brandObj = [];
    const filteredByCategory = fullProducts.filter(
      (product) => product.categories === category
    );
    // console.log(" category:", category);
    const brandSet = new Set();
    filteredByCategory.forEach((product) => brandSet.add(product.brand));

    // console.log(" brandSet", brandSet);
    brandSet.forEach((brand) => {
      const filteredByBrand = filteredByCategory.filter(
        (product) => product.brand === brand
      );
      //   console.log("  filteredByBrand", filteredByBrand);
      const listId = [];
      filteredByBrand.forEach((product) => {
        listId.push(product.id);
      });
      brandObj[brand] = [...listId];
    });
    // console.log("  brandObj", brandObj);
    categoryObj[category] = { ...brandObj };
  });
  // console.log("categorizedProducts:", categoryObj);
  return categoryObj;
}

