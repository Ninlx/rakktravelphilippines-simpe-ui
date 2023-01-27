$(document).on("click", ".navbar ul li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

const hamburger = document.querySelector("#hamburger-menu");
const navbar = document.querySelector(".navbar");

// let menuOpen = false

// hamburger.addEventListener('click', () =>{
//     if(!menuOpen){
//         hamburger.classList.add('open')
//         menuOpen = true
//         navbar.classList.toggle('active')
//     }else{
//         hamburger.classList.remove('open')
//         menuOpen = false
//         navbar.classList.remove('active')
//     }
// })

hamburger.onclick = () => {
  hamburger.classList.toggle("open");
  navbar.classList.toggle("active");
};

navbar.onclick = () => {
  hamburger.classList.remove("open");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  searchbtn.classList.remove("active");
  seachcontainer.classList.remove("active");
};

const searchbtn = document.querySelector("#search-btn");
const seachcontainer = document.querySelector(".search-container");
searchbtn.addEventListener("click", () => {
  searchbtn.classList.toggle("active");
  seachcontainer.classList.toggle("active");
});

const hide1 = document.querySelector("#hide-1");
const hide2 = document.querySelector("#hide-2");
hide1.onclick = () => {
  hide1.classList.toggle("active");
  hide2.classList.toggle("active");
};

const userbtn = document.querySelector("#user-btn");
const logincontainer = document.querySelector(".login-container");
const formclosed = document.querySelector("#form-closed-btn");
userbtn.addEventListener("click", () => {
  userbtn.classList.toggle("active");
  logincontainer.classList.toggle("active");
});

formclosed.onclick = () => {
  logincontainer.classList.remove("active");
  userbtn.classList.remove("active");
};

function myFunction() {
  const me = document.getElementById("inputPass");
  const you = document.getElementById("hide-1");
  const us = document.getElementById("hide-2");

  if (me.type === "password") {
    me.type = "text";
    you.style.display = "block";
    us.style.display = "none";
  } else {
    me.type = "password";
    you.style.display = "none";
    us.style.display = "block";
  }
}

var swiper = new Swiper(".home-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let loadmore = document.querySelector(".package .load-more .btn");
let currentItem = 3;
loadmore.onclick = () => {
  let container = [
    ...document.querySelectorAll(".package .box-container .box"),
  ];
  for (var me = currentItem; me < currentItem + 3; me++) {
    container[me].style.display = "inline-block";
  }
  currentItem += 3;
  if (currentItem >= container.length) {
    loadmore.style.display = "none";
  }
};

const darkmodeBtn = document.getElementById("darkmodeBtn");
const body = document.querySelector("body");
function darkTheme() {
  if (body.classList.contains("darkTheme")) {
    body.classList.remove("darkTheme");
    localStorage.setItem("theme", "light");
    darkmodeBtn.classList.remove("fa-sun");
  } else {
    body.classList.add("darkTheme");
    localStorage.setItem("theme", "dark");
    darkmodeBtn.classList.add("fa-sun");
  }
}

if (localStorage.getItem("theme", "dark")) {
  body.classList.add("darkTheme");
  darkmodeBtn.classList.add("fa-sun");
}
