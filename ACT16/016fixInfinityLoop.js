"use strict";

let i = 0;

while (i != 10) {
    i += 0.2;
    alert(i);
}

/* El bucle nunca termina debido a que se almacena en la memoria en su forma binaria y se realiza un cálculo impreciso.
Nunca se llegará a 10 de forma redondeada ya que se van sumando decimales entonces el bucle no terminará */

let j = 0;

while (j.toFixed(2) != 10) {
    j += 0.2;
    alert(j);
}

// En este caso el bucle si termina ya redondeamos el valor con .toFixed() y resolvemos el problema.