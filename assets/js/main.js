const menu = document.getElementById("menu")
const navList = document.querySelector(".nav__list")
const navLinks = document.querySelectorAll(".nav__link")

menu.addEventListener("click", () => {
  navList.classList.toggle("show-menu")
})

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    navList.classList.remove("show-menu")
  })
})

window.addEventListener("click", (e) => {
  if (navList.className.includes("show-menu")
    && e.target.id !== "nav-list"
    && e.srcElement.parentNode.id !== "menu") {
    navList.classList.remove("show-menu")
  }
})