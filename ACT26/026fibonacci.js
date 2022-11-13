"use strict";

function fibonacci(lim){
	
	let resultado = [];
	lim = parseInt(lim);
	for (let i = 0; i < lim; i++) { // Recorremos 20 veces, ya que queremos obtener los primeros 20 números de fibonacci.
        if (i == 0) { // Si el número es 0, su fibonacci dará 0 como resultado.
			resultado.push(0); // Agregamos al array de resultado.
		} else if (i == 1) { // Si el número es 1, su fibonacci dará 1 como resultado.
			resultado.push(1); // Agregamos al array de resultado.
		} else { // A partir de 1, se sumarán los dos números anteriores, realizando así la operación de fibonacci.
			resultado.push(resultado[i-1] + resultado[i-2]); // Agregamos al array de resultado.
		}
	}
	return resultado;
}

alert(fibonacci(20));