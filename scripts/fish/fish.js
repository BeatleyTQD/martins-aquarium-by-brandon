/*
    This function will convert a single fish object to an
    HTML representation and return it
*/
const fishConverter = (fishObject) => {

    const fishHTMLRepresentation = `<section class="fish">
        <div>
            <img class="fish__picture" src="${fishObject.picture}"
                alt="${fishObject.name} the ${fishObject.species}" />
        </div>
        <div class="fish__details">
            <ul class="fish__list">
                <li>Name: ${fishObject.name}</li>
                <li>Species: ${fishObject.species}</li>
                <li>Length: ${fishObject.length}</li>
                <li>Location: ${fishObject.location}</li>
                <li>Food: ${fishObject.food}</li>
            </ul>
        </div>
    </section>`

    return fishHTMLRepresentation

}