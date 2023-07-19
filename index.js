"use strict";

const mobileBtnMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".nav-menu");

mobileBtnMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
