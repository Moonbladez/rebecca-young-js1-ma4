const fetchGameData = async () => {
    return await fetch("https://api.rawg.io/api/games")
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => console.log("There has been an error", error));
}

const createGames = (json) => {
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

fetchGameData().then((json) => createGames(json));