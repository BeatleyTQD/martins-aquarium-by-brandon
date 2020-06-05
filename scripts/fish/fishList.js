// Responsible for generating a hide/display button for fish

const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".fishList").classList.toggle("hidden")
})


// Responsible for generating which type of fish the user wants to see 
const fishTypeDropdown = document.querySelector(".typeChoice")
const contentTarget = document.querySelector(".fishList")

const clearFishList = () => contentTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change", clickEvent => {
    // Get the value of the option chosen by the user
    const userChoice = clickEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        showHolyFish()
    } else if (userChoice === "soldier") {
        clearFishList()
        showSoldierFish()
    } else if (userChoice === "regular") {
        clearFishList()
        showRegularFish()
    } else {
        clearFishList()
        fishList()
    }
})

/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

// Function to show holy fish in the browser
const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

// Function to show soldier fish in the browser
const showSoldierFish = () => {
    const fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

// // Function to show common fish in the browser
const showRegularFish = () => {
    const fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}


const fishList = () => {
            /*
                If you don't invoke these functions inside this
                callback function for the then() method, they won't
                render anything because there is no data retrieved
                from the API yet
            */
            showHolyFish()
            showSoldierFish()
            showRegularFish()
        }
    // )
// }
