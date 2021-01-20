"use strict";
import {
  categorizedProducts,
  categoriesTable,
  keyedFullProducts,
} from "./app.js";

let productContainer;
let inputSearch;
let selectCategories;

const filterCriteria = {
  byName: "",
  byRegion: "ALL",
};

export function initUI() {
  productContainer = document.querySelector(".products-container");
  inputSearch = document.querySelector("#search");
  selectCategories = document.querySelector("#categories-select");

  // populate option select Categories
  for (const value in categoriesTable) {
    const optionSlot = document.createElement("option");
    optionSlot.value = value;
    optionSlot.textContent = categoriesTable[value].description;
    selectCategories.appendChild(optionSlot);
  }

  selectCategories.addEventListener("change", filterByCategory);
  inputSearch.addEventListener("input", filterByWords);
}

export function printProducts() {
  let elementHTML = "";

  // organize the lists in categories, then in brands
  for (const category in categorizedProducts) {
    const listContainer = document.createElement("div");
    listContainer.className = "list-container";
    listContainer.id = category;

    const listTitleCategory = document.createElement("h3");
    listTitleCategory.className = "list-title-category";
    listTitleCategory.textContent = `${categoriesTable[category].description}`;
    listTitleCategory.id = `title-${category}`;
    listContainer.appendChild(listTitleCategory);

    for (const brand in categorizedProducts[category]) {
      const listTable = document.createElement("table");
      listTable.className = "u-full-width list-table";
      elementHTML = `
       <tbody>
       `;
      let textListTitle = "";

      const productIDs = categorizedProducts[category][brand];
      productIDs.forEach((productID) => {
        const { name, product } = keyedFullProducts[productID];

        elementHTML += `
        <tr id="ID${productID}">
          <td>${name} ${printProductPresentation(product)}
          </td>
          <td>${printPrice(product)}</td>
        </tr>
        `;
      });
      if (brand === "NO-BRAND") {
        //textListTitle = `${categoriesTable[category].description}`;
        textListTitle = "";
      } else {
        textListTitle = `${brand}`;
      }
      elementHTML += `
      </tbody>
    `;
      listTable.innerHTML = elementHTML;

      const listTitleBrand = document.createElement("h4");
      listTitleBrand.className = "list-title-brand";
      listTitleBrand.textContent = textListTitle;
      listTitleBrand.id = `${category}-${brand}`;
      listContainer.appendChild(listTitleBrand);

      listContainer.appendChild(listTable);
    } // for... brand

    productContainer.appendChild(listContainer);
  } // for... category
}

function printProductPresentation(product) {
  let textHTML = "";

  product.forEach((item) => {
    const { presentation, hasStock, discount } = item;
    let textDiscount = "";
    let textClass = "";
    if (discount > 0) textDiscount = `${discount}%OFF`;
    if (!hasStock) textClass = ' class="no-stock"';
    textHTML += `
    <br><span${textClass}>${presentation} ${textDiscount}</span>`;
  });

  return textHTML;
}
function printPrice(product) {
  let textHTML = "";

  product.forEach((item) => {
    const { price, discount } = item;
    let textPrice = price;
    if (discount > 0) textPrice = calculateFinalPrice(price, discount);
    textHTML += `
    <br>$${textPrice}`;
  });

  return textHTML;
}

const calculateFinalPrice = (price, discount) =>
  parseInt(price * (1 - discount / 100));

function filterByCategory(ev) {
  //const optionChosen = ev.target.value;
  filterCriteria["byRegion"] = ev.target.value;
  filterCriteria["byName"] = "";
  inputSearch.value = "";

  filterProducts();
}

function filterByWords(ev) {
  const wordSearch = ev.target.value.toLowerCase();
  if ((wordSearch.length < 3) & (wordSearch.length > 0)) {
    return;
  }
  selectCategories.value = "ALL";
  filterCriteria["byName"] = wordSearch;
  filterCriteria["byRegion"] = "ALL";

  filterProducts();
}

function filterProducts() {
  // BY CATEGORIES SECTION
  const allTables = document.querySelectorAll(".list-container");
  const allRows = document.querySelectorAll("tr");
  const allTitles = document.querySelectorAll("h4");
  const optionChosen = filterCriteria["byRegion"];

  switch (optionChosen) {
    case "ALL":
      makeAllVisible(allTitles);
      makeAllVisible(allRows);
      makeAllVisible(allTables);
      break;

    case "SS":
      makeAllVisible(allTitles);
      makeAllVisible(allRows);
      makeAllVisible(allTables);
      makeVisibleByFalse("hasStock");
      break;

    case "DES":
      makeAllVisible(allTitles);
      makeAllVisible(allRows);
      makeAllVisible(allTables);
      makeVisibleByTrue("featured");
      break;

    default:
      makeAllVisible(allTitles);
      makeAllVisible(allRows);
      makeVisibleByID(allTables, optionChosen);
      break;
  }

  // BY SEARCH WORD SECTION
  wordsProcessing();
}

const makeAllVisible = (listItems) =>
  listItems.forEach((item) => (item.hidden = false));

const makeVisibleByID = (listElements, optionChosen) =>
  listElements.forEach((list) => {
    if (list.id === optionChosen) {
      list.hidden = false;
    } else {
      list.hidden = true;
    }
  });

const makeVisibleByTrue = (property) => decideVisibility(property, true);
const makeVisibleByFalse = (property) => decideVisibility(property, false);

function decideVisibility(property, comparator) {
  for (const category in categorizedProducts) {
    const divTable = document.querySelector(`#${category}`);
    let decideShowTable = false;

    for (const brand in categorizedProducts[category]) {
      const listIDs = categorizedProducts[category][brand];
      const valueProp = [];
      let decideShowTitle = false;
      const divTitle = document.querySelector(`#${category}-${brand}`);

      listIDs.forEach((id) => {
        let isVisible;
        const listProducts = keyedFullProducts[id].product;
        listProducts.forEach((product) => {
          valueProp.push(product[property]);
        });
        if (comparator) {
          // an id can has multiples products
          isVisible = valueProp.some((value) => value); // logical OR
        } else {
          isVisible = valueProp.some((value) => !value); // NOT(logical AND)
        }
        document.querySelector(`#ID${id}`).hidden = !isVisible; //hidden the entire id if no product is vivible
        //keyedFullProducts[id].isVisibleByCategory = isVisible;

        decideShowTitle = decideShowTitle || isVisible;
      });
      divTitle.hidden = !decideShowTitle;
      decideShowTable = decideShowTable || decideShowTitle;
    } // for...brand
    divTable.hidden = !decideShowTable;
  } //for...category
}

function wordsProcessing() {
  const wordSearch = filterCriteria["byName"];

  if (wordSearch.length < 3) return;

  for (const category in categorizedProducts) {
    const divTable = document.querySelector(`#${category}`);
    let decideShowTable = false;

    for (const brand in categorizedProducts[category]) {
      const listIDs = categorizedProducts[category][brand];
      const valueProp = [];
      let decideShowTitle = false;
      const divTitle = document.querySelector(`#${category}-${brand}`);

      listIDs.forEach((id) => {
        let isVisible;

        const tags = keyedFullProducts[id].tags;
        const wordMatched = tags.find((element) =>
          element.includes(wordSearch)
        );

        if (wordMatched) {
          isVisible = true;
        } else {
          isVisible = false;
        }
        //console.log("wordMatched", wordMatched);
        document.querySelector(`#ID${id}`).hidden = !isVisible;
        decideShowTitle = decideShowTitle || isVisible;
      });
      divTitle.hidden = !decideShowTitle;
      decideShowTable = decideShowTable || decideShowTitle;
    } // for...brand
    divTable.hidden = !decideShowTable;
  } //for...category
}
