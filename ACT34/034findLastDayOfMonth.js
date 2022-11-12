"use strict";

function getLastDayOfMonth (year,month) {
    /* Con new Date() nos devuelve la fecha del año mes y día que le enviemos.

    Para que nos devuelva el último día del mes anterior tenemos que poner día = 0 en new Date() y también sumar 1 al número de mes que 
    introduzcamos ya que al poner 0 en el día el método se fijará en el mes anterior.
    
    Si no pusiesemos +1 tras month, nos devolvería el último día de el mes de enero.

    Tras esto, nos dará una fecha completa YYYY/MM/DD a la que haremos .getDate() para devolver simplemente el día. (Último día del mes) */
    return new Date(year,month + 1,0).getDate();
}

alert(getLastDayOfMonth(2012,1)); // 29