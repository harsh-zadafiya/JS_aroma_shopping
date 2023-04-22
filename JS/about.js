// checking the dom is loaded or not
$(document).ready(() => {
  const accordion = document.getElementsByClassName("container");

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
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
