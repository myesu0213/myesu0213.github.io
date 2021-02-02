const toggleBtn = document.querySelector(".navbar__toogleBtn");
const Menu = document.querySelector(".navbar__Menu");
const links = document.querySelector(".navbar__links");

toggleBtn.addEventListener("click", () => {
  Menu.classList.toggle("active");
  links.classList.toggle("active");
});
