import { loadHome } from "./home.js";
import { loadMenu } from "./menu/menu.js";
import { loadOurStory } from "./ourStory.js";

const content = document.getElementById("content");
let currentElements = [];


showPage("Home");

function showPage(page) {
    currentElements.forEach(el => {
        if (content.contains(el)) content.removeChild(el);
    });
    currentElements = [];

    let elements;
    if (page.startsWith("Menu-")) {
        const category = page.split("-")[1];
        elements = loadMenu(category);
    } else {
        switch(page) {
            case "Home": elements = loadHome(); break;
            case "About": elements = loadOurStory(); break;
            default: elements = [];
        }
    }

    elements.forEach(el => {
        content.appendChild(el);
        currentElements.push(el);
    });

    document.querySelectorAll('#mainNav button').forEach(btn => btn.classList.remove('active'));
    if(page === "Home") document.getElementById("home").classList.add('active');
    if(page.startsWith("Menu")) document.getElementById("menu").classList.add('active');
    if(page === "About") document.getElementById("about").classList.add('active');
}

window.showPage = showPage;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("home").addEventListener("click", () => showPage("Home"));
    document.getElementById("menu").addEventListener("click", () => showPage("Menu-Burgers & Sandwiches"));
    document.getElementById("about").addEventListener("click", () => showPage("About"));
});