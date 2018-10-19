var danilo = {
	nombre: 'Danilo',
	viacava: 'Vizarreta',
	edad: 24,
	ingeniero: true,
	cocinero: false,
	dj: false,
	guitarrista: true,
	drone: true
}

var juan = {
	nombre: 'juan',
	edad: 10
}

function imprimirProfesiones(persona) {
	console.log(`${persona.nombre} es:`)
	
	if(persona.drone === true) {
		console.log('Vuela drone')
	}
	if(persona.ingeniero === true) {
		console.log('Ingeniero')
	}
	if(persona.dj === true) {
		console.log('dj')
	}
	if(persona.guitarrista === true) {
		console.log('guitarrista')
	}
}

imprimirProfesiones(danilo)

//CONST: no se deberia poder modificar y es un numero fijo
const MAYOR_DE_EDAD = 18

/*function esMayorDeEdad(persona) {
	return persona.edad >= MAYOR_DE_EDAD
}*/

//Funcion anónima pero esta asignada a una variable que si tiene un nombre
/*const esMayorDeEdad = function (persona) {
	return persona.edad >= MAYOR_DE_EDAD
}*/

//const esMayorDeEdad = persona => persona.edad >= MAYOR_DE_EDAD
const esMayorDeEdad = ({ edad }) => edad >= MAYOR_DE_EDAD

const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({edad})

//FUNCIONES QUE RETORNAN VALORES
function imprimirSiEsMayorDeEdad(persona) {
	//Danilo es mayor de edad
	if(esMayorDeEdad(persona)) {
		console.log(`${persona.nombre} es mayor de edad`)
	} else {
		console.log(`${persona.nombre} es menor de edad`)
	}
	//Danilo es menor de edad
}

//imprimirSiEsMayorDeEdad(danilo)


function permitirAcceso(persona) {
	if(esMenorDeEdad(persona)) {
		console.log('ACCESO DENEGADO')
	} else {
		console.log('ACCESO CORRECTO')
	}
}










