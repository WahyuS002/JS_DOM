// DOM Selection
// getElementById(); -> element
const judul = document.getElementById("judul");
judul.style.color = 'red';
judul.style.backgroundColor = 'yellow';

// getElementsByTagName(); -> HTML Collection -> Mengembalikan dalam bentuk objek
const paragraf = document.getElementsByTagName('p');
// paragraf[0].style.color = 'red';
for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.backgroundColor = 'blue';
}

// getElementByClassName(); -> HTML Collection -> Mengembalikan dalam bentuk objek

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini sudah dirubah dengan DOM';