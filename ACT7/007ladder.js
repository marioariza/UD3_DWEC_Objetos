"use strict";

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() { // muestra el peldaño actual
        alert(this.step);
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// Para que funcione en una sola línea hacemos un return de this (el objeto) cada vez que llamemos en la línea de código.

let ladder_correcion = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // muestra el peldaño actual
        alert(this.step);
        return this;
    }
};

ladder_correcion.up().up().down().showStep().down().showStep(); // shows 1 then 0