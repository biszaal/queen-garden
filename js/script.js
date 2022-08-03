let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

function lunchMenu() {
  var dinner_menu = document.getElementById("dinner-menu");
  var drink_menu = document.getElementById("drink-menu");
  dinner_menu.style.display = "none";
  drink_menu.style.display = "none";

  var lunch_menu = document.getElementById("lunch-menu");
  lunch_menu.style.display = "block";
  lunch_menu.scrollIntoView({ behavior: "smooth" }, true);
}

function dinnerMenu() {
  var lunch_menu = document.getElementById("lunch-menu");
  var drink_menu = document.getElementById("drink-menu");
  lunch_menu.style.display = "none";
  drink_menu.style.display = "none";

  var dinner_menu = document.getElementById("dinner-menu");
  dinner_menu.style.display = "block";
  dinner_menu.scrollIntoView({ behavior: "smooth" }, true);
}

function drinkMenu() {
  var lunch_menu = document.getElementById("lunch-menu");
  var dinner_menu = document.getElementById("dinner-menu");
  lunch_menu.style.display = "none";
  dinner_menu.style.display = "none";

  var drink_menu = document.getElementById("drink-menu");
  drink_menu.style.display = "block";
  drink_menu.scrollIntoView({ behavior: "smooth" }, true);
}

window.onload = fadeOut();
