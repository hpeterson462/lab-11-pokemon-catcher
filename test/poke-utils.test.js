// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getCart, mungeCaptured } from '../poke-utils.js';

const test = QUnit.test;

test('set pokemon in cart', (assert) => {
    //Arrange
    // Set up your arguments and expectations
    const myFakeCart = [
        { id: '1', quantity: 2 },
        { id: 2, quantity: 1 },
    ];

    //Act 
    // Call the function you're testing and set the result to a const
    const myStringyFakeCart = JSON.stringify(myFakeCart);
    localStorage.setItem('CART', myStringyFakeCart);


    const cart = getCart();
    const expected = myFakeCart;
    //Expect
    // Make assertions about what is expected versus the actual result
    assert.deepEqual(cart, expected);
});


test('return number of pokemon from array', (assert) => {
    //Arrange
    // Set up your arguments and expectations
    const pokemon = [
        {
            captured: 3,
            name: 'charmander'
        },
        {
            captured: 2,
            name: 'pidgey'
        },
    ];

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = [3, 2];

    const actual = mungeCaptured(pokemon);
    //Expect
    // Make assertions about what is expected versus the actual result
    assert.deepEqual(actual, expected);
});