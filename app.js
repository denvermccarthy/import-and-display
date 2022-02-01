// import functions and grab DOM elements
import { renderAnimal, renderApple, renderSoda, renderTier } from './test/utils.js';
import { animals, apples, sodas, tiers } from './data.js';

const listAnimal = document.getElementById('animal-list');
const listApple = document.getElementById('apple-list');
const listSoda = document.getElementById('soda-list');
const listTier = document.getElementById('breakfast-list');
// let state
function renderAnimals() {
    for (let animal of animals) {
        let div = renderAnimal(animal);
        listAnimal.append(div);
    }
}

function renderApples() {
    for (const apple of apples) {
        const li = renderApple(apple);
        listApple.append(li);
    }
}

function renderSodas() {
    for (const soda of sodas) {
        const li = renderSoda(soda);
        listSoda.append(li);
    }
}

function renderTiers() {
    for (const tier of tiers) {
        let div = renderTier(tier);
        listTier.append(div);
    }
}

renderAnimals();
renderApples();
renderSodas();
renderTiers();

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
