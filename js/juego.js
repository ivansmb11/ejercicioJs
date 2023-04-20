
const inicializa = () => {
	console.log("Cargado");
}

const articulos = ['Pocion', 'Magia', 'Espada', 'Arco', 'Flecha'];

const comprar = ( articulo ) => {
	switch ( articulo ) {
		case articulos[0]:
			console.log("Has comprado una pocion");
			break;
		case articulos[1]:
			console.log("Has comprado una magia");
			break;
		case articulos[2]:
			console.log("Has comprado una espada");
			break;
		case articulos[3]:
			console.log("Has comprado un arco");
			break;
		case articulos[4]:
			console.log("Has comprado una flecha");
			break;
		default:
			console.log("No has comprado nada");
	}
}

const crearEnemigos = ( noEnemigos ) => {
	let enemigos = 0;
	for ( let i = 0; i < noEnemigos; i++ ) {
		enemigos++;
	}
	console.log( 'Haz creado ' + enemigos + ' enemigos.' );
}

const ciclo = () => {
	const numeroCPU = Math.floor(Math.random() * 10) + 1;
	console.log(numeroCPU);
	do {
		const valor1 = parseInt(prompt("Introduce un número"));

		if ( numeroCPU == valor1 ) {
			console.log("Has ganado");
		} else {
			console.log("Has perdido");
		}
	} while ( numeroCPU != valor1 );
}
