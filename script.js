// DOM Events
/*
    Inline HTML attribute -> Menimpa
    Element method -> Menimpa
    addEventListerner(); -> Tidak Menimpa
*/

// <!-- Inline HTML [Paragraf 1] -->
const paragraf1 = document.querySelector('section#a p');

function ubahWarna() {
    paragraf1.style.backgroundColor = 'blue';
}

// <!-- Element Method [Paragraf 2] -->
const paragraf2 = document.getElementsByClassName('p2')[0];
paragraf2.onclick = ubahWarna;

// <!-- addEventListener() [Paragraf4] -->
const paragraf4 = document.querySelector('section#b p');
paragraf4.addEventListener('click', function () {
    const sectionB = document.querySelector('section#b ul');
    const li = document.createElement('li');
    const text = document.createTextNode('item baru');

    li.appendChild(text);
    sectionB.appendChild(li);
});