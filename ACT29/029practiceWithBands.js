"use strict";

let grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];

// Filtra los grupos por género obtenido aquellos que son de Heavy Metal.

for (let value of grupos) { // Pintamos el array y mostramos sus valores.
    if (value.genero == 'Heavy Metal') { // Comprobamos que el género sea Heavy Metal
        alert('Nombre: ' + value.nombre + ' - Género: ' + value.genero); // Si es así, mostramos los nombres de sus grupos.
    }
}

// Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
let coldplay = grupos.find(name => name.nombre == "Cold Play"); // Buscamos en 'grupos' los que tengan 'Cold Play' como nombre.
alert('Nombre: ' + coldplay.nombre + ' - Género: ' + coldplay.genero); // Mostramos el grupo con 'Cold Play' como nombre.

// ¿En qué posición del array se encuenta “Cold Play”?

alert('La posición que ocupa Cold Play es : ' + grupos.findIndex(grupos => grupos.nombre == 'Cold Play'));