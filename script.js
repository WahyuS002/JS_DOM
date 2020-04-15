// DOM SELECTION #2
// querySelector(); -> sama kyk css selector ex .wahyu (class wahyu).
//  querySelectorAll(); -> sama kyk getElementsByTagName

const item2 = document.querySelector('#b ul li:nth-child(2)');
item2.style.backgroundColor = 'orange';

const allItem = document.querySelectorAll('#b ul li');

for (let i = 0; i < allItem.length; i++) {
    allItem[i].style.backgroundColor = 'blue';
}