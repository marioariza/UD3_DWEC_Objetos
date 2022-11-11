"use strict";

function camelize (str) {

    let dividir_cadena = str.split(''); // Dividimos la cadena carácter por carácter y lo guardamos en un array.
    let barra_baja = 0; // Hacemos un controlador para la barra baja.
    let resultado = []; // Creamos el array de la solución

    for (let i = 0; i < dividir_cadena.length; i++) { // Recorremos el array en el que tenemos el string dividido.
        if (dividir_cadena[i] == '_') { // Si el carácter en el que estamos es una _ cambiamos el controlador a 1.
            barra_baja = 1; // Cambiamos el controlador porque este carácter si era _
        } else if (dividir_cadena[i] != '_' && barra_baja == 1) { 
            // Si el carácter es diferente de _ pero el controlador es = 1, sabremos que estamos sobre el carácter que viene después de _
            resultado.push(dividir_cadena[i].toUpperCase()); // Entonces ponemos ese carácter en mayúscula y lo agregamos al array.
            barra_baja = 0; // Cambiamos el controlador porque este carácter no era _
        } else {
            resultado.push(dividir_cadena[i]); // Si el carácter no es _ y tampoco viene después de ella lo añadiremos al array tal y como esta.
        }  
    }
    return resultado.join(''); // Hacemos un join para unir todos los elementos del array y obtener la solución.
}

alert(camelize("background_color")); // 'backgroundColor'
alert(camelize("list_style_image")); // 'listStyleImage'
alert(camelize("_webkit_transition")); // 'WebkitTransition'