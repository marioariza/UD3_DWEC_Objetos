"use strict";

alert(6.35.toFixed(1)); // 6.3
alert(1.35.toFixed(1)); // 1.4

/* Esto sucede porque, como explicamos en la ACT12, Javascript almacena float sin precisión.

Para ver esto más claro, pediremos que nos de 30 decimales en vez de 1: */

alert(6.35.toFixed(30)); // 6.349999999999999644728632119950
alert(1.35.toFixed(30)); // 1.350000000000000088817841970013

/* Cómo podemos ver el número pierde precisión y .toFixed() redondea en función de como avanzan los decimales.

Para arreglar esto debemos llevarlo más cerca de un número entero antes de realizar .toFixed(). */

alert((6.35 * 10).toFixed()/10); // 6.4
alert((1.35 * 10).toFixed()/10); // 1.4