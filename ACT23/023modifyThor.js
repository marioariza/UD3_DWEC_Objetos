"use strict";

let thor = 'Thor es el hijo de Odín';

// Largo de la cadena

alert('El largo de la cadena es: ' + thor.length); // 23

// Encontrar la letra o

let posiciones_o = [];

for (let i = 0; i < thor.length; i++) {
    if (thor[i] === 'o' || thor[i] === 'O') {
        posiciones_o.push(i);
    }
}

alert('Las posiciones de o son: ' + posiciones_o)



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
let word_lenght = word.length;
let odin = thor.indexOf(word);
let odin_end = odin + word_lenght;

alert(thor.substr(odin,word_lenght));

// ¿Puedes encontrar la letra a? Demuéstralo



// Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)

let mitad_cadena = Math.round(thor.length / 2);

alert('Mitad minúscula / mitad mayúscula: ' + thor.substr(0,mitad_cadena).toLowerCase() + thor.slice(mitad_cadena).toUpperCase()); // Mitad minúscula: thor es el hIJO DE ODÍN