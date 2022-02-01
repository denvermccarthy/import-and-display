export function renderAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
   
    //header
    const type = document.createElement('h2');
    type.textContent = animal.type.toUpperCase();
    
    //img
    const img = document.createElement('img');
    img.src = `./assets/${animal.image}`;
   
    //description
    const desc = document.createElement('p');
    desc.textContent = `${animal.type} are ${animal.class} with ${animal.legs} legs and a cuteness rating of ${animal.cuteness}.`;
    
    div.append(type, img, desc);
    return div;
}

export function renderApple(apple) {
    const li = document.createElement('li');
    li.classList.add('apple');
    li.textContent = apple;
    return li;
}

export function renderSoda(soda) {
    const div = document.createElement('div');
    div.classList.add('soda');
    const h3 = document.createElement('h3');
    h3.textContent = soda.name;
    const p = document.createElement('p');
    p.textContent = `Nutrition Facts - Sugar: ${soda.nutrition.sugar} grams - Calories: ${soda.nutrition.calories} cal`;
    div.append(h3, p);
    return div;
}

export function renderTier(tier) {
  
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = tier.tier;
    const ul = document.createElement('ul');
    for (const item of tier.food) {
      const li = document.createElement('li');
      li.textContent = item;
      ul.append(li); 
    }
    div.append(h3, ul);
    return div;
}