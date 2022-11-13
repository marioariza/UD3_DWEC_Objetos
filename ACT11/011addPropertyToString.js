"use strict";

// let str = "Peter";
// str.test = 5;
// alert(str.test);

/* No funcionará y no muestra nada debido a que str, al no ser un objeto, str.test no se ha guardado como un elemento de str y no muestra nada.

Para que muestre str.test tendremos que convertir str a objeto y despues añadir str.test = 5: */

let str = {
    name: 'Peter',
};

str.test = 5;
alert(str.test); // 5