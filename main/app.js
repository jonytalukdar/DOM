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
// const items = document.getElementById('items');
// const lastItem = items.lastElementChild;
// // lastItem.setAttribute('id', 'last-one');
// lastItem.id = 'last-one';
// console.log(lastItem);

//  style with js

// const title = document.getElementById('title');
// // title.classList = `text-center`;
// // title.style.textTransform = 'uppercase';
// // title.style.color = '#00f';
// // title.style.fontSize = '4rem';

// const styleObj = {
//   background: 'black',
//   fontSize: '30px',
//   color: '#efefef',
// };

// const items = document.getElementById('items');
// Object.assign(items.style, styleObj);

const button = document.getElementById('btn');
const lists = document.getElementById('items');

button.addEventListener('click', () => {
  const inputValue = document.getElementById('input').value;
  const li = document.createElement('li');
  li.innerText = inputValue;
  li.classList = 'list-group-item';
  lists.append(li);
});

//  event delegation problem

// [...lists.children].forEach((li) => {
//   li.onclick = function (e) {
//     e.target.remove();
//   };
// });

lists.addEventListener('click', function (e) {
  //   console.log(this.contains(e.target));
  e.target.remove();
});

// button.onclick = (e) => {
//   alert('hey');
// };
