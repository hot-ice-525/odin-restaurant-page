import { initialPageLoad } from "./initial-load.js"
import { homeCreator as displayHome } from "./home.js"
import { displayMenu } from "./menu.js"

console.log("hello");
initialPageLoad();

const content = document.querySelector("div#content");
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");

home.addEventListener("click", () => {
  content.innerHTML = "";
  displayHome();
});

menu.addEventListener("click", () => {
  content.innerHTML = "";
  displayMenu();
});