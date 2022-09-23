import * as flsFunctions from "./modules/testWebp.js"
flsFunctions.isWebp()



window.addEventListener("load", () => {
  activeNavLinks('.main-navbar__link')
  activeNavLinks('.header-menu-item')
})

//? page replacing


const activeNavLinks = function (linkClass) {
  const mainNavLinks = document.querySelectorAll(linkClass)
  console.log(mainNavLinks)
  const pageHref = window.location.href
  const activeClass = linkClass.slice(1) + '_active'

  mainNavLinks.forEach(item => {
    item.classList.remove(activeClass)
  })
  mainNavLinks.forEach(item => {
    if (pageHref.includes(item.href)) {
      item.classList.add(activeClass)
    } 
    
  })
  if(!pageHref.includes('html')){
    mainNavLinks[0].classList.add(activeClass)
  }
}


/*************** BURGER MENU **************************/ 

const openMobileMenuBtn = document.querySelector(".device-menu");
const headerMenu = document.querySelector(".header-nav");

openMobileMenuBtn.addEventListener("click", () => {
  if (openMobileMenuBtn.classList.contains("open")) {
    openMobileMenuBtn.classList.remove("open");
    headerMenu.classList.remove("active");
  } else {
    headerMenu.classList.add("active");
    openMobileMenuBtn.classList.add("open");
  }
})