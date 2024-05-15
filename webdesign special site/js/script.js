"use strict";
const MenuContainer = document.querySelector(".menu_container");
const MenuOpen = document.querySelector(".menu_open");
const MenuClose = document.querySelector(".menu_close");

const SPMenu = document.querySelector(".sample_sp_menu");
MenuContainer.addEventListener("click", () => {
  MenuOpen.classList.toggle("active");
  MenuClose.classList.toggle("active");
  SPMenu.classList.toggle("active");
});

const pagetop_btn = document.querySelector(".pagetop");
pagetop_btn.addEventListener("click", scroll_top);
function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", scroll_event);
function scroll_event() {
    if (window.pageYOffset > 100) {
        pagetop_btn.style.opacity = "1";
    } else if (window.pageYOffset < 100) {
        pagetop_btn.style.opacity = "0";
    }
}