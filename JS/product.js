"use strict";

const all_genders = [
  {
    gender_id: 1,
    name: "male",
  },
  {
    gender_id: 2,
    name: "female",
  },
];
const all_pricing = [
  {
    p_id: 1,
    name: "$100 - $500",
    min_price: 100,
    max_price: 500,
  },
  {
    p_id: 2,
    name: "$501 - $1000",
    min_price: 501,
    max_price: 1000,
  },
  {
    p_id: 3,
    name: "$1001 - $1500",
    min_price: 1001,
    max_price: 1500,
  },
  {
    p_id: 4,
    name: "$1501 - $2000",
    min_price: 1501,
    max_price: 2000,
  },
  {
    p_id: 4,
    name: "$2001+",
    min_price: 2001,
    max_price: 100000,
  },
];
const all_list_products = [
  {
    id: 1,
    title: "Cavaliers SweatShirt by Nike",
    description: "This is a good product",
    gender: "male",
    price: 504.0,
    city: "waterloo",
    category: "t-shirt",
    is_visible: true,
    is_in_cart: false,
    brand: "nike",
    url: "./images/products/joel-muniz-juKjPjVBza8-unsplash.jpg",
  },
  {
    id: 2,
    title: "Polo Ralph Lauren",
    description: "This is a good product",
    gender: "male",
    price: 785.0,
    city: "waterloo",
    category: "t-shirt",
    is_visible: true,
    is_in_cart: false,
    brand: "polo",
    url: "./images/products/gui-franca-tCDPZO9S6Go-unsplash.jpg",
  },
  {
    id: 6,
    title: "COTTON CREW BABY TEE",
    description:
      "For orders containing only Gift Cards, standard shipping cost is FREE. Gift Cards are shipped separately from merchandise and cannot be delivered to a P.O. Box.",
    gender: "female",
    price: 13.96,
    city: "waterloo",
    category: "jeans",
    is_visible: true,
    is_in_cart: false,
    brand: "hollister",
    url: "./images/products/KIC_339-3275-1884-100_model1.jpg",
  },
  {
    id: 4,
    title: "Allen Solly Shirt",
    description: "This is a new product",
    gender: "male",
    price: 504.0,
    city: "waterloo",
    category: "t-shirt",
    is_visible: true,
    is_in_cart: false,
    brand: "allen",
    url: "./images/products/jorge-salvador-iGzHMzRZjRs-unsplash.jpg",
  },
  {
    id: 5,
    title: "MID-RISE DARK WASH BOOT JEANS",
    description:
      "Our new Soft Stretch jeans are as soft as your sweats, as stretchy as your leggings and as versatile as your current wear-with-everything pair.",
    gender: "female",
    price: 37.06,
    city: "waterloo",
    category: "jeans",
    is_visible: true,
    is_in_cart: false,
    brand: "hollister",
    url: "./images/products/KIC_355-1098-0632-276_model1.jpg",
  },
  {
    id: 3,
    title: "Cavaliers SweatShirt by Nike",
    description: "This is a good product",
    gender: "male",
    price: 400.0,
    city: "kitchner",
    category: "t-shirt",
    is_visible: true,
    is_in_cart: false,
    brand: "nike",
    url: "./images/products/gui-franca-tCDPZO9S6Go-unsplash.jpg",
  },
  {
    id: 7,
    title: "LOW-RISE DARK WASH Y2K BOOT JEANS",
    description:
      "For orders containing only Gift Cards, standard shipping cost is FREE. Gift Cards are shipped separately from merchandise and cannot be delivered to a P.O. Box.",
    gender: "female",
    price: 34.77,
    city: "cambridge",
    category: "jeans",
    is_visible: true,
    is_in_cart: false,
    brand: "hollister",
    url: "./images/products/KIC_355-2326-0727-276_model1.jpg",
  },
  {
    id: 8,
    title: "COTTON CREW BABY TEE",
    description:
      "For orders containing only Gift Cards, standard shipping cost is FREE. Gift Cards are shipped separately from merchandise and cannot be delivered to a P.O. Box.",
    gender: "female",
    price: 13.96,
    city: "cambridge",
    category: "tee",
    is_visible: true,
    is_in_cart: false,
    brand: "hollister",
    url: "./images/products/KIC_355-2326-0727-276_model1.jpg",
  },
  {
    id: 9,
    title: "HIGH-RISE RIPPED MEDIUM WASH VINTAGE FLARE JEANS",
    description:
      "Gift Cards are shipped separately from merchandise and cannot be delivered to a P.O. Box.",
    gender: "female",
    price: 2000.77,
    city: "cambridge",
    category: "jeans",
    is_visible: true,
    is_in_cart: false,
    brand: "hollister",
    url: "./images/products/KIC_355-2293-6502-279_model1.jpg",
  },
  {
    id: 10,
    title: "CURVY HIGH-RISE MEDIUM WASH SUPER SKINNY JEANS",
    description:
      "For orders containing only Gift Cards, standard shipping cost is FREE. Gift Cards are shipped separately from merchandise and cannot be delivered to a P.O. Box.",
    gender: "female",
    price: 500.96,
    city: "cambridge",
    category: "jeans",
    is_visible: true,
    is_in_cart: false,
    brand: "hollister",
    url: "./images/products/KIC_355-2595-0585-278_model1.jpg",
  },
  {
    id: 11,
    title: "COTTON CREW BABY TEE",
    description:
      "For orders containing only Gift Cards, standard shipping cost is FREE. Gift Cards are shipped separately from merchandise and cannot be delivered to a P.O. Box.",
    gender: "female",
    price: 20.96,
    city: "cambridge",
    category: "tee",
    is_visible: true,
    is_in_cart: false,
    brand: "hollister",
    url: "./images/products/KIC_339-3261-1883-201_model1.jpg",
  },
  {
    id: 12,
    title: "HIGH-RISE BLACK SPLIT HEM VINTAGE FLARE JEANS",
    description:
      "For orders containing only Gift Cards, standard shipping cost is FREE. Gift Cards are shipped separately from merchandise and cannot be delivered to a P.O. Box.",
    gender: "female",
    price: 250.0,
    city: "cambridge",
    category: "jeans",
    is_visible: true,
    is_in_cart: false,
    brand: "hollister",
    url: "./images/products/KIC_355-2292-6501-975_model1.jpg",
  },
];

// global variables
let filter_price_list = [];
let filter_gender_list = [];
let all_cart = [];

const update_cart = (count) => {
  $("#cart_count").text(count);
};

const carts = localStorage.getItem("all_cart");
if (carts) {
  all_cart = JSON.parse(carts);

  update_cart(all_cart.length);
  console.log("all_cart :: ", all_cart);
}

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

    html +=
      '<li><input type="radio" data-filter="pricing" data-min_price=' +
      list_of_pricings[i].min_price +
      " data-max_price=" +
      list_of_pricings[i].max_price +
      " data-id=" +
      list_of_pricings[i].p_id +
      ' name="price"/><label for="' +
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
      '<li><input type="checkbox" data-filter="gender" data-id=' +
      list_of_genders[i].name +
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

  // if (list_of_products.length == 0) {
  //   return '<div class="am-center"> No Product Available!</div>';
  // }

  for (var i = 0; i < list_of_products.length; i++) {
    let btn_class = "";
    let text = "add to cart";
    if (all_cart.includes(list_of_products[i].id.toString())) {
      btn_class = "btn-danger";
      text = "In Cart";
    }

    console.log(all_cart.includes(list_of_products[i].id.toString()));
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
      ` class="b-btn ${btn_class} am-center">${text}</button>` +
      "</div>" +
      "</div></div>";
  }

  // return the html
  return html;
};

const filterFilter = (filterinfo) => {
  // filter options
  const { filter, max_price, min_price, id } = filterinfo.target.dataset;
  handleFilterCriteria(filter, max_price, min_price, id);
};

const handleFilterCriteria = (filter, max_price, min_price, id) => {
  let filtered_products = [];
  if (filter == "pricing") {
    if (filter_price_list.length == 0) {
      filter_price_list.push(id);
    } else {
      if (filter_price_list.includes(id)) {
        filter_price_list = filter_price_list.filter((d) => d != id);
      } else {
        filter_price_list = [...filter_price_list, id];
      }
    }

    filtered_products = [
      ...filtered_products,
      ...all_list_products.filter(
        (d) => parseInt(min_price) >= d.price && d.price <= parseInt(max_price)
      ),
    ];
  } else if (filter == "gender") {
    if (filter_gender_list.length == 0) {
      filter_gender_list.push(id);
    } else {
      if (filter_gender_list.includes(id)) {
        filter_gender_list = filter_gender_list.filter((d) => d != id);
      } else {
        filter_gender_list = [...filter_gender_list, id];
      }
    }

    filtered_products = [
      ...filtered_products,
      ...all_list_products.filter((d) => filter_gender_list.includes(d.gender)),
    ];
  }

  if (filter_gender_list.length == 0 && filter_price_list.length == 0) {
    displayProducts(all_list_products);
  } else {
    displayProducts(filtered_products);
  }
};

const handleCart = (product) => {
  const product_id = product.target.dataset.id;

  if (all_cart.length > 0) {
    const found_product = all_cart.includes(product_id);

    if (found_product) {
      return alert("Product is already added to cart!");
    }

    all_cart = [...all_cart, product_id];
  } else {
    all_cart.push(product_id);
  }

  // alert("Product is Added to cart!");

  update_cart(all_cart.length);
  localStorage.setItem("all_cart", JSON.stringify(all_cart));

  displayProducts(all_list_products);
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
