"use strict";

// Crear un objeto user vacío.

let user = {

};

// Probamos a mostrar nombre y apellido con user vacío.

alert('Con user vacío: Nombre = ' + user.name); // undefined
alert('Con user vacío: Apellidos = ' + user.surname); // undefined

// Agrega la propiedad name con el valor John Snow.

user.name = "John Snow";

// Agrega la propiedad surname con el valor Sam Sagaz.

user.surname = "Sam Sagaz";

// Probamos a mostrar nombre y apellido tras realizar la primera asignación de valores.

alert('Tras primera asignación de valores: Nombre = ' + user.name); // John Snow
alert('Tras primera asignación de valores: Apellidos = ' + user.surname); // Sam Sagaz

// Cambia el valor de name a Peter Pan.

user.name = "Peter Pan";

// Probamos a mostrar nombre y apellido tras cambiar el valor de name.

alert('Tras cambiar el valor de name: Nombre = ' + user.name); // Peter Pan
alert('Tras cambiar el valor de name: Apellidos = ' + user.surname); // Sam Sagaz

// Quita la propiedad name del objeto.

delete user.name;

// Probamos a mostrar nombre y apellido tras quitar la propiedad name del objeto.

alert('Tras eliminar el valor de name del objeto: Nombre = ' + user.name); // undefined
alert('Tras eliminar el valor de name del objeto: Apellidos = ' + user.surname); // Sam Sagaz