//  inseradjacentment
// const li = document.createElement('li');
// li.classList = 'list-group-item text-center';
// li.innerHTML = '<h1> hello </h1>';

// const items = document.getElementById('items');
// items.insertAdjacentElement('beforebegin', li);

// const firstItem = document.getElementById('list-one');
// setTimeout(() => {
//   firstItem.innerText = 'First Item has been modified';
//   firstItem.style.background = 'red';
// }, 5000);

// setTimeout(() => {
// //   firstItem.remove();
// }, 5000);

// setInterval(() => {
//   firstItem.innerText = Math.random();
// }, 2000);

// // set attribute
const items = document.getElementById('items');
const lastItem = items.lastElementChild;
// lastItem.setAttribute('id', 'last-one');
lastItem.id = 'last-one';
console.log(lastItem);
