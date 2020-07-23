// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { findById } from '../poke-utils.js';
import { rawData } from '../assets/rawData.js';


const test = QUnit.test;

test('find pokemon by id', assert => {
    //Arrange
    // Set up your arguments and expectations
    const id = 1;
    const expected = 'bulbasaur';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(rawData, id);

    //Expect
    // Make assertions about what is expected versus the actual result
    assert.ok(actual);
    assert.equal(actual.pokemon, expected);
});