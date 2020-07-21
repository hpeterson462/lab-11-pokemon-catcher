// import functions and grab DOM elements
import rawData from '../assets/rawData';
import { getRandomPoke } from './poke-utils';
// initialize state
let numberOfPokeCaptures = 0;
let numberOfPokeEncounters = 0;
let pokeCart = [];
let pokemonData = rawData.slice();

// set event listeners to update state and DOM
const randomPoke1 = getRandomPoke(pokemonData);
let randomPoke2 = getRandomPoke(pokemonData);
let randomPoke3 = getRandomPoke(pokemonData);

//make sure random Pokemon isn't same as others
while (randomPoke1.id === randomPoke2.id || randomPoke2.id === randomPoke3.id || randomPoke1.id === randomPoke3.id) {
    getRandomPoke(pokemonData);
}
console.log(randomPoke1, randomPoke2);
//generate random Pokemon that hasn't been picked yet
getRandomPoke();

//grab the array of labels
const labels = document.querySelectorAll('label');
//get first label
const firstLabel = labels[0];
//get input in the first label
const userInput1 = firstLabel.children[1];
//get img in first 
const img1 = firstLabel.children[2];
//get user's pick (catch)
userInput1.value = randomPoke1.id;
img1.src = randomPoke1.image;

//second label
const secondLabel = labels[1];
const userInput2 = secondLabel.children[1];
input2.addEventListener('click', eventHandler);
img2.src = randomPoke2.image;

//third label
const thirdLabel = labels[1];
const userInput3 = thirdLabel.children[1];
input3.addEventListener('click', eventHandler);
img3.src = randomPoke3.image;

const pokemonCaught = document.querySelector('input:checked');