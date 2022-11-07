"use strict";

let salaries = {
    Harry: 100,
    Ron: 160,
    Hermione: 130
};

let suma = 0;

for (let key in salaries) {
    suma = suma + salaries[key];
}

alert(suma); // 390

delete salaries(Harry, Ron, Hermione);

for (let key in salaries) {
    suma = suma + salaries[key];
}

alert(suma);
