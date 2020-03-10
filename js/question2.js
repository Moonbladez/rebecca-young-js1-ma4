const url = ("https://api.rawg.io/api/games")


fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        handleJson(json)
    })
    .catch((error) => {
        console.log(error)
    });

const handleJson = (json) => {
    const results = json.results
    console.dir(results)

    const resultsContainer = document.querySelector(".results")
    let markUp = "";

    results.forEach((result) => {
        markUp += `<div class="game">
        <h2>${result.name}</h2>
        <img src="${result.background_image}" alt="${result.name}">
    </div>`
        //could not see smaller images on JSON data
    })

    resultsContainer.innerHTML = markUp;
}