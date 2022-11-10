"use strict";

let thor = 'Thor es el hijo de Odín';

// Largo de la cadena

alert('El largo de la cadena es: ' + thor.length); // 23

// Encontrar la letra o

let posiciones_o = []; // Creamos un array para guardar las posiciones de o.

for (let key in thor) { // Recorremos la cadena thor.
    if (thor[key] === 'o' || thor[key] === 'O') { // Vamos comprobando en cada carácter si la letra es igual a o.
        posiciones_o.push(key); // Si es una o la almacenamos en el array.
    }
}

// Mostramos las posiciones en las que se encuentra o.

alert('Las posiciones de o son: ' + posiciones_o); // 2,14,19

// Encontrar el carácter que ocupa la posición 3

alert('El carácter que ocupa la posición 3 es: ' + thor.at(3)); // r

// ¿Qué carácter ocupa la posición 1?

alert('El carácter que ocupa la posición 1 es: ' + thor.at(1)); // h

// Trocea la cadena usando los espacios en blanco

alert(thor.split(" ")); // Thor,es,el,hijo,de,Odín

// Reemplaza Thor por Loki

alert(thor.replace('Thor', 'Loki')); // Loki es el hijo de Odín

// Recorta la cadena para que devuelva la palabra Odín

let word = 'Odín';
let word_lenght = word.length; // Comprobamos tamaño de la palabra que buscamos.
let odin = thor.indexOf(word); // Buscamos en que posición comienza la palabra que estamos buscando.
let odin_end = odin + word_lenght; 
/* A la posición en la que comienza, le sumamos el tamaño de la palabra que buscamos.

En este caso la palabra comienza en la posición 19, pues añadimos el tamaño de la palabra que es 4, es decir,
la palabra que buscamos terminará en la posición 23. */

// Cogemos el string que se encuentre entre las posiciones 19 y 23 ya calculadas.
// Esto lo hacemos para que en el caso de que añadamos una palabra detrás de Odín, nos siga devolviendo solo Odín.

alert(thor.substr(odin,word_lenght)); // Odín

// ¿Puedes encontrar la letra a? Demuéstralo

let posiciones_a = []; // Creamos un array para guardar las posiciones de o.

for (let key in thor) { // Recorremos la cadena thor.
    if (thor[key] === 'a' || thor[key] === 'A') { // Vamos comprobando en cada carácter si la letra es igual a a.
        posiciones_a.push(key); // Si es una a la almacenamos en el array.
    }
}

// Mostramos las posiciones en las que se encuentra a.

alert('Las posiciones de a son: ' + posiciones_a); // No mostrará nada debido a que no existe un carácter a en nuestra cadena.

// Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)

let mitad_cadena = Math.round(thor.length / 2);

alert('Mitad minúscula / mitad mayúscula: ' + thor.substr(0,mitad_cadena).toLowerCase() + thor.slice(mitad_cadena).toUpperCase()); // Mitad minúscula: thor es el hIJO DE ODÍN