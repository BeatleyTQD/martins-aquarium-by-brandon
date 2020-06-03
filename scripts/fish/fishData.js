const fishCollection = [
    {
        name: "Carlene",
        species: "Mola Mola",
        length: 6,
        location: "Atlantic Ocean",
        food: "Happiness",
        picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sunfish2.jpg/1200px-Sunfish2.jpg"
    },
    {
        name: "Komal",
        species: "Anglerfish",
        length: 3,
        location: "Deep Deep",
        food: "Steak Tartare",
        picture:"https://static01.nyt.com/images/2019/07/29/science/29SCI-ANGLERFISH-promo/29SCI-ANGLERFISH-promo-superJumbo.jpg"
    },
    {
        name: "Gruffydd",
        species: "Oarfish",
        length: 8,
        location: "Mesopelagic",
        food: "Unsliced Bread",
        picture:"https://external-preview.redd.it/pYMOEFuLKEhOw306jXYPyDAAkJFRdvxCbyjFBzi88eo.jpg?auto=webp&s=67fe3a904474205667a4be8d35d9d0c979fc369c"
    },
    {
        name: "Melody",
        species: "Blobfish",
        length: 30,
        location: "Deep Deep",
        food: "Existentialism",
        picture:"https://elhstalon.net/wp-content/uploads/2019/09/Blobfish.jpg"
    },
    {
        name: "Jason",
        species: "oh god",
        length: "he's coming",
        location: "for m...",
        food: "...",
        picture:"https://peopledotcom.files.wordpress.com/2019/11/fish-human-face.jpg?crop=4px%2C0px%2C2391px%2C1599.6928571429px&resize=420%2C281"
    },
    {
        name: "Rasmussen",
        species: "Axolotl",
        length: 9,
        location: "Mexico",
        food: "Palak Paneer",
        picture:"https://cdn.mos.cms.futurecdn.net/hKm2MuLdDLubD6rgeYLeDM-1200-80.jpg"
    },
    {
        name: "Ancro",
        species: "Whale Shark",
        length: 33,
        location: "Dumpré",
        food: "C+ Bass",
        picture:"https://i.ytimg.com/vi/i-VMrW42J-0/maxresdefault.jpg"
    }
]


// 3, 6, 9, 12, etc... fish
const mostHolyFish = (fishObject) => {
    const holyFish = []

    for (const fishObject of fishCollection) {
        if (fishObject.length % 3 === 0) {
            holyFish.push(fishObject)
        }
    }
    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = (fishObject) => {
    const soldiers = []

    for (const fishObject of fishCollection) {
        if (fishObject.length % 5 === 0) {
            soldiers.push(fishObject)
        }
    }
    return soldiers
}

// Any fish not a multiple of 3 or 5
const nonHolyFish = (fishObject) => {
    const regularFish = [] 

    for (fishObject of fishCollection) {
        if (fishObject.length % 3 !== 0 && fishObject.length % 5 !== 0) {
            regularFish.push(fishObject)
        }
    }
    return regularFish
}