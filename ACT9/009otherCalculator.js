"use strict";

"use strict";

let calculator = { 
    read() { // Método read, dentro pedimos dos valores numéricos.
        calculator.a = parseInt(prompt('Introduzca el primer valor númerico:'));
        
        while(isNaN(calculator.a)) { // Comprobamos que los dos valores introducidos sean numéricos.
            calculator.a = parseInt(prompt('ERROR, tiene que ser un valor numérico. Introduzca el primer valor númerico:'));
        }
        
        calculator.b = parseInt(prompt('Introduzca el segundo valor númerico:'));
        
        while(isNaN(calculator.b)) {
            calculator.b = parseInt(prompt('ERROR, tiene que ser un valor numérico. Introduzca el segundo valor númerico:'));
        }
    },

    sum() { // Método sum, dentro sumamos los valores de las dos propiedades.
        return 'La suma de los dos valores es = ' + (calculator.a + calculator.b);
    },

    mul() { // Método mul, dentro multiplicamos los valores de las dos propiedades.
        return 'La multiplicación de los dos valores es = ' + calculator.a * calculator.b;
    }
};

calculator.read(); // Pedimos los dos valores, por ejemplo introducimos los valores 7 y 5.
alert(calculator.sum()); // Sumamos los valores, cogiendo el ejemplo del comentario de calculator.read() este método devolvería 12.
alert(calculator.mul()); // Multiplicamos los valores, cogiendo el ejemplo del comentario de calculator.read() este método devolvería 35.