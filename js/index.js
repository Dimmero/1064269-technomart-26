
var getlost = document.querySelector(".get-lost");

var modalorder = document.querySelector(".modal-order");
var close = modalorder.querySelector(".modal-close");

var getlostform = modalorder.querySelector("form");
var formname = modalorder.querySelector("[name=name]");
var formemail = modalorder.querySelector("[name=email]");
var isStorageSupport = true;

getlost.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalorder.classList.add("modal-order-show");
  formname.focus(); 
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalorder.classList.remove("modal-order-show");
});

getlostform.addEventListener("submit", function (evt) {
  if (!formname.value || !formemail.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
} else {
  if (isStorageSupport) {
    localStorage.setItem("name", formname.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    evt.preventDefault();
    if (modalorder.classList.contains("modal-order-show")) {
      modalorder.classList.remove("modal-order-show");
    }
  }
});

var map = document.querySelector(".show-map");
var modalmap = document.querySelector(".modal-map");  
var closemap = document.querySelector(".modal-close-map");

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalmap.classList.add("modal-map-show");
});

closemap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalmap.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    evt.preventDefault();
    if (modalmap.classList.contains("modal-map-show")) {
      modalmap.classList.remove("modal-map-show");
    }
  }
});



