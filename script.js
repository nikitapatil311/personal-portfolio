function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

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
    sun.src = "/moon.png";
  } else {
    sun.src = "/sun.png";
  }
};
