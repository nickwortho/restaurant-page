import logoImg from "./hamburger.svg";

export const initial = (() => {

    const content = document.querySelector("#content");

    const heroContainer = document.createElement("div");
    heroContainer.id = "hero";

    const logo = document.createElement("img");
    logo.src = logoImg;
    logo.alt = "logo";
    logo.width = 100;
    logo.height = 100;
    heroContainer.appendChild(logo);

    const hero = document.createElement("h1");
    hero.textContent = "Welcome to <Restaurant Name>!";
    heroContainer.appendChild(hero);

    const splashText = document.createElement("p");
    splashText.textContent = "Come and try our amazing food!";
    heroContainer.appendChild(splashText);

    content.appendChild(heroContainer);
});