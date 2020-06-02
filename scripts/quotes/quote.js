/*
    This function will convert a single fish object to an
    HTML representation and return it
*/

const quoteConverter = (quoteObject) => {
    const quoteHTMLRepresentation = `<section class="quote">"${quoteObject.quote}" 
    <div class="quoteAuthor">${quoteObject.author}</div>
    </section>`

    return quoteHTMLRepresentation
}