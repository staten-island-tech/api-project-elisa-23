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
                    `<div 
                        class="w-[27%] h-[3rem] bg-yellow-200 rounded-lg flex flex-col items-center justify-evenly mt-20 transition-all duration-700 hover:shadow-lg" 
                        id="${element}" 
                        data-id="${character}">
                        <h1 class="text-xl font-bold">${character}</h1>
                        <h3 class="text-gray-600 text-center">${title}</h3>
                        <img 
                            src="https://genshin.jmp.blue/characters/${character}/icon" 
                            alt="The icon of ${character}" 
                            class="w-[3rem] h-[3rem] rounded-full object-cover shadow-md">
                        <button 
                            class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" 
                            data-id="${character}-button">
                            More
                        </button>
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