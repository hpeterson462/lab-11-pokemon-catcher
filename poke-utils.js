export function getRandomPoke(rawData) {
    const randomPokeId = Math.floor(Math.random() * rawData.length);

    return rawData[randomPokeId];
}

export function findById(id, rawData) {
    let match = null;

    for (let i = 0; i < rawData.length; i++) {
        if (id === rawData[i].id) {
            match = rawData[i];
        }
    }
    return match;
}

export function clearTempStorage(tempStorage) {
    localStorage.clear(tempStorage);
}

export function getCart() {
    const rawCart = localStorage.getItem('CART');
    let cart = JSON.parse(rawCart) || []
        ;
    return cart;
}

export function mungeCaptured(pokemonArray) {
    const captures = [];
    for (let i = 0; i < pokemonArray.length; i++) {
        const pokemon = pokemonArray[i];

        captures.push(pokemon.captured);
    }
    return captures;
}