"use strict";

// Creamos la function isEmpty(obj).

/* El método Object.keys() devuelve un array con las propiedades que tenemos dentro del objeto.
En este caso buscamos el .length de ese array para saber el número de propiedades que tenemos en el objeto. */

function isEmpty(obj) {
    if (Object.keys(obj).length === 0) { // Si .length === 0 significara que no encontramos nada dentro del objeto y devolvera true.
        return true;
    } // Si .length !=== 0 significara que si encontramos propiedades dentro del objeto y devolvera false.
    return false;
}

let schedule = {

};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "Hora de levantarse"; // Introducimos un valor a nuestro objeto.

alert(isEmpty(schedule)); // false