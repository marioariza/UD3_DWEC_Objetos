"use strict";

function truncate(str, maxlength) {
    if (str.length > maxlength) { // Si la cadena es mayor al tamaño máximo se añadirá ... al final de la cadena.
        return str.substr(0, maxlength) + '...';
    }
    return str.substr(0, maxlength);
}

let str = prompt('Introduzca una cadena de texto:');

alert(truncate(str,20)); // Si introducimos 'Hola Olga que tal' devolverá 'Hola Olga que tal'.
alert(truncate(str,10)); // Si introducimos 'Hola Olga que tal' devolverá 'Hola Olga ...'.
alert(truncate(str,3)); // Si introducimos 'Hola Olga que tal' devolverá 'Hol...'.