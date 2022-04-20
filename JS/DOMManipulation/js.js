const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const redText = document.createElement('p');
redText.setAttribute('style', 'color: red;');
redText.textContent = "Hey I'm red!";
container.appendChild(redText);


const blueh3 = document.createElement('h3');
blueh3.setAttribute('style', 'color: blue;');
blueh3.textContent = "I'm a blue h3";
container.appendChild(blueh3);

const pinkDiv = document.createElement('div');
pinkDiv.setAttribute('style', 'background-color: pink; border-style: solid; border-color: black;');

const h1InDiv = document.createElement('h1');
h1InDiv.textContent = "I'm in a div";
pinkDiv.appendChild(h1InDiv);

const pInDiv = document.createElement('p');
pInDiv.textContent = "ME TOO!";
pinkDiv.appendChild(pInDiv);

container.appendChild(pinkDiv);


/* Handling events on elements

// Event method 2
const btn2 = document.querySelector(".btn2");
btn2.onclick = () => alert("Hello World 2");

// Event method 3
const btn3 = document.querySelector(".btn3");
btn3.addEventListener('click', () => alert("Hello World 3"));

//e parameter test
const btn4 = document.querySelector(".btn4");
btn4.addEventListener('click', (e) => e.target.style.padding = '50px');

*/

// Iterating over multiple elements and adding eventListeners

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => alert(button.classList));
});