
const inicializa = () => {
	console.log("Cargado");
}

var configTeclado = { prevent_repeat: true };
var eventoTeclado = new window.keypress.Listener(this, configTeclado);
var miCanvas;

function inicializar() {
    miCanvas = document.getElementById('canvas');
    miCanvas.addEventListener('mousedown', clicRaton, false);
    miCanvas.addEventListener('mousemove', posicionRaton, false);
}

function posicionRaton(e) {
    console.log("Posición X: " + e.pageX + ", Posición Y: " + e.pageY);
}

function clicRaton(e) {
    console.log("Pulsado ratón");
}

function pulsaA() {
    console.log("Has pulsado A");
}

function pulsaAB() {
    console.log("Has pulsado a y b a la vez");
}

function ataqueEspecial() {
    console.log("Ataque Especial");
}

eventoTeclado.simple_combo('a', pulsaA);
eventoTeclado.simple_combo('a b', pulsaAB);
eventoTeclado.simple_combo('up down a b', ataqueEspecial);