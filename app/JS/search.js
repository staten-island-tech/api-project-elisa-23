import { getData, getFilteredData } from "./create";


const DOMSelectors = {
    container: document.querySelector('#container'),
    searchBtn: document.querySelector('#searchBtn'),
    search: document.querySelector('#search'),
    homepageContainer: document.querySelector("#homepage-container"),
    moreContainer: document.querySelector("#more-container")
}

async function getSearchedData(input) {
    try {
        const response = await fetch(`https://genshin.jmp.blue/characters/`);
        if (response.status != 200) {       /* 200 = it works */
            throw new Error(response);
        } else {
            const data = await response.json();
            const characters = [];
            data.forEach((character) => {
                if (character.includes(input) === true) {
                    characters.push(character);
                }
            });
            return characters;
        }
    } catch (error) {
        console.log(error);
        alert("Seriously? No such character exists. Maybe try spelling like a pro, genius!");
    }
}

async function search() {
    DOMSelectors.searchBtn.addEventListener("click", function (event) {
        event.preventDefault();
        DOMSelectors.searchBtn.remove();
        DOMSelectors.search.insertAdjacentHTML("beforeend",
            `<form class="flex items-center gap-2">
                <label class="input input-bordered flex items-center gap-2">
                    <input type = "text" class="grow" id="input" placeholder = "Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="h-4 w-4 opacity-70">
                        <path
                            fill-rule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clip-rule="evenodd" />
                    </svg>
                </label >
                <button type="submit" class="btn btn-outline btn-primary">Search</button>
            </form>`
        );
        const form = document.querySelector('form');
        const searchBar = document.querySelector('#input');
        form.addEventListener("submit", async function (event) {
            event.preventDefault();
            const name = searchBar.value.toLowerCase();
            if (name.length !== 0) {
                DOMSelectors.container.replaceChildren();
                DOMSelectors.homepageContainer.replaceChildren();
                DOMSelectors.moreContainer.replaceChildren();
                const data = await getSearchedData(name);
                console.log(data);
                await insertdata(data);
            } else {
                alert("Bravo, you've mastered searching for nothing. Try typing next time, genius!");
            }
            async function insertdata(data) {
                for (const character of data) {
                    const title = await getFilteredData(character, "title");
                    DOMSelectors.container.insertAdjacentHTML("beforeend",
                        `<div data-theme="dracula" class="card card-side justify-around shadow-xl w-[27%] h-56" data-id="${character}">
                            <figure class="px-10 pt-10">
                                <img
                                    src="https://genshin.jmp.blue/characters/${character}/icon-big"
                                    alt="The icon of ${character}" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">${character}</h2>
                                <p>${title}</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary" id="more" data-id="${character}">More</button>
                                </div>
                            </div>
                        </div>`
                    );
                }
            }
        });
    });
}

export { search };