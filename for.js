var danilo = {
	nombre: 'danilo',
	edad: 24,
	peso: 60
}

console.log(`Al inicio del año ${danilo.nombre} pesa ${danilo.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO 

/*for (var i = 1; i <= DIAS_DEL_ANO; i++) {
	var random = Math.random()
	
	if(random < 0.25) {
		aumentarDePeso(danilo)
		console.log( i + ' dia, aumento ' + random.toFixed(1))
	} else if (random < 0.5) {
		adelgazar(danilo)
		console.log( i + ' dia, bajo ' + random.toFixed(1))
	}
}*/

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = danilo.peso - 3
var dias = 0

while (danilo.peso > META) {
	if (comeMucho()) {
		aumentarDePeso(danilo)
		console.log('aumento ' + aumentarDePeso(danilo))
	}
	if (realizaDeporte()) {
		adelgazar(danilo)
		console.log('adelgazo ' + adelgazar(danilo))
	}
	dias += 1
	console.log(dias)
}

console.log(`Pasaron ${dias} días hasta que ${danilo.nombre} adelgazó 3 KG`)

console.log(`Al final del año ${danilo.nombre} pesa ${danilo.peso.toFixed(1)} kg`)


















