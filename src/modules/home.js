import homeFood from "../images/home-food.jpg";
import "./home.css";

export default function loadHome() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const homeContain = document.createElement("div");
  homeContain.classList.add("homeContain");
  
  const text = document.createElement("div");
  text.classList.add("text-container");

  const img = document.createElement("img");
  img.src = homeFood;
  img.width = 300;

  const title = document.createElement("h1");
  title.textContent = "Noir de Fleur";

  const about = document.createElement("p");
  about.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam unde consequuntur, illo illum nihil aliquid sed,
  numquam perferendis beatae consequatur deserunt error libero asperiores suscipit quia accusantium vero sint. Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Doloremque aliquam unde consequuntur, illo illum nihil aliquid sed, numquam perferendis beatae consequatur deserunt error libero
  asperiores suscipit quia accusantium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam unde consequuntur, illo
  illum nihil aliquid sed, numquam perferendis beatae consequatur deserunt error libero asperiores suscipit quia accusantium vero sint. Lorem ipsum
  dolor sit amet consectetur adipisicing elit. Doloremque aliquam unde consequuntur, illo illum nihil aliquid sed, numquam perferendis beatae
  consequatur deserunt error libero asperiores suscipit quia accusantium vero sint.`;

  text.append(title, about);
  homeContain.append(img, text);
  content.append(homeContain);
}
