import "./styles.css";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

loadHome();

home.addEventListener("click", loadHome);

menu.addEventListener("click", loadMenu);

contact.addEventListener("click", loadContact);
