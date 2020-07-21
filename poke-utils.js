export function removePokebyId(pokemon, pokeId) {
    if (pokeId === pokemon.id) {
        pokemon.splice(pokeId, 1);
    }
}

export function getRandomPoke() {
    const randomPokeId = Math.round(Math.random() * pokemon.length);
    return pokemon[randomPokeId];
}