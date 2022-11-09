"use strict";

let thor = 'Thor es el hijo de Odín';

// Largo de la cadena

alert('El largo de la cadena es: ' + thor.length);

// Encontrar la letra o

let where = thor.indexOf('o');

alert('La letra o esta en la posición: ' + where);

// Encontrar el carácter que ocupa la posición 3

alert('El carácter que ocupa la posición 3 es: ' + thor.at(3));

// ¿Qué carácter ocupa la posición 1?

alert('El carácter que ocupa la posición 1 es: ' + thor.at(1));

// Trocea la cadena usando los espacios en blanco

let separado = thor.split(" ");
let thor_new = '';

for (let i = 0; i < separado.length; i++) {
    if (i < 1) {
        thor_new = separado[i];
    } else {
        thor_new = thor_new + '-' + separado[i];
    }
}
alert(thor_new);

// Reemplaza Thor por Loki

alert(thor.replace('Thor', 'Loki'));

// Recorta la cadena para que devuelva la palabra Odín



// ¿Puedes encontrar la letra a? Demuéstralo



// Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)

let mitad_cadena = Math.round(thor.length / 2);

alert('Mitad minúscula / mitad mayúscula: ' + thor.substr(0,mitad_cadena).toLowerCase() + thor.slice(mitad_cadena + 1));