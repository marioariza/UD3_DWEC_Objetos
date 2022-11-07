"use strict";

let salaries = {
    Harry: 100,
    Ron: 160,
    Hermione: 130
};

let suma = 0; // Creamos variable suma.

for (let key in salaries) { // Accedemos a las propiedades de salaries y vamos sumando sus valores a la variable suma.
    suma = suma + salaries[key];
}

alert(suma); // 390

// Vaciamos salaries para comprobar que la suma sería 0.

delete salaries.Harry;
delete salaries.Ron;
delete salaries.Hermione;

let suma_2 = 0;

for (let key in salaries) { // Volvemos a sumar las propiedades una vez vaciamos el objeto.
    suma_2 = suma_2 + salaries[key];
}

alert(suma_2); // 0
