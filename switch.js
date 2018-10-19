var signo = prompt('¿Cuál es tu signo?')

switch (signo) {
	case 'acuario':
		console.log("Entienda que debe conservar la calma y la objetividad a la hora de decidir. Procure dejar a un costado los compromisos afectivos y sea práctico.")
		break
	case 'escorpio':
		console.log("Sepa que vivirá una jornada bastante inestable en el seno familiar con algún miembro cercano. Habrán muchos desacuerdos y no llegarán a entenderse.")
		break
	default: 
		console.log('No es un signo')
		break
}

//console.log(signo)