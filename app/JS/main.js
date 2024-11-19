import "../CSS/style.css";

const DOMSelectors = {
    container: document.querySelector(".container")
}

async function getFilteredData(character, use) {
    try {
        const individualResponse = await fetch(`https://genshin.jmp.blue/characters/${encodeURIComponent(character)}`);
        if (individualResponse.status != 200) {
            throw new Error(individualResponse);
        } else {
            const individualData = await individualResponse.json();
            if (use === "create") {
                DOMSelectors.container.replaceChildren();
                DOMSelectors.container.insertAdjacentHTML("beforeend",
                    `<button class="card" id="${individualData.element}" data-id="${character}">
                        <h1 class="name">${individualData.name}</h1>
                        <h3 class="title">${individualData.title}</h3>
                        <img src="${`https://genshin.jmp.blue/characters/${character}/gacha-splash`}" alt="the gacha splash art of ${character}" class="picture">
                    </button>`
                )
            } else if (use === "element") {
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
                    `<button class="card" id="${element}" data-id="${character}">
                        <h1 class="name">${character}</h1>
                        <h3 class="title">${title}</h3>
                        <img src="${`https://genshin.jmp.blue/characters/${character}/gacha-splash`}" alt="the gacha splash art of ${character}" class="picture">
                    </button>
                    `
                )
            }
        }
    } catch (error) {
        console.log(error);
        alert("sorry could not find that category")
    }
}

getData();