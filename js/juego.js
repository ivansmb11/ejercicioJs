
const inicializa = () => {
	console.log("Cargado");
}

let vida = 100;

const ataqueEnemigo = ( potencia, nombreAtaque ) => {
	vida -= potencia;
	muestraVida("Ataque", potencia, nombreAtaque);
}

const bebePocion = ( pocion ) => {
	vida += pocion;
	muestraVida("Pocion", pocion, "");
}

const muestraVida = ( tipo, dañoVida, nombreAtaque ) => {
	if (tipo == "Pocion") {
		console.log("Has bebido una pocion de " + dañoVida + " puntos de vida");
	} else {
		console.log("Has recibido el ataque de " + nombreAtaque + " por " + dañoVida + " puntos de vida");
	}
	console.log ("Vida: " + vida);
}

const accionPrompt = () => {
	let valor1 = prompt("Introduce un número");
	let valor2 = prompt("Introduce otro número");

	let resultado = parseInt(valor1) + parseInt(valor2);

	console.log("El resultado es: " + resultado);
}

