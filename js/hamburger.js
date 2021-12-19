const NAV = document.querySelector(".nav__list");
const HAMBURGER = document.querySelector(".nav__hamburger");

HAMBURGER.addEventListener("click", function () {
    NAV.classList.toggle("active");
});
