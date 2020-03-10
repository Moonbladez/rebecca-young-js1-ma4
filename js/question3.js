const url = ("https://api.rawg.io/api/games/4200")
const image = document.querySelector(".image")

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        createGameDetails(json)
    })
    .catch((error) => {
        console.log(error)
    });

const createGameDetails = (json) => {
    const imageUrl = json.background_image
    image.style.backgroundImage = `url(${imageUrl})`
}