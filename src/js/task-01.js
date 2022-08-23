console.log('Number of categories:' + document.querySelector('#categories').children.length);

const items = document.querySelector('#categories').querySelectorAll('.item');

for (const item of items) {
  console.log('\nCategory:' + item.firstElementChild.textContent);
  console.log('Elements:' + item.lastElementChild.children.length);
}
