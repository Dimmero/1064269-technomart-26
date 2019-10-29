
var modalcart = document.querySelector(".modal-cart");
var close = document.querySelector(".modal-close-cart");
var buymore = document.querySelectorAll(".buy");
var contbuy = document.querySelector(".continue-buy-button");
var i;

for (var i = 0; i < buymore.length; i++)
 buymore[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalcart.classList.add("modal-cart-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalcart.classList.remove("modal-cart-show");
});

contbuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalcart.classList.remove("modal-cart-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode == 27) {
      evt.preventDefault();
      if (modalcart.classList.contains("modal-cart-show")) {
        modalcart.classList.remove("modal-cart-show");
      }
    }
  });

