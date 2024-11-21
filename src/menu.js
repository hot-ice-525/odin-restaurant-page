import menuImg from "../images/menu.jpg"

export function displayMenu() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.innerText = "Menu";
  content.appendChild(heading);
  
  const image = document.createElement("img");
  image.setAttribute("src", menuImg);
  content.appendChild(image);
  
  const info = document.createElement("p");
  info.innerHTML = "<i>Custom orders also available</i>";
  content.appendChild(info);
}