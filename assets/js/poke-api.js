function adicionarZeros(number) {
    return String(number).padStart(3, '0');
}

function pokemon2html(pokemon) { 
    pokeTipo1 = pokemon.types[0].type.name
    pokeTipo2 = pokemon.types.length >= 2 ? pokemon.types[1].type.name : ''
    pokeNome = pokemon.name
    pokeNumero = adicionarZeros(pokemon.id)    

    return `   
            <a href="pokemonDetail.html" class="pokemon linkDetail ${pokeTipo1}">
                <span class="number">#${pokeNumero}</span>
                <span class="name">${pokeNome}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type ${pokeTipo1}">${pokeTipo1}</li>
                        <li class="type ${pokeTipo2}">${pokeTipo2}</li>
                    </ol>
                    <img class="pkImage" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeNumero}.png" alt="${pokeNome}">
                </div>
            </a>
    `
}

const pokeApi = {}
const pokemonCard = document.getElementById('pokemonCard')

pokeApi.getPokemons = async (numero = 1) => {
    pokemonCard.innerHTML = ''
    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`
    fetch(url)
        .then((dadosUrl) => dadosUrl.json())
        .then((jsonResults) => pokemonCard.innerHTML += pokemon2html(jsonResults))
}