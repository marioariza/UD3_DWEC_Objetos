"use strict";

function getSecondsToAfterTomorrow () {
    let actual_hour = new Date(); // Obtenemos la fecha actual.
    let hours_to_tomorrow = 24 - actual_hour.getHours(); // Vemos cuantas horas quedan para el día de mañana.
    let minutes_to_tomorrow = 60 - actual_hour.getMinutes(); // Vemos cuantos minutos quedan para el día de mañana
    let tomorrow = 86400; // Segundos que tenemos en un día completo.

    /* De la fecha actual, cogemos las horas y minutos del día actual y los mostramos.

    En este if simplemente comprobamos la hora y minutos para que si alguna de estas es 
    menor a 10 mostrarla con un 0 delante y quede más estético. */

    if (actual_hour.getHours() < 10 && actual_hour.getMinutes() < 10) {
        alert('Hora actual: 0' + actual_hour.getHours() + ':0' + actual_hour.getMinutes()); 
    } else if (actual_hour.getHours() < 10 && actual_hour.getMinutes() > 10) {
        alert('Hora actual: 0' + actual_hour.getHours() + ':' + actual_hour.getMinutes()); 
    } else if (actual_hour.getHours() > 10 && actual_hour.getMinutes() < 10) {
        alert('Hora actual: ' + actual_hour.getHours() + ':0' + actual_hour.getMinutes()); 
    } else {
        alert('Hora actual: ' + actual_hour.getHours() + ':' + actual_hour.getMinutes()); 
    }

    let result = 0;
    let today_to_tomorrow = 0;
    if (hours_to_tomorrow === 24 && minutes_to_tomorrow === 60) {
        result = 86400 * 2; // Si las horas y minutos que quedan para mañana son 24 y 60, pondremos que quedan 86400 segundos * 2 (dos días completos).
        alert('Quedan ' + result + ' segundos para después de mañana.');
    } else if (hours_to_tomorrow === 24 && minutes_to_tomorrow !== 60) {
        /* Si las horas que quedan dan 24 pero los minutos no dan 60, pondremos que quedan 23 horas y x minutos 
        que no sabemos (por ejemplo 00:25, quedarán 23 horas y 35 minutos). */
        hours_to_tomorrow = 23; 
        /* Las horas las multiplicamos por 60 para obtener los segundos y le sumamos los minutos * 60 para
        obtener los segundos que quedan para mañana. */
        today_to_tomorrow = (hours_to_tomorrow * 3600) + (minutes_to_tomorrow * 60); 
        result = tomorrow + today_to_tomorrow; // Sumamos los segundos de mañana con los que quedan de hoy.
        alert('Quedan ' + result + ' segundos para después de mañana.');
    } else if (hours_to_tomorrow === 1 && minutes_to_tomorrow !== 60){
        /* Si las horas que quedan dan 1 pero los minutos no dan 60, pondremos que quedan 0 horas y x minutos 
        que no sabemos (por ejemplo 23:25, quedarán 0 horas y 35 minutos). */
        hours_to_tomorrow = 0;
        /* Las horas las multiplicamos por 60 para obtener los segundos y le sumamos los minutos * 60 para
        obtener los segundos que quedan para mañana. */
        today_to_tomorrow = (hours_to_tomorrow * 3600) + (minutes_to_tomorrow * 60); 
        result = tomorrow + today_to_tomorrow; // Sumamos los segundos de mañana con los que quedan de hoy.
        alert('Quedan ' + result + ' segundos para después de mañana.');
    }
}

getSecondsToAfterTomorrow();