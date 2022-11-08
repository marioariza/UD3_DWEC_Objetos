"use strict";

alert(Math.random(1,5)); // Por ejemplo: 0.733027332570384
alert(Math.random(3,7)); // Por ejemplo: 0.464826008702252
alert(Math.random(0,10)); // Por ejemplo: 0.11312196481698789

function random(min,max) {
    /* Devolvemos un método Math.random(), se resta el número mínimo al número máximo y 
    después le sumamos el número mínimo para que el número random este dentro de los intervalos dados. */
    return Math.random()*(max-min)+parseInt(min);
}

alert(random(1,5)); // Por ejemplo: 4.309286940378784
alert(random(3,7)); // Por ejemplo: 3.9041681119947658
alert(random(30,100)); // Por ejemplo: 99.22181205060382