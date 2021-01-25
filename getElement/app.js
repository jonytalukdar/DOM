// using id name

let title = document.getElementById('title');

// using the className
let paragraph = document.getElementsByClassName('lead');

for (let i = 0; i < paragraph.length; i++) {
  let element = paragraph[i];
  element.style.color = 'red';
  element.style.backgroundColor = '#eee';
  element.style.padding = '10px';
}

// using the tagName

let list = document.getElementsByTagName('li');
console.log(list);
