import { pokeStats } from './assets/pokestats.js';

export function getRandomPoke(pokemonData) {
    const randomPokeId = Math.floor(Math.random() * pokemonData.length);

    return pokemonData[randomPokeId];
}

export function pokeChosen(PokeCaptures, id) {
    let pokeCaught = findById(PokeCaptures, id);

    if (pokeCaught) {
        pokeCaught.caught++;
    } else {
        const newCapture = {
            id: id,
            encounters: 1,
            caught: 1
        };
        PokeCaptures.push(newCapture);
    }
}


export function pokeEncountered(pokemonEncountered, id) {
    let pokeEncounter = findById(pokemonEncountered, id);

    if (pokeEncounter) {
        pokeEncounter.numberOfPokeEncounters++;
    } else {
        const newEncounter = {
            id: id,
            encounters: 1,
            caught: 0
        };
        pokemonEncountered.push(newEncounter);
    }
}

export function findById(pokemonData, id) {
    let match = null;

    for (let i = 0; i < pokemonData.length; i++) {
        if (id === pokemonData[i].id) {
            match = pokemonData[i];
        }
    }

    return match;
}

export function clearTempStorage(tempStorage) {
    localStorage.clear(tempStorage);
}

export function getPokemonStats() {
    let currentPokemonStats = JSON.parse(localStorage.getItem('POKE STATS'));

    if (!currentPokemonStats) {
        localStorage.setItem('POKE STATS', JSON.stringify(pokeStats));
    }
    return currentPokemonStats;
}
