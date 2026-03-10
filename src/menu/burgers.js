import { createEl, createCard } from "../utils/createUtils.js";

export const loadMenuBurgers = () => [
        createCard({
            id: "burger1",
            titleText: "Burgers",
            paragraphs: [
                "Hamburger",
                "Cheeseburger",
                "Double Cheeseburger",
                "Double Smashburger",
                "Triple Smashburger",
                "Jalapeno Jack Burger"
            ]
        }),
        createCard({
            id: "burger2",
            titleText: "Special Burgers",
            paragraphs: [
                "Bronco Burger",
                "Oklahoma Burger",
                "Hawaiian Burger",
                "Smashed Baconator",
                "Maple Bourbon Burger",
                "The Chuck Wagon Burger"
            ]
        }),
        createCard({
            id: "sandwiches1",
            titleText: "Hot Sandwiches",
            paragraphs: [
                "Cubano Sandwich",
                "Caprese Sandwich",
                "Greek Gyro Sandwich",
                "Chilicheesesteak",
                "Grilled Cheese",
                "Reuben"
            ]
        }),
        createCard({
            id: "sandwiches2",
            titleText: "Cold Sandwiches",
            paragraphs: [
                "Turkey Cranberry Sandwich",
                "Little Italy Sandwich",
                "Chicken Salad Sandwich",
                "Tuna Melt Sandwich",
                "BLT Sandwich",
                "Veggie Sandwich"
            ]
        }),

]