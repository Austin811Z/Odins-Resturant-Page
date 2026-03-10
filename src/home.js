import { createEl, createCard } from "./utils/createUtils.js";

const content = document.getElementById("content");
content.innerHTML = "";

export const loadHome = () => {
    return [
        createCard({
            id: "restaurantName",
            title: "Typical new burger place"
        }),
        createCard({
            id: "aboutUsHeader",
            titleText: "About us:",
            paragraphs: [
                "Hello there, Dear costumer!", 
                "Welcome to Typical burger place, the newest Best Burger Place in Town  at least according to the three friends who started this whole thing after watching one inspirational YouTube short at 3 AM",
                "We know what you're thinking: Didn't another burger startup open last month… and close two months later? Yes. That was us. Probably. We can't confirm or deny."
            ]
        }),
        createCard({
            id: "openingHoursHeader",
            titleText: "Opening Hours",
            paragraphs: [
                "Monday: 11am - 10pm",
                "Tuesday: 11am - 10pm",
                "Wednesday: 11am - 10pm",
                "Thursday: 11am - 10pm",
                "Friday: 10am - 10pm",
                "Saturday: 10am - 10pm",
                "Sunday: 10am - 10pm"
            ]
        }),
        createCard({
            id: "locationHeader",
            titleText: "Location",
            paragraphs: [
                "888 Fast Food Ave",
                "Los Angeles, CA 90001",
                "USA"
            ]
        })
    ];
};