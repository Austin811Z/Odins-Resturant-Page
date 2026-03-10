import { createEl, createCard } from "../utils/createUtils.js";

export const loadMenuDrinks = () => [
        createCard({
            id: "softDrinks",
            titleText: "Soft Drinks",
            paragraphs: [
                "Coke",
                "Diet Coke",
                "Tea",
                "Ginger beer",
                "Energy drink",
                "Lemonade"
            ]
        }),
        createCard({
            id: "hotDrinks",
            titleText: "Hot Drinks",
            paragraphs: [
                "Espresso",
                "Cappuccino",
                "Latte",
                "Mocha",
                "Hot Chocolate",
                "Hot Tea"
            ]
        }),
        createCard({
            id: "freshDrinks",
            titleText: "Fresh Juices",
            paragraphs: [
                "Orange",
                "Apple",
                "Strawberry",
                "Kiwi",
                "Guava",
                "Mango"
            ]
        }),
        createCard({
            id: "alcoholDrinks",
            titleText: "Bar Menu",
            paragraphs: [
                "Beer",
                "Wine",
                "Bacardi Rum",
                "Whiskey",
                "Vodka",
                "Margarita"
            ]
        }),
]