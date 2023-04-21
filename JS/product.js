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
      '<li><input type="checkbox" data-id="' +
      pricingFilter +
      '" name="' +
      list_of_pricings[i].p_id +
      '" /><label for="' +
      list_of_pricings[i].p_id +
      '">' +
      list_of_pricings[i].name;
    ("</label></li>");
  }

  // return the html
  return html;
};

const displayGenders = (genders) => {
  const html_of_all_list_of_genders = genderList(genders);
  $("#gender_list").html(html_of_all_list_of_genders);
};

// creating a list of prices html elements
const genderList = (list_of_genders) => {
  let html = "";

  for (var i = 0; i < list_of_genders.length; i++) {
    // concating
    html +=
      '<li><input type="checkbox" data-id="' +
      list_of_genders[i].gender_id +
      '" name="' +
      list_of_genders[i].gender_id +
      '" /><label for="' +
      list_of_genders[i].gender_id +
      '">' +
      list_of_genders[i].name;
    ("</label></li>");
  }

  // return the html
  return html;
};

const filterFilter = (filterinfo) => {
  // filter options
  console.log(filterinfo.target.dataset.id);
};

// checking the dom is loaded or not
$(document).ready(() => {
  displayPricing(all_pricing);
  displayGenders(all_genders);

  $("#pricing_list li input").click(filterFilter);
  $("#gender_list li input").click(filterFilter);
});
