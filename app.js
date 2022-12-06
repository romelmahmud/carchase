const barIcons = document.querySelector(".menu_bars_icons");

const mobile_navbar = document.querySelector(".mobile_navbar");

barIcons.addEventListener("click", () => {
  mobile_navbar.classList.toggle("show_mobile_navbar");
});
