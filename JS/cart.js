$(document).ready(function () {
  const update_cart = (count) => {
    $("#cart_count").text(count);
  };

  const carts = localStorage.getItem("all_cart");
  if (carts) {
    all_cart = JSON.parse(carts);

    update_cart(all_cart.length);
    console.log("all_cart :: ", all_cart);
  }
});
