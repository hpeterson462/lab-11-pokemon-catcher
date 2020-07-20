// import functions and grab DOM elements
import rawData from '../assets/rawData';
import { getRandomPoke } from './poke-utils.js';
// initialize state
let numberOfPokeCaptures = 0;
let numberOfPokeEncounters = 0;
let pokeCart = [];

// set event listeners to update state and DOM
const randomPoke1 = getRandomPoke();
const randomPoke2 = getRandomPoke();

while (randomPoke1.id === randomPoke2.id) {

}
//generate random Pokemon that hasn't been picked yet

const randomOneOrZero = Math.round(Math.random());

let correctAnswer = null;

if (randomOneOrZero) {
    correctAnswer = randomPoke1;
} else {
    correctAnswer = randomPoke2;
}

//grab the array of labels

//get first label

//get input in the first label

//get img in first label