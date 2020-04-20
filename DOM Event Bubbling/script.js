// DOM Traversal -> Menelusuri DOM

// Contoh dengan !DOM Traversal
// const x = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// for (let i = 0; i < x.length; i++) {
//     x[i].addEventListener('click', function () {
//         card[i].style.display = 'none';
//     })
// }

// Contoh dengan DOM Traversal [forEach]
// Event Bubbling
// const x = document.querySelectorAll('.close');

// x.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     })
// });

// const card = document.querySelector('.card');

// card.addEventListener('click', function () {
//     alert('oke');
// });

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    // console.log(e.target.className);
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
    }
});