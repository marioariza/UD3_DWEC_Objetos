"use strict";

function makeUser() {
    return {
        name: 'John',
        ref: this
    };
}

let user = makeUser();

console.log(user.ref.name); // ¿Cuál es el resultado?