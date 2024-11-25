import "../CSS/style.css";

const DOMSelectors = {
    container: document.querySelector("#container")
}

async function getFilteredData(character, use) {
    try {
        const individualResponse = await fetch(`https://genshin.jmp.blue/characters/${encodeURIComponent(character)}`);
        if (individualResponse.status != 200) {
            throw new Error(individualResponse);
        } else {
            const individualData = await individualResponse.json();
            if (use === "element") {
                return (individualData.vision);
            } else if (use === "title") {
                if (individualData.title !== "undefined") {
                    return (individualData.title);
                } else {
                    return ("none");
                }
            }
        }
    } catch (error) {
        console.log(error);
        alert("sorry could not find that character");
    }
}

async function getData() {
    try {
        const response = await fetch("https://genshin.jmp.blue/characters/");
        if (response.status != 200) {       /* 200 = it works */
            throw new Error(response);
        } else {
            const data = await response.json();
            for (const character of data) {     /* or else i can't use await */
                const element = await getFilteredData(character, "element");        /* or else it will return the promise */
                const title = await getFilteredData(character, "title");
                DOMSelectors.container.insertAdjacentHTML("beforeend",
                    `<div data-theme="dracula" class="card card-compact bg-base-100 w-96 shadow-xl" id="${element}" data-id="${character} bg-accent">
                        <figure>
                            <img
                                src="https://genshin.jmp.blue/characters/${character}/icon-big"
                                alt="The icon of ${character}" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">${character}</h2>
                            <p>${title}</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">More</button>
                            </div>
                        </div>
                    </div>`
                )
            }
        }
    } catch (error) {
        console.log(error);
        alert("sorry could not find that category")
    }
}

getData();