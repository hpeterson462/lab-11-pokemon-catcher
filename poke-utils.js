export function removePokeById(pokemon, pokeId) {
    if (pokeId === pokemon.id) {
        pokemon.splice(pokeId, 1);
    }
}

export function getRandomPoke(pokemonData) {
    const randomPokeId = Math.floor(Math.random() * pokemonData.length);

    return pokemonData[randomPokeId];
}