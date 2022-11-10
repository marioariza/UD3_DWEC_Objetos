"use strict";

function extractCurrencyValue (str) {
    return parseInt(str.substr(1,str.lenght)); // Cogemos la cadena a partir de la primera posición que es '$' y la convertimos a int.
}

alert(extractCurrencyValue('$120') === 120); // true