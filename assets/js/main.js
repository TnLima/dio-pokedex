let numPokePorPagina = 6
let pontoPartida = 1

function pokeAvanca() {
    numPokePorPagina = numPokePorPagina + 6
    pontoPartida = pontoPartida + 6
    loopAtualiza()
}

function pokeVolta() {
    if (numPokePorPagina > 6) {
        pontoPartida = pontoPartida - 6;
        numPokePorPagina = numPokePorPagina - 6;
    }
    loopAtualiza()
}

function loopAtualiza() {
    for (let i = pontoPartida; i <= numPokePorPagina; i++) {
        pokeApi.getPokemons(i)
    }

}

loopAtualiza()