"use strict";

let fruits = ["Banana", "Manzana", "Fresa"];

//Añadimos cereza al principio.

fruits.unshift('Cereza');
alert(fruits); // Cereza,Banana,Manzana,Fresa

//Añadimos melocotón al final.

fruits.push('Melocotón'); 
alert(fruits); // Cereza,Banana,Manzana,Fresa,Melocotón

//Mostrar el array elemento a elemento con for clásico.

for (let i = 0; i< fruits.length; i++) { // Recorremos el array y mostramos cada elemento en un alert.
    alert(fruits[i]); // Cereza Banana Manzana Fresa Melocotón
}

//Eliminamos el primer elemento.

fruits.shift();
alert(fruits); // Banana,Manzana,Fresa,Melocotón

//Eliminamos el último elemento.

fruits.pop();
alert(fruits); // Banana,Manzana,Fresa

//Mostrar cada elemento con for of o for in, lo que considere más adecuado.

for (let value of fruits) { // Recorremos el array y mostramos cada elemento en un alert.
    alert(value); // Banana Manzana Fresa
}