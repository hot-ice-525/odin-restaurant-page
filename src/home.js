import indoorImg from "../images/interior.jpg"

export function homeCreator() {
  const content = document.querySelector("#content");

  const title = document.createElement("h1");
  title.innerText = "Welcome to our restaurant";
  content.appendChild(title);
  
  const image = document.createElement("img");
  image.setAttribute("src", indoorImg);
  content.appendChild(image);
  
  const description = document.createElement("p");
  description.innerHTML = "Our restaurant is the ulimate place for all your hunger needs,<br>just wanna grab a quick bite while you are on road? YOU ARE MOST WELCOME";
  content.appendChild(description);
}
