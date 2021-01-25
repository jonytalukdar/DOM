// // using id name

// let title = document.getElementById('title');

// // using the className
// let paragraph = document.getElementsByClassName('lead');

// for (let i = 0; i < paragraph.length; i++) {
//   let element = paragraph[i];
//   element.style.color = 'red';
//   element.style.backgroundColor = '#eee';
//   element.style.padding = '10px';
// }

// // using the tagName

// let list = document.getElementsByTagName('li');
// console.log(list);

// using querySelector

// let title = document.querySelector('#title');
// console.log(title);

// let paragraph = document.querySelector('.lead');
// console.log(paragraph);

// // using queryselectorAll

// paragraph = document.querySelectorAll('.lead');
// console.log(paragraph);

// // using tagName

// let lists = document.getElementsByTagName('li');
// console.log(lists);

// selector vs getElement

let li1 = document.getElementsByTagName('li'); // element

let li2 = document.querySelectorAll('li'); // node

console.log(li1.constructor.name);
console.log(li2.constructor.name);

let ul = document.querySelector('ul');
console.log(ul.children);
console.log(ul.childNodes);
