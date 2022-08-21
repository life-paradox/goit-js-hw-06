console.log('Number of categories:' + document.querySelector('#categories').children.length);

const items = document.querySelector('#categories').querySelectorAll('.item');

for (const item of items) {
  console.log('\nCategory:' + item.querySelector('h2').textContent);
  console.log('Elements:' + item.querySelector('ul').children.length);
}
