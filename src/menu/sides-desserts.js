import { createEl, createCard } from "../utils/createUtils.js";

export const loadMenuSides = () => [
        createCard({
            id: "sides",
            titleText: "Sides",
            paragraphs: [
                "French Fries",
                "Cheese Fries",
                "Chili Chesse Fries",
                "Baked Potato",
                "Cheese Baked Potato",
                "Chili Chesse Baked Potato"
            ]
        }),
        createCard({
            id: "sauces",
            titleText: "Sauces",
            paragraphs: [
                "Cheese Sauce",
                "Thousand Island Sauce",
                "Hot Honey",
                "Fluffy Sauce",
                "Honey Mustard",
                "BBQ Sauce"
            ]
        }),
        createCard({
            id: "iceCream",
            titleText: "Ice Cream",
            paragraphs: [
                "Chocolate",
                "Vanilia",
                "Punch",
                "Oreo",
                "Caramel",
                "Blueberry"
            ]
        }),
        createCard({
            id: "deserts",
            titleText: "Desserts",
            paragraphs: [
                "Cheesecake",
                "Cake",
                "Muffin",
                "Donut",
                "Pancake",
                "Waffle"
            ]
        }),
]