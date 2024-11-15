import "../CSS/style.css";

async function getFilteredData(character) {
    const individualResponse = await fetch("https://genshin.jmp.blue/characters/" + character);
}

async function getData() {
    try {
        const response = await fetch("https://genshin.jmp.blue/characters/");
        if (response.status != 200) {       /* 200 = it works */
            throw new Error(response);
        } else {
            const data = await response.json();
            const container = document.querySelector(".container");
            data.forEach((character) => {
                container.insertAdjacentHTML("beforeend",
                    `<div class="card" id="">
                        <h1 class="name">${character}</h1>
                        <h3 class="title"></h3>
                        <img src="" alt="" class="picture">
                    </div>
                    `
                )
            });

        }
    } catch (error) {
        console.log(error);
        alert("sorry could not find that genshin category")
    }

}

getData();