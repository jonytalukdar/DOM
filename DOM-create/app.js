let li = createElement('li', 'list-item', 'four');
li.setAttribute('title', 'hello this is');
let list = document.getElementById('list');
list.appendChild(li);

function createElement(tagName, className, innerHTML) {
  let tag = document.createElement(tagName);
  tag.innerHTML = innerHTML || '';
  tag.className = className || '';
  return tag;
}

function append(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}

let p1 = createElement(
  'p',
  'lead',
  'this is awesome to learnign somethign new from stack learner so i am going to learn javascript beacuase javascript is a client and server side language'
);

let p2 = createElement(
  'p',
  'lead',
  'this is awesome to learnign somethign new from stack learner so i am going to learn javascript beacuase javascript is a client and server side language'
);

let div = createElement('div');
append(div, [(p1, p2)]);
document.getElementsByClassName('container')[0].appendChild(div);
