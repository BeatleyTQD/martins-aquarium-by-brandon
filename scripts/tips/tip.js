/*
    This function will convert a single tip object to an
    HTML representation and return it
*/

const tipConverter = (tipObject) => {

    const tipHTMLRepresentative = `<section class="tip">${tipObject.tip}</section>`
    
    return tipHTMLRepresentative
}