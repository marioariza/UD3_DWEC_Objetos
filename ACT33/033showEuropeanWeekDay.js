"use strict";

function getLocalDay(date) {

    /* Como en Europa se cuenta el lunes como primer día, si .getDay() nos devuelve 0 (domingo), nosotros devolveremos 7 
    ya que en Europa es el último día de la semana */
    if (date.getDay() == 0) { 
        return 7;
    } else {
        return date.getDay(); // Si .getDay() != 0 (no es domingo), devolvemos el día tal cual.
    }
}

let date = new Date(2012, 0, 3);  // 3 Enero 2012

// Lunes = 1, Martes = 2, Miércoles = 3, Jueves = 4, Viernes = 5, Sábado = 6, Domingo = 7
alert(getLocalDay(date)); // Martes, mostrará 2.