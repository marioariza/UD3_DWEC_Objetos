"use strict";

function ucFirst(str) {
    /* str[0].toUpperCase() convierte la primera letra en mayúscula y str.slice(1) cojo desde 
    el segundo carácter (1) hasta el termino de la cadena. */
    return str[0].toUpperCase() + str.slice(1);
}

let str = prompt('Introduzca una cadena de texto:');

alert(ucFirst(str)); // Si introducimos 'john' debe devolver John.