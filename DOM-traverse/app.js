let list = document.getElementById('list');

// console.log(list);

// let parent = list.parentElement;
// console.log(parent);

// let children = list.children;
// console.log(children);

// console.log(list.previousSibling);
// console.log(list.previousElementSibling);
// console.log(list.nextElementSibling);

// let li = document.querySelector('li');
// console.log(li.nextElementSibling);

// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

let listItem = document.getElementsByTagName('li');
// let newListItem = Array.from(listItem);
// let newListItem = Array.prototype.slice.apply(listItem);
let newListItem = [...listItem];
newListItem.forEach((li, ind) => {
  let text = li.innerHTML;
  li.innerHTML = `${ind + 1} ${text}`;
});
