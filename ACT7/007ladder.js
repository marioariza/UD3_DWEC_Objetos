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
        console.log(this.step);
    }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0