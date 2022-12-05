const caracteristicas = document.getElementById('pokemonList')

caracteristicas.addEventListener('click', () => {
    window.open('detalhes_poke.html', "load");

})

function convertCaracteristicsHtml(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                <ol class="abilities">
                    ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('')}
                </ol>
            </div>
        </li>
    `
}

function loadPokemonDetails(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml2 = pokemons.map(convertCaracteristicsHtml).join('')
        pokemonDetails.innerHTML += newHtml2
    })
}

loadPokemonDetails (offset,limit)

