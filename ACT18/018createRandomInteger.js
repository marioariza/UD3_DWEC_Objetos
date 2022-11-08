"use strict";

alert(Math.random(1,5)); // Por ejemplo: 0.733027332570384
alert(Math.random(3,7)); // Por ejemplo: 0.464826008702252
alert(Math.random(0,10)); // Por ejemplo: 0.11312196481698789

function random(min,max) {
    /* Al igual que el ejercicio anterior, devolvemos un método Math.random(). Se resta el número mínimo al número máximo y 
    después le sumamos el número mínimo para que el número random este dentro de los intervalos dados, pero antes le añadimos el
    método Math.round() para que devuelva un número entero.*/
    return Math.round(Math.random()*(max-min)+parseInt(min));
}

alert(random(1,5)); // Por ejemplo: 4
alert(random(3,7)); // Por ejemplo: 5
alert(random(30,100)); // Por ejemplo: 40