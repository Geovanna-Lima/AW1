const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

const searchInput = getElement('.search-input')
const searchButton = getElement('.search-button')
const container = getElement('.pokemon')
const erroMessage = getElement('.error')

var pokeName
var pokemon
var card

function getElement(element) {
    return document.querySelector(element)
}

function requestPokeInfo(url, name) {
    axios.get(url + name)
        .then(response => {
            pokemon = response.data
        })
        .catch(err => console.log(err))
}

function createCard() {
    card = `
    <div class="pokemon-picture">
      <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
    </div>
    <div class="pokemon-info">
        <h1 class="name">${pokemon.name}</h1>
        <h2 class="number">Nº ${pokemon.id}</h2>
        <p class="type"><span>Tipo: </span>${pokemon.types.map(item => item.type.name).toString()}</p>
        <p class="skill"><span>Habilidades: </span>${pokemon.moves.map(item => ' ' + item.move.name).toString()}</p>
        <p class="weight"><span>Peso: </span>${pokemon.weight / 10}kg</p>
        <p class="height"><span>Altura: </span>${pokemon.height / 10}m</p>
    </div>`
    return card
}

function startApp(pokeName) {
    requestPokeInfo(baseUrl, pokeName)

    setTimeout(function () {
        if (pokemon.detail) {
            erroMessage.style.display = 'block'
            container.style.display = 'none'
        } else {
            erroMessage.style.display = 'none'
            container.style.display = 'flex'
            container.innerHTML = createCard()
        }
    }, 2000)
}

searchButton.addEventListener('click', event => {
    event.preventDefault();
    pokeName = searchInput.value.toLowerCase()
    startApp(pokeName)
    container.classList.add('fade')

    setTimeout(() => {
        container.classList.remove('fade')
    }, 3000)
})