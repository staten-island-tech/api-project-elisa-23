const DOMSelectors = {
    container: document.querySelector(".container"),
    more: document.querySelectorAll(".more")
}

function filteredCard() {
    DOMSelectors.more.forEach((button) => {
        button.addEventListener("click", function () {
            console.log(button.getAttribute("data-id"));
        });
    });
}

export { filteredCard };