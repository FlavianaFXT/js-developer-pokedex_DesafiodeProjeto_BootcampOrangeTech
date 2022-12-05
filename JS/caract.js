const pokeCaract = {}

function convertPokeCaractDetailToPokemonCaract(pokeCaract) {
    const pokemonCaract = new PokemonCaract()

    pokemon.number = pokeCaract.id
    pokemon.name = pokeCaract.name

    const types = pokeCaract.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeCaract.sprites.other.dream_world.front_default

    pokemon.abilities = pokeCaract.abilities.ability

    return pokemonCaract;
}

pokeCaract.getPokemonCaract = (pokemonCaract) => {
    return fetch(pokemonCaract.urlDetails)
    .then((response) => response.json())
    .then (convertPokeCaractDetailToPokemonCaract)
}

pokeApi.getPokemons = () => {

    const urlDetails = `https://pokeapi.co/api/v2/pokemon?number=${number}&offset=${offset}&limit=${limit}`

    return fetch(urlDetails)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeCaract.getPokemons))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
};




