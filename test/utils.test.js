// IMPORT MODULES under test here:
import { renderAnimal, renderApple, renderSoda, renderTier } from './utils.js';

const test = QUnit.test;

test('animals test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="animal"><h2>DOGS</h2><img src="./assets/icons8-dog-64.png"><p>Dogs are mammals with 4 legs and a cuteness rating of 10.</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderAnimal({
        type: 'Dogs',
        legs: 4,
        class: 'mammals',
        cuteness: 10,
        image: 'icons8-dog-64.png' 
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('apple test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="apple">Granny Smith</li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderApple('Granny Smith');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('soda test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="soda"><h3>sprite</h3><p>Nutrition Facts - Sugar: 50 grams - Calories: 0 cal</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderSoda({ 
        name: 'sprite',
        nutrition: {
            sugar: '50',
            calories: '0'
        } 
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('breakfast test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div><h3>S-Tier</h3><ul><li>eggs benedict</li><li>huevos rancheros</li><li>crepes</li></ul></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTier({ 
        tier: 'S-Tier',
        food: ['eggs benedict', 'huevos rancheros', 'crepes']
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
