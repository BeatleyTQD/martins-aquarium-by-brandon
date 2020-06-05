/*
    This function will convert a single fish object to an
    HTML representation and return it
*/
// const fishConverter = (fishObject) => {

//     const fishHTMLRepresentation = `<section class="fish">
//         <div>
//             <img class="fish__picture" src="${fishObject.picture}"
//                 alt="${fishObject.name} the ${fishObject.species}" />
//         </div>
//         <div class="fish__details">
//             <ul class="fish__list">
//                 <li>Name: ${fishObject.name}</li>
//                 <li>Species: ${fishObject.species}</li>
//                 <li>Length: ${fishObject.length}</li>
//                 <li>Location: ${fishObject.location}</li>
//                 <li>Food: ${fishObject.food}</li>
//             </ul>
//         </div>
//     </section>`

//     return fishHTMLRepresentation

// }

const fishConverter = (fishObject) => {

    const fishHTMLRepresentation = `<section class="fish">
        <div>
            <img class="fish__picture" src="${fishObject.picture}"
                alt="${fishObject.name} the ${fishObject.species}" />
        </div>
        <section class="fish__details">
            <div class="fish__list">
                <p>Name: ${fishObject.name}</p>
                <p>Species: ${fishObject.species}</p>
                <p>Length: ${fishObject.length}</p>
                <p>Location: ${fishObject.location}</p>
                <p>Food: ${fishObject.food}</p>
            </div>
        </section>
    </section>`

    return fishHTMLRepresentation
}