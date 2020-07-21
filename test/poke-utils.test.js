// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getRandomPoke } from '../poke-utils.js';

const test = QUnit.test;

test('generate random pokemon', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
