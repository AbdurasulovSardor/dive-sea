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

//-------------------------------------------------------------------
//-------------------------------------------------------------------

const homeBtn = document.querySelectorAll(".home__arrow-btn")
const homeList = document.querySelector(".home__images-list")

let homeActive = false

homeBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    homeActive = !homeActive

    if (homeActive) {
      homeList.classList.add("home__images-list--active")
      homeBtn[0].disabled = false
      homeBtn[0].style.opacity = "1"
      homeBtn[1].disabled = true
      homeBtn[1].style.opacity = "0.5"
    } else {
      homeList.classList.remove("home__images-list--active")
      homeBtn[0].disabled = true
      homeBtn[0].style.opacity = "0.5"
      homeBtn[1].disabled = false
      homeBtn[1].style.opacity = "1"
    }
  })
})