/*
Responsible for generating a list of location HTML
representations, and putting in the browser
*/

const locationList = () => {
    //Iterate the collection of location objects
    for (const currentLocationObject of locationCollection) {

    // Convert the current location object to its HTML representation
    const locationHTML = locationConverter(currentLocationObject)

    // Find the  <article> element in index.html
    const locationArticleElement = document.querySelector(".locationList")

    // Put the fish HTML representation inside the <article> element
    locationArticleElement.innerHTML += locationHTML
    }
}