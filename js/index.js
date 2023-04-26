const body = document.querySelector("body");
const toggle = document.getElementById("switch");

function toggleTheme() {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
}
