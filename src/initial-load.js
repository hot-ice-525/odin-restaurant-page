import interiorImg from "../images/interior.jpg";

function initialPageLoad() {
  const navbar = document.querySelector("header > nav");
  const content = document.querySelector("div#content");


  // Add nav buttons
  const homeBtn = document.createElement("button");
  homeBtn.innerText = "Home";
  homeBtn.classList.add("home");
  navbar.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.innerText = "Menu";
  menuBtn.classList.add("menu");
  navbar.appendChild(menuBtn);


  // Add h1
  const h1 = document.createElement("h1")
  h1.innerText = "Welcome to our restaurant";
  content.appendChild(h1);

  // Add image
  const image = document.createElement("img");
  image.setAttribute("src", interiorImg);
  content.appendChild(image);

  // Add description
  const p = document.createElement("p");
  p.innerHTML = "Our restaurant is the ulimate place for all your hunger needs,<br>just wanna grab a quick bite while you are on road? YOU ARE MOST WELCOME";
  content.appendChild(p);
}

export { initialPageLoad }