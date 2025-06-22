
const items = document.querySelectorAll('#tarjetas li');
const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.getElementById('siguiente');
let current = 0;
let intervalo;

function mostrar(index) {
    items[current].classList.remove('active');
    current = (index + items.length) % items.length;
    items[current].classList.add('active');
}

function siguiente() {
    mostrar(current + 1);
    reiniciarIntervalo();
}

function anterior() {
    mostrar(current - 1);
    reiniciarIntervalo();
}

function reiniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(() => mostrar(current + 1), 3000);
}

items[current].classList.add('active');

intervalo = setInterval(() => mostrar(current + 1), 3000);

btnSiguiente.addEventListener('click', siguiente);
btnAnterior.addEventListener('click', anterior);
