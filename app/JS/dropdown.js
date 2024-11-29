import { getData } from "./create";

const DOMSelectors = {
    container: document.querySelector("#container"),
    gallery: document.querySelector("#gallery"),
    homepage: document.querySelector("#homepage"),
    homepageContainer: document.querySelector("#homepage-container"),
    moreContainer: document.querySelector("#more-container")
}

function gallery() {
    DOMSelectors.gallery.addEventListener("click", function () {
        DOMSelectors.container.replaceChildren();
        DOMSelectors.homepageContainer.replaceChildren();
        DOMSelectors.moreContainer.replaceChildren();
        getData();
    })
}

function homepage() {
    DOMSelectors.homepage.addEventListener("click", function () {
        DOMSelectors.container.replaceChildren();
        DOMSelectors.homepageContainer.replaceChildren();
        DOMSelectors.homepageContainer.insertAdjacentHTML("beforeend",
            `<div data-theme="dracula" class="carousel carousel-center rounded-box max-w-full space-x-4 p-4 bg-accent">
                <div class="carousel-item">
                    <img
                    src="https://genshin.jmp.blue/characters/venti/gacha-splash"
                    alt="gacha splash art of Venti" 
                    class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img
                    src="https://genshin.jmp.blue/characters/zhongli/gacha-splash"
                    alt="gacha splash art of Zhongli" 
                    class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img
                    src="https://genshin.jmp.blue/characters/raiden/gacha-splash"
                    alt="gacha splash art of raiden" 
                    class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img
                    src="https://genshin.jmp.blue/characters/kazuha/gacha-splash"
                    alt="gacha splash art of Kazuha" 
                    class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img
                    src="https://genshin.jmp.blue/characters/ayato/gacha-splash"
                    alt="gacha splash art of Ayato" 
                    class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img
                    src="https://genshin.jmp.blue/characters/yoimiya/gacha-splash"
                    alt="gacha splash art of Yoimiya" 
                    class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img
                    src="https://genshin.jmp.blue/characters/ganyu/gacha-splash"
                    alt="gacha splash art of Ganyu" 
                    class="rounded-box" />
                </div>
            </div>`
        )
    })
}

export { homepage, gallery };