const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement(`li`);
  li.textContent = ingredients[i];
  li.setAttribute('class', 'item');
  list.append(li);
}
