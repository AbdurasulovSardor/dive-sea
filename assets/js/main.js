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

//-------------------------------------------------------------------
//-------------------------------------------------------------------

const weeklyList = document.querySelector(".weekly__list");
const arrowBtn = document.querySelectorAll(".weekly__button")
const firstItemWidth = weeklyList.querySelector(".weekly__item").offsetWidth
const weeklyChildren = [...weeklyList.children]

let isDragging = false;
let startX;
let startScrollLeft;
let timeoutId;
let itemPerView = Math.round(weeklyList.offsetWidth / firstItemWidth)

weeklyChildren.slice(-itemPerView).reverse().forEach(item => {
  weeklyList.insertAdjacentHTML("afterbegin", item.outerHTML)
})

weeklyChildren.slice(0, itemPerView).forEach(item => {
  weeklyList.insertAdjacentHTML("beforeend", item.outerHTML)
})

arrowBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    weeklyList.scrollLeft += btn.id === "left" ? -firstItemWidth : firstItemWidth
  })
})

const dragStart = e => {
  isDragging = true
  weeklyList.classList.add("dragging")
  startX = e.pageX
  startScrollLeft = weeklyList.scrollLeft
}

const dragging = e => {
  if (!isDragging) return
  weeklyList.scrollLeft = startScrollLeft - (e.pageX - startX)
}

const dragStop = () => {
  isDragging = false
  weeklyList.classList.remove("dragging")
}

const infiniteScroll = () => {
  if (weeklyList.scrollLeft === 0) {
    weeklyList.classList.add("no-transition")
    weeklyList.scrollLeft = weeklyList.scrollWidth - (2 * weeklyList.offsetWidth)
    weeklyList.classList.remove("no-transition")
  } else if (Math.ceil(weeklyList.scrollLeft) === weeklyList.scrollWidth - weeklyList.offsetWidth) {
    weeklyList.classList.add("no-transition")
    weeklyList.scrollLeft = weeklyList.offsetWidth
    weeklyList.classList.remove("no-transition")
  }
}

weeklyList.addEventListener("mousedown", dragStart)
weeklyList.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)
weeklyList.addEventListener("scroll", infiniteScroll)


//-------------------------------------------------------------------
//-------------------------------------------------------------------


const questionBtn = document.querySelectorAll(".questions__btn")
const questionItems = document.querySelectorAll(".questions__item")

questionBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    questionItems[index].className.includes("question-show") ? btn.textContent = "+" : btn.textContent = "-"

    if (!questionItems[index].className.includes("question-show")) {
      questionItems.forEach(question => question.classList.remove("question-show"))
      questionItems[index].classList.add("question-show")
    } else {
      questionItems[index].classList.remove("question-show")
    }
  })
})