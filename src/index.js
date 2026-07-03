import "./styles.css"
import { home } from "./home.js";
import { menu } from "./menu.js";
import { events } from "./events.js";
import { about } from "./about.js";
import { contact } from "./contact.js";

home();

const tabBtns = document.querySelectorAll("nav button");
for (const btn of tabBtns) {
    console.log(btn.id);
    btn.addEventListener("click", () => pageHandler(btn.id));
}

function clearContent() {
    const content = document.querySelector("#content");
    content.replaceChildren();
}

function pageHandler(tab) {
    clearContent();
    console.log(tab);
    switch (tab) {
        case "home":
            home();
            break;
        case "menu":
            menu();
            break;
        case "events":
            events();
            break;
        case "about":
            about();
            break;
        case "contact":
            contact();
            break;
        default:
            home();
    }
}