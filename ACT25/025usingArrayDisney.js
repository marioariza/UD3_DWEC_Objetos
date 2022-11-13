"use strict";

let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];

//Meter a Peter Pan al final del array disney.

disney.push({nombre:'Peter Pan', pelicula: 'Peter Pan'}); // Con push metemos a Peter Pan al final del array.

//Pintar el array.

for (let value of disney) { // Pintamos el array y mostramos sus valores.
    alert('Pintamos el array = Nombre: ' + value.nombre + ' - Pelicula: ' + value.pelicula);
}

//Meter a El capitán Garfio al principio del array, no olvides la película.

disney.unshift({nombre:'El capitán Garfio', pelicula: 'Peter Pan'}); // Con unshift metemos el valor al principio del array.

for (let value of disney) { // Pintamos el array y mostramos sus valores.
    alert('Tras meter El capitán Garfio = Nombre: ' + value.nombre + ' - Pelicula: ' + value.pelicula);
}

//Meter al cocodrilo detrás del capitán, no olvides la película.

// Vemos en que posición se encuentra la película del capitán garfio.
let where_capitan = disney.findIndex(disney => disney.nombre == 'El capitán Garfio'); 

// Con .splice metemos el cocodrilo en la posición siguiente a la del capitán garfio, es decir, where_garfio + 1.
disney.splice(where_capitan + 1, 0, {nombre: 'Cocodrilo Tic Tac', pelicula: 'Peter Pan'}); 

for (let value of disney) { // Pintamos el array y mostramos sus valores.
    alert('Tras meter al cocodrilo detrás del capitán = Nombre: ' + value.nombre + ' - Pelicula: ' + value.pelicula);
}

//Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.

for (let value of disney) { // Pintamos el array y mostramos sus valores.
    if (value.pelicula == 'Peter Pan') { // Comprobamos que la pelicula es Peter Pan
        alert('Personaje de la película Peter Pan: ' + value.nombre); // Si es así, mostramos los nombres de sus personajes.
    }
}

//Encontrar el índice de Campanilla.

alert('El índice de Campanilla es : ' + disney.findIndex(disney => disney.nombre == 'Campanilla')); // El índice de Campanilla es : 5

//Buscar al cocodrilo.

alert('El índice del Cocodrilo Tic Tac es : ' + disney.findIndex(disney => disney.nombre == 'Cocodrilo Tic Tac')); // El índice del Cocodrilo Tic Tac es : 1

//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

alert(shuffle(disney));