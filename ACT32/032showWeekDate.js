"use strict";

function getWeekDay (date) {
    /* Ponemos Sunday primero y no Monday debido a que Javascript cuenta como primer día de la semana el domingo  y esto afecta a .getDay(), 
    por lo tanto si ponemos que el primer día es el lunes como nosotros entendemos, la solución nos mostrará un día posterior al que debería. */
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    
    // Comprobamos con el método .getDay() en que posición de nuestro array de días se encuentra nuestra fecha.
    let dia_semana = date.getDay(); 
    return days[dia_semana]; // Devolvemos la posición de nuestro array en la que esta nuestra fecha.
}
  
let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getWeekDay(date)); // TU