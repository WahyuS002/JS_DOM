// DOM Manipulation
// element.innerHTML
// element.style.
// element.setAttribue(), getAttribute(), removeAttribute().
// element.classList : classList.add, classList.remove, classList.toggle, classList.item, classList.containts, classList.replace.



// <== setAttribute ==>  //

const h1 = document.getElementById('judul');

h1.setAttribute('href', 'google.com');

// <== classList ==>  //

const p2 = document.querySelector('.p2');
p2.classList.add('test');


// <== Tombol ==>  //
document.getElementById('tombol').onclick = function () {
    klikTombol();
}

function klikTombol() {
    document.querySelector('.p2').classList.toggle('biru-muda');
}