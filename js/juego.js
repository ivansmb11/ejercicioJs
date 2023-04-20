
const inicializa = () => {
	console.log("Cargado");
}

let configTeclado = { prevent_repeat : true };
let eventoTeclado = new window.keypress.Listener(this,configTeclado);

let miCanvas = document.getElementById('canvas');
miCanvas.addEventListener('mousedown', clicRaton, true);
miCanvas.addEventListener('mousemove', posicionRaton, true);

const posicionRaton = (e) => {
	console.log("X: " + e.pageX + " \nY: " + e.pageY);
}

const clicRaton = (e) => {
	console.log("Has pulsado el ratón.");
}

eventoTeclado.simple_combo('a', () => {
	console.log("Has pulsado la tecla A");
});

eventoTeclado.simple_combo('b', () => {
	console.log("Has pulsado la tecla B");
});


