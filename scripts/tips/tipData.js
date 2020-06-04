let tipCollection = []

const getTipData = () => {
    return fetch("http://localhost:8088/tips").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfTip) => {
                // 100 percent sure the data is back
                tipCollection = arrayOfTip
            }
        )
}