"use strict";

let acdc= { name: "ACDC", age: 25 };
let metallica = { name: "Metallica", age: 30 };
let guns= { name: "Guns and Roses", age: 28 };
let bands = [acdc, metallica, guns];
let names = []; // Creamos un array para los nombres
for(let value of bands) { // Recorremos el array de el nombre de las bandas
    // Encontramos el nombre de cada banda y lo añadimos a nuestro array names.
    names.push(value.name) // ACDC,Metallica,Guns and Roses
}

alert(names); 