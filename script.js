// DOM Manipulation #2
/*
    document.createElement();
    document.createTextNode();
    node.appendChild();
    node.insertBefore(a, b);
    parentNode.remove();
    parentNode.replace(a, b);
*/

// <!-- appendChild -->
const pBaru = document.createElement('p');
const pText = document.createTextNode('Paragraf Baru');

pBaru.appendChild(pText);

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// <!-- insertBefore -->
const itemBaru = document.createElement('li');
const itemText = document.createTextNode('item Baru');

itemBaru.appendChild(itemText);

const ul = document.querySelector('section#b ul');
const item2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(itemBaru, item2);

// <!-- parentNode.removeChild(a) -->
const a = document.getElementsByTagName('a')[0];

sectionA.removeChild(a);

// <!-- parentNode.replaceChild(a, b) -->
const h2 = document.createElement('h2');
const h2Text = document.createTextNode('Ini diganti h2');

h2.appendChild(h2Text);

const sectionB = document.getElementById('b');

const paragraf4 = sectionB.querySelector('p');

sectionB.replaceChild(h2, paragraf4);

// Pewarnaan
pBaru.style.backgroundColor = 'yellow';
itemBaru.style.backgroundColor = 'yellow';
h2.style.backgroundColor = 'yellow';