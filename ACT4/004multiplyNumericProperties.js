"use strict";

function multiplyNumeric(menu) {
    for (let key in menu) { // Accedemos a las propiedades del menú.
        if (typeof menu[key] === "number") { // Comprobamos que la propiedad sea number con typeof, y si es así, multiplicar el valor por 2.
            menu[key] = menu[key] * 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

multiplyNumeric(menu);

// Tras llamar a la función mostramos las propiedades del menú ya cambiadas.

alert(menu.width); // 400
alert(menu.height); // 600
alert(menu.title); // Mi menú