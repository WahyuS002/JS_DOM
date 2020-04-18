function getPilihanKomputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp > 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (comp == player) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH';
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH';
    if (player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH';
}

function putar() {
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    const waktuMulai = new Date().getTime();

    let i = 0;

    setInterval(function () {

        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }

        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) {
            i = 0;
        }
    }, 100);
}

const list = document.querySelectorAll('li img');
list.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanPlayer = pil.className;
        const pilihanKomputer = getPilihanKomputer();
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

        putar();

        setTimeout(function () {
            const imgKomputer = document.querySelector('.img-komputer');
            imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000)

    });
});