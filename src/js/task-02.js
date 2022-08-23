const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const listItem = document.createElement(`li`);

const items = ingredients.map(option => {
  const listItem = document.createElement(`li`);
  listItem.textContent = option;
  listItem.setAttribute('class', 'item');

  return listItem;
});

list.append(...items);
