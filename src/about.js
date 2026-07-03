export const about = (() => {

    const content = document.querySelector("#content");

    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero");

    const hero = document.createElement("h1");
    hero.textContent = "Welcome to <Restaurant Name>!";
    heroContainer.appendChild(hero);

    const splashText = document.createElement("p");
    splashText.textContent = "About";
    heroContainer.appendChild(splashText);

    content.appendChild(heroContainer);
});