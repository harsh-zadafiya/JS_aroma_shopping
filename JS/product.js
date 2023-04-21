"use strict";

// imported products & pricing information
import all_list_products from "../data/products.json" assert { type: "json" };
import all_pricing from "../data/pricing.json" assert { type: "json" };
import all_genders from "../data/gender.json" assert { type: "json" };

// global variables
const filter = [];

// common function to display the output of all pricing
const displayPricing = (pricings) => {
  const html_of_all_list_of_pricings = pricingList(pricings);
  $("#pricing_list").html(html_of_all_list_of_pricings);
};

// creating a list of prices html elements
const pricingList = (list_of_pricings) => {
  let html = "";

  // asssign css classes based on the task status and priority
  for (var i = 0; i < list_of_pricings.length; i++) {
    // concating all the task in the html variable

    const pricingFilter = [
      list_of_pricings[i].min_price,
      list_of_pricings[i].max_price,
    ];

    html +=
      '<li><input type="checkbox" data-id=' +
      pricingFilter +
      ' name="' +
      list_of_pricings[i].p_id +
      '" /><label for="' +
      list_of_pricings[i].p_id +
      '">' +
      list_of_pricings[i].name +
      "</label></li>";
  }

  // return the html
  return html;
};

const displayGenders = (genders) => {
  const html_of_all_list_of_genders = genderList(genders);
  $("#gender_list").html(html_of_all_list_of_genders);
};

// creating a list of genders html elements
const genderList = (list_of_genders) => {
  let htmlNew = "";

  for (var i = 0; i < list_of_genders.length; i++) {
    // concating
    htmlNew +=
      '<li><input type="checkbox" data-id=' +
      list_of_genders[i].gender_id +
      ' name="' +
      list_of_genders[i].gender_id +
      '" /><label for="' +
      list_of_genders[i].gender_id +
      '">' +
      list_of_genders[i].name +
      "</label></li>";
  }

  // return the html
  return htmlNew;
};

const displayProducts = (products) => {
  const html_of_all_list_of_products = productList(products);
  $("#product_list").html(html_of_all_list_of_products);
};

// creating a list of prices html elements
const productList = (list_of_products) => {
  let html = "";

  for (var i = 0; i < list_of_products.length; i++) {
    // concating
    html +=
      '<div class="product_list">' +
      '<img class="am-br-1" src="' +
      list_of_products[i].url +
      '" alt="demo" /><div class="card-body">' +
      '<div class="card-title am-mt am-text-center">' +
      '<h2 class="am-m-0">Cavaliers SweatShirt by Nike</h2>' +
      "</div>" +
      "<div class='card-desc am-mt'><span class='am-text-sm'>" +
      list_of_products[i].price +
      `</span><button id="add_to_cart" data-id=${list_of_products[i].id}` +
      ` class="b-btn am-center">add to cart</button>` +
      "</div>" +
      "</div></div>";
  }

  // return the html
  return html;
};

const filterFilter = (filterinfo) => {
  // filter options
  console.log(filterinfo.target.dataset);
};

const handleCart = (product) => {
  console.log("product :: ", JSON.parse(product.target.dataset.id));
};

// checking the dom is loaded or not
$(document).ready(() => {
  displayPricing(all_pricing);
  displayGenders(all_genders);
  displayProducts(all_list_products);

  $("#pricing_list li input").click(filterFilter);
  $("#gender_list li input").click(filterFilter);
  $("#product_list #add_to_cart").click(handleCart);
});
