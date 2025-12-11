import "./styles.css";
import loadHome from "./modules/home.js";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

home.addEventListener("click", () => {
  loadHome();
});

menu.addEventListener("click", () => {
  loadHome();
});

contact.addEventListener("click", () => {
  loadHome();
});
