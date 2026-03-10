import { createEl, createCard } from "./utils/createUtils.js";

export const loadOurStory = () => {
    return [
        createCard({
            id: "ourStory",
            titleText: "Our Story",
            paragraphs: [
                "Typical Burger Place was founded by three friends with one shared goal: create the best burger that Mankind can offer. After one inspirational video and several questionable decisions, we finally opened our doors. We may not have the biggest kitchen or the fanciest equipment, but we do everything with enthusiasm, stubbornness, and an unhealthy love for melted cheese.Our mission is simple: Serve honest, tasty burgers in a place that doesn't take itself too seriously — because food should be fun."
            ]
        }),
        createCard({
            id: "friendOne",
            titleText: "Friend One - The Idea Guy",
            paragraphs: [
                "Responsible for 99% of the ideas and 1% of the actual work. Believes every problem can be solved with “just one more YouTube tutorial.” Thinks opening a burger place was destiny. Everyone else thinks it was sleep deprivation.",
                "Phone: +36 30 123 4567", "Email: friendone@typicalburgerplace.com,"
            ]
        }),
        createCard({
            id: "friendTwo",
            titleText: "Friend Two - The Grill Wizard",
            paragraphs: [
                "Can flip three patties at once but cannot flip their sleep schedule back to normal. Doesn't follow recipes — recipes follow them. Still insists the smoke alarm is “just cheering us on.”",
                "Phone: +36 30 123 4568", "Email: friendtwo@typicalburgerplace.com"
            ]
        }),
        createCard({
            id: "friendThree",
            titleText: "Friend Three - The Numbers Person (kinda)",
            paragraphs: [
                "Handles the money because nobody else passed basic math. Keeps a spreadsheet named “totally-not-bankrupt.xlsx.” Most likely to say, “We can write that off, right?” about things that cannot be written off.",
                "Phone: +36 30 123 4569", "Email: friendthree@typicalburgerplace.com",
            ]
        }),
        createCard({
            id: "becky",
            titleText: "Becky",
            paragraphs: [
                "Becky wasn't part of the original 3-AM YouTube - inspired squad… she just applied for a part-time job and ended up becoming the only functional adult here. She knows the menu better than anyone, counts change faster than Friend Three can open Excel, and verbally fights the card reader when it beeps “incorrectly.”",
                "Phone: +36 30 420 4567", "Email: becky@typicalburgerplace.com"
            ]
        }),
    ]
}