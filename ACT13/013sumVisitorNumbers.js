"use strict";

let a = parseInt(prompt('Introduzca el primer valor númerico:'));
        
while(isNaN(a)) { // Comprobamos que los dos valores introducidos sean numéricos.
    a = parseInt(prompt('ERROR, tiene que ser un valor numérico. Introduzca el primer valor númerico:'));
}
        
let b = parseInt(prompt('Introduzca el segundo valor númerico:'));
        
while(isNaN(b)) {
    b = parseInt(prompt('ERROR, tiene que ser un valor numérico. Introduzca el segundo valor númerico:'));
}

alert('La suma de los dos valores da como resultado: ' + (a+b)); // Si introducimos por ejemplo 6 y 3 en los valores pedidos arriba, la solución será 9.