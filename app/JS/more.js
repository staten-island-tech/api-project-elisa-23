
const DOMSelectors = {
    container: document.querySelector('#container'),
    homepageContainer: document.querySelector("#homepage-container"),
    moreContainer: document.querySelector("#more-container")
}

async function getCharacterinfo(character) {
    try {
        const individualResponse = await fetch(`https://genshin.jmp.blue/characters/${encodeURIComponent(character)}`);
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
            const character = btn.getAttribute("data-id");
            console.log(character);
            /* const data = await getCharacterinfo(character);
            DOMSelectors.moreContainer.insertAdjacentHTML("beforeend",
                `<div class="card bg-base-100 w-96 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>`
            ); */
        });
    });
}

export { insertCharacterinfo };