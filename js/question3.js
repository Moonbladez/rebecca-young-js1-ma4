const fetchGameData = async () => {
    return await fetch("https://api.rawg.io/api/games/4200")
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => console.log(error));
}

const createGameDetails = (json) => {
    const image = document.querySelector(".image")
    const imageUrl = json.background_image
    image.style.backgroundImage = `url(${imageUrl})`
}

fetchGameData().then((json) => createGameDetails(json))