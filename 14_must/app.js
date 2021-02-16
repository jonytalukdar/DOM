const body = document.body;
// body.append('hello World', 'this is another code');
// // body.appendChild('hello world');

// const div = document.createElement('div');
// div.innerHTML = `
//   <h1> hello world</h1>
// `;

// body.appendChild(div);

const div = document.querySelector('div');
const hi = document.querySelector('#hi');
const bye = document.querySelector('#bye');
bye.remove();
div.appendChild(bye);
