"use strict";

let grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];

// Filtra los grupos por género obtenido aquellos que son de Heavy Metal.



// Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.

console.log(grupos.find(name => name.nombre == "Cold Play"));

// ¿En qué posición del array se encuenta “Cold Play”?

alert('La posición que ocupa Cold Play es : ' + grupos.findIndex(grupos => grupos.nombre == 'Cold Play'));