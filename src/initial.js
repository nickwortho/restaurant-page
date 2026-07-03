import logoImg from "./hamburger.svg";

export const initial = (() => {

    const content = document.querySelector("#content");

    const logo = document.createElement("img");
    logo.setAttribute("src", logoImg);
    logo.setAttribute("alt", "logo");
    logo.setAttribute("width", "100px");

    const hero = document.createElement("h1");
    hero.textContent = "Welcome to <Restaurant Name>!";

    const splashText = document.createElement("p");
    splashText.textContent = "Come and try our amazing food!";

    content.appendChild(logo);
    content.appendChild(hero);
    content.appendChild(splashText);
});