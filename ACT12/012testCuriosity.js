"use strict";

alert(9999999999999999);

/* El número que se muestra es 10000000000000000, no se muestra 9999999999999999 debido a que 
Javascript no tiene integers, tiene float de 64 bits y se ha quedado sin precisión en el floating-point. 

Javascript lo explica así: Los literales numéricos con valores absolutos iguales a 2^53 o superiores son 
demasiado grandes para representarlos de forma precisa como enteros.*/

// Si queremos que salga correctamente, añadimos una n al final de nuestro número

alert(9999999999999999n);