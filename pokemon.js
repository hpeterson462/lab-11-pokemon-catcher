// import functions and grab DOM elements
import { rawData } from './assets/rawData.js';
import {
    getRandomPoke,
    pokeChosen,
    pokeEncountered,
    findById,
} from './poke-utils.js';

/*const totalPokesEncountered = document.getElementById('total-pokes-encountered');
const totalPokesCaptured = document.getElementById('total-pokes-captured');*/

// initialize state
//let numberOfPokeCaptures = 0;
//let numberOfPokeEncounters = 0;
const pokemonData = rawData.slice();
//let totalPokesEncountered = [];
//const totalPokesEncountered = [];

// set event listeners to update state and DOM
const randomPoke1 = getRandomPoke(pokemonData);
let randomPoke2 = getRandomPoke(pokemonData);
let randomPoke3 = getRandomPoke(pokemonData);

//make sure random Pokemon isn't same as others
while (randomPoke1.id === randomPoke2.id || randomPoke1.id === randomPoke3.id || randomPoke2.id === randomPoke3.id) {
    randomPoke2 = getRandomPoke(pokemonData);
    randomPoke3 = getRandomPoke(pokemonData);
}

//array of labels
const labels = document.querySelectorAll('label');

//get first label
const firstLabel = labels[0];
const span1 = firstLabel.children[0];
const userInput1 = firstLabel.children[1];
userInput1.addEventListener('click', eventHandler);
const img1 = firstLabel.children[2];

span1.textContent = randomPoke1.pokemon;
userInput1.value = randomPoke1.pokemon;
img1.src = randomPoke1.url_image;

//get second label
const secondLabel = labels[1];
const span2 = secondLabel.children[0];
const userInput2 = secondLabel.children[1];
userInput2.addEventListener('click', eventHandler);
const img2 = secondLabel.children[2];

span2.textContent = randomPoke2.pokemon;
userInput2.value = randomPoke2.pokemon;
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

const nextButton = document.getElementById('next-button');
//const pokemonCaught = document.querySelector('input:checked');

function eventHandler(e) {
    //numberOfPokeCaptures++;

    const userClicked = e.target.value;
    const pokesCaptured = findById(pokemonData, userClicked);
    const pokeEncounter = pokeEncountered(userClicked, pokesCaptured);
    pokeChosen(pokeEncounter, userClicked);

    userInput1.disable = true;
    userInput2.disable = true;
    userInput3.disable = true;
    nextButton.classList.remove('hidden');
}