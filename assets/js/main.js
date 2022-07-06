/*=============== SHOW MENU ===============*/
const navmenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navclose = document.getElementById("nav-close")

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => { 
    navmenu.classList.add("show-menue")
   })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navmenu) {
  navclose.addEventListener("click", () => { 
    navmenu.classList.remove("show-menue")
   })
}

/*=============== SHOW CART ===============*/
const cart = document.getElementById("cart"),
      cartShop = document.getElementById("nav-shop"),
      cartClose = document.querySelector(".cart__close")

/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
  cartShop.addEventListener("click", () => { 
    cart.classList.add("show-cart")
   })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
  cartClose.addEventListener("click", () => { 
    cart.classList.remove("show-cart")
   })
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById("login"),
      loginButton = document.getElementById("login-toggle"),
      loginClose = document.querySelector(".login__close")

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if (login) {
  loginButton.addEventListener("click", () => { 
    login.classList.add("show-login")
   })
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if (login) {
  loginClose.addEventListener("click", () => { 
    login.classList.remove("show-login")
   })
}

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swipper", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener("scroll",() => {
    const header=document.querySelector("header");
    header.classList.toggle("scroll-header",window.scrollY > 0);
});


/*=============== NEW SWIPER ===============*/
 var newswiper = new Swiper(".new-swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: "true",
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

/*=============== SHOW SCROLL UP ===============*/ 
const btn = document.getElementById("scroll-up");

window.onscroll = function () {
if (window.scrollY>= 20) {
    btn.style.display="block";
} else {
    btn.style.display="none";
}};
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".quistions-item")
accordionItems.forEach((item) => { 
    const accordionHeader = item.querySelector(".quistions-header")
    accordionHeader.addEventListener("click",() => { 
      const openItems = document.querySelector(".accordion-open")
      toggleItem(item)

      if (openItems && openItems !== item) {
        toggleItem(openItems)
      }
     })
})
function toggleItem(item) {
  const accordionContent = item.querySelector(".quistions-content")

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style")
    item.classList.remove("accordion-open")
  }else {
    accordionContent.style.height = accordionContent.scrollHeight + "px"
    item.classList.add("accordion-open")
  }
}

/*=============== STYLE SWITCHER ===============*/
const StyleSwitcherToggle = document.querySelector('.style-switche-toggler')
StyleSwitcherToggle.addEventListener('click', () =>{
  document.querySelector('.style-switcher').classList.toggle("open")
})

window.addEventListener('scroll', () => { 
  if (document.querySelector('.style-switcher').classList.toggle("open")) {
    document.querySelector('.style-switcher').classList.remove("open")
  }
 })

 function themecolors() {
    const colorStyle = document.querySelector(".js-theme-color-item"),
    colorStyleContainer = document.querySelector(".js-theme-colors")
    colorStyleContainer.addEventListener("click", ({target}) => { 
      if (target.classList.contains("js-theme-color-item")) {
        localStorage.setItem("color",target.getAttribute("data-js-theme-color"))
        setColor()
      }
     })
     function setColor() {
       let path = colorStyle.getAttribute("href").split("/");
       path = path.slice(0,path.length - 1)
       colorStyle.setAttribute("href",path.join("/") + "/" + localStorage.getItem("color") + ".css") 
     
       if (document.querySelector(".js-theme-color-item.active")) {
        document.querySelector(".js-theme-color-item.active").classList.remove("active")
      }
      document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active")
   
      }

      if (localStorage.getItem("color") !== null) {
        setColor()
      }else {
        const defultcolor = colorStyle.getAttribute("href").split("/").pop().split(".").shift()
        document.querySelector("[data-js-theme-color=" + defultcolor +"]").classList.add("active")
      }

     }
  themecolors()



/*=============== LIGHT BOX ===============*/
const productItems = document.querySelectorAll(".product-img")  ,
      totalproductItems = productItems.length,
      lightbox = document.querySelector(".lightbox"),
      lightboxImg = document.querySelector(".lightbox-img"),
      lightboxClose = document.querySelector(".lightbox-close"),
      lightboxCounter = document.querySelector(".caption-counter")

let itemIndex = 0;

for (let i = 0; i < totalproductItems; i++) {
  productItems[i].addEventListener("click",function(){
    itemIndex=i;
    chengeItem()
    toggleLightBox()
  })
}

function nextItem() {
  if (itemIndex == totalproductItems) {
    itemIndex = 0;
  } else {
    itemIndex ++
  }
  chengeItem()
}

function prevItem() {
  if (itemIndex == 0) {
    itemIndex = totalproductItems-1;
  } else {
    itemIndex --
  }
  chengeItem()
}

function toggleLightBox() {
  lightbox.classList.toggle("open")
}

function chengeItem() {
  imgSrc = productItems[itemIndex].querySelector(".product-img img").getAttribute("src")
  lightboxImg.src = imgSrc
  lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalproductItems;
}

lightbox.addEventListener("click", function(e) {
  if (e.target === lightboxClose || e.target === lightbox) {
      toggleLightBox()
  }
})



// shopping cart
