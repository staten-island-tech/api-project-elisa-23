const DOMSelectors = {
    container: document.querySelector(".container"),
    more: document.querySelectorAll(".more")
}

function filteredCard() {
    DOMSelectors.more.addEventListener("click", function () {
        DOMSelectors.container.replaceChildren();
        /* DOMSelectors.container.insertAdjacentHTML("beforeend",
            `
            `
        ) */
    });
}

export { filteredCard };