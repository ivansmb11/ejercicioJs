
const inicializa = () => {
	console.log("Cargado");
}

let vida = 100;
let estadoJugador = 'Sano';
let estados = ['Sano', 'Quemado', 'Envenenado', 'Muerto'];
let items = ['Pocion', 'Cola de Fénix', 'Pocion Quemadura', 'Pocion Envenenamiento'];

const jugarTurno = () => {
	if (vida <= 0) {
		muerte();
	} else {
		const accion = Math.floor(Math.random() * 4) + 1;
		// const accion = 1;
		console.log(accion);
		switch (accion) {
			case 1:
				accionAtaque();
				break;
			case 2:
				accionQuemar();
				break;
			case 3:
				accionEnvenenar();
				break;
			case 4:
				console.log("El ataque enemigo ha fallado, que suerte.");
				break;
		}
	}
}

const accionAtaque = () => {
	vida -= 10;
	console.log("Has sido atacado por 10 puntos de vida!\n");
	muestraEstadoJugador();
}

const accionQuemar = () => {
	estadoJugador = estados[1];
	muestraEstadoJugador();
}

const accionEnvenenar = () => {
	estadoJugador = estados[2];
	muestraEstadoJugador();
}

const muerte = () => {
	estadoJugador = estados[3];
	console.log("Has muerto");
}

const muestraEstadoJugador = () => {
	switch (estadoJugador) {
		case estados[0]:
			console.log("ESTADO: Estas sano.\nTines " + vida + " puntos de vida.");
			break;
		case estados[1]:
			console.log("ESTADO: Estas quemado, usa un item!\nTines " + vida + " puntos de vida.");
			break;
		case estados[2]:
			console.log("ESTADO: Estas envenenado, usa un item!\nTines " + vida + " puntos de vida.");
			break;
		case estados[3]:
			muerte();
			break;
	}
}

const colaFenix = () => {
	console.log(vida);
	if (vida == 0) {
		vida = 30;
		estadoJugador = estados[0];
		console.log("Has usado una cola de fenix, haz vuelto a la vida!\n");
		muestraEstadoJugador();
	} else {
		console.log("No puedes usar una cola de fenix si estás vivo.\n");
	}
}

const usarItem = (tipo) => {
	switch (tipo) {
		case items[0]:
			vida += 50;
			console.log("Has usado una poción!\n");
			muestraEstadoJugador();
			break;
		case items[1]:
			colaFenix();
			muestraEstadoJugador();
			break;
		case items[2]:
			if (estadoJugador == estados[1]) {
				estadoJugador = estados[0];
				console.log("Has usado una pocion de quemadura.\n");
				muestraEstadoJugador();
			} else {
				console.log("No puedes usar una pocion de quemadura si no estas quemado.\n");
			}
			break;
		case items[3]:
			if (estadoJugador == estados[2]) {
				estadoJugador = estados[0];
				console.log("Has usado una pocion de envenenamiento.\n");
				muestraEstadoJugador();
			} else {
				console.log("No puedes usar una pocion de envenenamiento si no estas envenenado.\n");
			}
			break;
	}
}



// const ataqueEnemigo = ( potencia, nombreAtaque ) => {
// 	vida -= potencia;
// 	muestraVida("Ataque", potencia, nombreAtaque);
// }

// const bebePocion = ( pocion ) => {
// 	vida += pocion;
// 	muestraVida("Pocion", pocion, "");
// }

// const muestraVida = ( tipo, dañoVida, nombreAtaque ) => {
// 	if (tipo == "Pocion") {
// 		console.log("Has bebido una pocion de " + dañoVida + " puntos de vida");
// 	} else {
// 		console.log("Has recibido el ataque de " + nombreAtaque + " por " + dañoVida + " puntos de vida");
// 	}
// 	console.log ("Vida: " + vida);
// }

// const accionPrompt = () => {
// 	let valor1 = prompt("Introduce un número");
// 	let valor2 = prompt("Introduce otro número");

// 	let resultado = parseInt(valor1) + parseInt(valor2);

// 	console.log("El resultado es: " + resultado);
// }


