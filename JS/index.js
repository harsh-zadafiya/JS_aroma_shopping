$(document).ready(function () {
  $(".product-wrapper").slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  });

  const update_cart = (count) => {
    $("#cart_count").text(count);
  };

  const carts = localStorage.getItem("all_cart");
  if (carts) {
    all_cart = JSON.parse(carts);

    update_cart(all_cart.length);
  }
});
