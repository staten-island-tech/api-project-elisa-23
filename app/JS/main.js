import "../CSS/style.css";

async function getData(/* could use paramater url or hard code it */) {
    //try catch method - similar to if else
    //an example of a gaurd clause - won't break the system
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        if (response.status != 200) {       /* 200 = it works */
            throw new Error(response);
        } else {
            const data = await response.json();
            console.log(data);
            //how do you put it on the screen
            document.querySelector("h1").textContent = data.name;           /* will print it on the screen - text content ==> the text for the object */
        }
    } catch (error) {
        console.log(error);
        alert("sorry could not find that pocket monster")
    }

    //fetch returns a promise    /* put api as a string inside of the parathesis */
    //await will wait for the code to run before moving on
    // const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");      /* doesn't matter what you call it */
    //the code above is not giving you the data
    //if you spell it wrong it would break

    //const data = await response.json();             /* turns it into a json data - becomes data */
    //console.log(data);

}

getData();