"use strict";

function readNumber() {
    
    let number = prompt('Ingrese un valor numérico:');
    
    while(isNaN(number)) { // Comprobamos que el valor sea number, si no lo es pediremos de nuevo que ingrese el valor.
        number = prompt('ERROR. Ingrese un valor numérico:'); 
    }

    if (number == "" || number == null) { // Si envía una línea vacía o cancela la ejecución mostrará null.
        return null;
    }

    return 'El número introducido es: ' + number;
}

alert(readNumber()); 
/* Si introducimos 4, mostrará 'El número introducido es: 4'. 
Si introducimos 'usb', mostrará null. */