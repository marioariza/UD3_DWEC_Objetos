"use strict";

function Accumulator(startingValue) {

    this.value = startingValue; // Guarda el starting value guardado en el objeto.

    this.read = function () {
        let num = parseInt(prompt('Número a añadir en el starting value:')); // Pide un número para sumar al starting value.
        
        while(isNaN(num)) { // Comprobamos que el valor introducido sea numérico.
            num = parseInt(prompt('ERROR, tiene que ser un valor numérico. Número a añadir en el starting value:'));
        }

        this.value = this.value + num; // Sumamos el valor al starting value.
    };
}

let accumulator = new Accumulator(1); // Valor inicial 1
accumulator.read(); // Agrega el valor introducido por el usuario
accumulator.read(); // Agrega el valor introducido por el usuario
alert('El starting value actual es: ' + accumulator.value); // Muestra la suma de estos valores

// Por ejemplo si en el primer accumulator.read() ingresamos 34 y en el segundo ingresamos 45 nuestro value pasará a ser 80.