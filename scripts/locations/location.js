// This function will convert a single location object to an
// HTML representation and return it

const locationConverter = (locationObject) => {

    const locationHTMLRepresentation = `<section class="location">
        <div>
            <img class="location__picture"
                src="${locationObject.picture}"
                alt="${locationObject.alt}" />
        </div>
        <div class="location__details">
            "${locationObject.description}"
        </div>     
    </section>`

    return locationHTMLRepresentation
}