export function removePokeById(pokemon, pokeId) {
    if (pokeId === pokemon.id) {
        pokemon.splice(pokeId, 1);
    }
}

export function getRandomPoke(pokemonArray) {
    const randomPokeId = Math.floor(Math.random() * pokemonArray.length);

    return pokemonArray[randomPokeId];
}