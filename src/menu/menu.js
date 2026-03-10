import { loadMenuBurgers } from "./burgers.js";
import { loadMenuSides } from "./sides-desserts.js";
import { loadMenuDrinks } from "./drinks.js";
import { createEl } from "../utils/createUtils.js";
import './menu.css'


const categories = ["Burgers & Sandwiches", "Sides & Desserts", "Drinks"];

export const loadMenu = (category = "Burgers & Sandwiches") => {
    const nav = createEl("div", "menu-nav");
    categories.forEach(cat => {
        const btn = createEl("button");
        btn.textContent = cat;
        btn.classList.add("menu-btn");
        btn.addEventListener("click", () => window.showPage(`Menu-${cat}`));
        if(cat === category) btn.classList.add('active');
        nav.appendChild(btn);
    });

    let cards = [];
    switch(category) {
        case "Burgers & Sandwiches": cards = loadMenuBurgers(); break;
        case "Sides & Desserts": cards = loadMenuSides(); break;
        case "Drinks": cards = loadMenuDrinks(); break;
    }

    return [nav, ...cards];
};