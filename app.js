//? Get all the icons
const icons = document.querySelectorAll(".section-1-icons i");

//? get the menu element
const menuToggler = document.querySelector(".menu");

//? Event listners
menuToggler.addEventListener("click", () => {
  let togglableElements = document.querySelectorAll(".togglables");
  togglableElements.forEach((items) => {
    items.classList.toggle("change");
  });
});

let i = 1;

setInterval(() => {
  const icon = document.querySelector(".section-1-icons .change");
  icon.classList.remove("change");

  i++;
  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 4000);
