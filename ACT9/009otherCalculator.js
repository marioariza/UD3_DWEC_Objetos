"use strict";

function Calculator() { 
    this.read = function () { // Función read, dentro pedimos dos valores numéricos.
        this.a = parseInt(prompt('Introduzca el primer valor númerico:'));
        
        while(isNaN(this.a)) { // Comprobamos que los dos valores introducidos sean numéricos.
            this.a = parseInt(prompt('ERROR, tiene que ser un valor numérico. Introduzca el primer valor númerico:'));
        }
        
        this.b = parseInt(prompt('Introduzca el segundo valor númerico:'));
        
        while(isNaN(this.b)) {
            this.b = parseInt(prompt('ERROR, tiene que ser un valor numérico. Introduzca el segundo valor númerico:'));
        }
    };

    this.sum = function () { // Función sum, dentro sumamos los valores de las dos propiedades.
        return 'La suma de los dos valores es = ' + (this.a + this.b);
    };

    this.mul = function () { // Función mul, dentro multiplicamos los valores de las dos propiedades.
        return 'La multiplicación de los dos valores es = ' + this.a * this.b;
    };
}

let calculator = new Calculator();

calculator.read(); // Pedimos los dos valores, por ejemplo introducimos los valores 7 y 5.
alert(calculator.sum()); // Sumamos los valores, cogiendo el ejemplo del comentario de this.read = function () este método devolvería 12.
alert(calculator.mul()); // Multiplicamos los valores, cogiendo el ejemplo del comentario de this.read = function () este método devolvería 35.