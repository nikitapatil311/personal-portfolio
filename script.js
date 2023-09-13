function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// var sidemeu = document.getElementById("sidemenu");

// function openmenu() {
//   sidemeu.style.right = "0";
// }

// function closemenu() {
//   sidemeu.style.right = "-200px";
// }

const typed = new Typed(".multipleText", {
  strings: ["Full stack web developer", "FrontEnd Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var sun = document.getElementById("sun");

sun.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    sun.src = "/moon2.png";
  } else {
    sun.src = "/sun.png";
  }
};

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.screenY > 120);
});

// let menu = document.querySelector("#menu-icon");
// let navlist = document.querySelector(".navlist");

// menu.onclick = () => {
//   menu.classList.toggle("fa-solid");
//   navlist.classList.toggle("active");
// };

// window.onscroll = () => {
//   menu.classList.remove("fa-solid");
//   navlist.classList.remove("active");
// };

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
let circleIcon = document.querySelector(".fa-circle-xmark");
let isOpen = false;

menu.onclick = () => {
  isOpen = !isOpen;
  if (isOpen) {
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-times");
    navlist.classList.add("active");
    circleIcon.classList.remove("fa-regular");
  } else {
    menu.classList.add("fa-bars");
    menu.classList.remove("fa-times");
    navlist.classList.remove("active");
    circleIcon.classList.add("fa-regular");
  }
};

window.onscroll = () => {
  // Close the menu when the user scrolls
  if (isOpen) {
    menu.classList.add("fa-bars");
    menu.classList.remove("fa-times");
    navlist.classList.remove("active");
    circleIcon.classList.add("fa-regular");
    isOpen = false;
  }
};
