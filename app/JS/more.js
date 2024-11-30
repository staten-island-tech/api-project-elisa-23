
const DOMSelectors = {
    container: document.querySelector('#container'),
    homepageContainer: document.querySelector("#homepage-container"),
    moreContainer: document.querySelector("#more-container")
}

async function getCharacterinfo(character) {
    try {
        const individualResponse = await fetch(`https://genshin.jmp.blue/characters/${character}`);
        if (individualResponse.status != 200) {
            throw new Error(individualResponse);
        } else {
            const individualData = await individualResponse.json();
            return individualData;
        }
    } catch (error) {
        console.log(error);
        alert("sorry could not find that character");
    }
}

function insertCharacterinfo() {
    const moreBtn = document.querySelectorAll('#more');
    moreBtn.forEach((btn) => {
        btn.addEventListener("click", async function () {
            DOMSelectors.container.replaceChildren();
            DOMSelectors.homepageContainer.replaceChildren();
            DOMSelectors.moreContainer.replaceChildren();
            const character = btn.getAttribute('data-id');
            console.log(character);
            const data = await getCharacterinfo(character);
            console.log(data);
            let rarity = "";
            if (data.rarity === 5) {
                rarity = "★ ★ ★ ★ ★";
            } else {
                rarity = "★ ★ ★ ★";
            }
            DOMSelectors.moreContainer.insertAdjacentHTML("beforeend",
                `<div class="card bg-base-100 w-[70%] h-full shadow-xl m-10">
                    <figure class="px-10 pt-10">
                        <img
                        src="https://genshin.jmp.blue/characters/${character}/icon-big"
                        alt="image of ${character}"
                        class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">${data.name}</h2>
                        <p>${data.title}</p>
                        <p>${data.nation}</p>
                        <p>Released on ${data.release}</p>
                        <br>
                        <p>${rarity}</p>
                        <br>
                        <p>${data.vision}</p>
                        <p>${data.weapon}</p>
                        <br>
                        <p>Birthday: ${data.birthday}</p>
                        <p>Affiliated with ${data.affiliation}</p>
                        <p>${data.description}</p>
                        <br>
                        <div class="card-actions">
                            <div tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-200 border">
                                <div class="collapse-title text-xl font-medium">View Skills</div>
                                <div class="collapse-content">
                                    <p>${data.skillTalents[0].name}</p>
                                    <p>${data.skillTalents[0].unlock}</p>
                                    <p>${data.skillTalents[0].description}</p>
                                    <br>
                                    <p>${data.skillTalents[1].name}</p>
                                    <p>${data.skillTalents[1].unlock}</p>
                                    <p>${data.skillTalents[1].description}</p>
                                    <br>
                                    <p>${data.skillTalents[2].name}</p>
                                    <p>${data.skillTalents[2].unlock}</p>
                                    <p>${data.skillTalents[2].description}</p>
                                </div>
                            </div>
                            <div tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-200 border">
                                <div class="collapse-title text-xl font-medium">View Passives</div>
                                <div class="collapse-content">
                                    <p>${data.passiveTalents[0].name}</p>
                                    <p>${data.passiveTalents[0].unlock}</p>
                                    <p>${data.passiveTalents[0].description}</p>
                                    <br>
                                    <p>${data.passiveTalents[1].name}</p>
                                    <p>${data.passiveTalents[1].unlock}</p>
                                    <p>${data.passiveTalents[1].description}</p>
                                    <br>
                                    <p>${data.passiveTalents[2].name}</p>
                                    <p>${data.passiveTalents[2].unlock}</p>
                                    <p>${data.passiveTalents[2].description}</p>
                                </div>
                            </div>
                            <div tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-200 border">
                                <div class="collapse-title text-xl font-medium">View Constellations</div>
                                <div class="collapse-content">
                                    <p>${data.constellations[0].name}</p>
                                    <p>${data.constellations[0].unlock}</p>
                                    <p>${data.constellations[0].description}</p>
                                    <br>
                                    <p>${data.constellations[1].name}</p>
                                    <p>${data.constellations[1].unlock}</p>
                                    <p>${data.constellations[1].description}</p>
                                    <br>
                                    <p>${data.constellations[2].name}</p>
                                    <p>${data.constellations[2].unlock}</p>
                                    <p>${data.constellations[2].description}</p>
                                    <br>
                                    <p>${data.constellations[3].name}</p>
                                    <p>${data.constellations[3].unlock}</p>
                                    <p>${data.constellations[3].description}</p>
                                    <br>
                                    <p>${data.constellations[4].name}</p>
                                    <p>${data.constellations[4].unlock}</p>
                                    <p>${data.constellations[4].description}</p>
                                    <br>
                                    <p>${data.constellations[5].name}</p>
                                    <p>${data.constellations[5].unlock}</p>
                                    <p>${data.constellations[5].description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            )
        })
    })
}

export { insertCharacterinfo };