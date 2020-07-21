// import functions and grab DOM elements
import { rawData } from './assets/rawData.js';
import { getRandomPoke } from './poke-utils.js';
// initialize state
/*const pokeImageTags = document.querySelectorAll('img');
const pokeRadioTags = document.querySelectorAll('input');
const pokeName = document.getElementById('pokemon');
const result = document.getElementById('result');
const nextDiv = document.getElementById('next-div');
const userPokeChoice = document.getElementById('user-poke-choice');
const button = document.querySelector('button');*/

let numberOfPokeCaptures = 0;
let numberOfPokeEncounters = 0;
let pokeCart = [];
const pokemonData = rawData.slice();

// set event listeners to update state and DOM
const randomPoke1 = getRandomPoke(pokemonData);
let randomPoke2 = getRandomPoke(pokemonData);
let randomPoke3 = getRandomPoke(pokemonData);

//make sure random Pokemon isn't same as others
while (randomPoke1.id === randomPoke2.id || randomPoke2.id === randomPoke3.id || randomPoke1.id === randomPoke3.id) {
    getRandomPoke(pokemonData);
}

//array of labels
const labels = document.querySelectorAll('label');

//get first label
const firstLabel = labels[0];
const span1 = firstLabel.children[0];
const userInput1 = firstLabel.children[1];
const img1 = firstLabel.children[2];

span1.textContent = randomPoke1.pokemon;
userInput1.value = randomPoke1.pokemon;
img1.src = randomPoke1.url_image;

//get second label
const secondLabel = labels[1];
const span2 = secondLabel.children[0];
const userInput2 = secondLabel.children[1];
userInput1.addEventListener('click', eventHandler);
const img2 = secondLabel.children[2];

span2.textContent = randomPoke2.pokemon;
userInput2.value = randomPoke2.pokemon;
userInput2.addEventListener('click', eventHandler);
img2.src = randomPoke2.url_image;

//third label
const thirdLabel = labels[2];
const span3 = thirdLabel.children[0];
const userInput3 = thirdLabel.children[1];
userInput3.addEventListener('click', eventHandler);
const img3 = thirdLabel.children[2];

span3.textContent = randomPoke3.pokemon;
userInput3.value = randomPoke3.pokemon;
img3.src = randomPoke3.url_image;

const pokemonCaught = document.querySelector('input:checked');

function eventHandler(e) {
    console.log(e.target.value);
}