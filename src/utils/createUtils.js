export const createEl = (tag, id, classes) => {
    const el = document.createElement(tag);
    if (id) el.id = id;
    if (classes) el.classList.add(...classes);
    return el;
};

export const createCard = ({id = null, titleText = null, paragraphs = []}) => {
    const card = createEl("div", id, ["card"]);

    if (titleText) {
        const title = createEl("h5");
        title.textContent = titleText;
        card.appendChild(title);
    }

    paragraphs.forEach(text => {
        const p = createEl("p");
        p.textContent = text;
        card.appendChild(p);
    });

    return card;
};