"use strict";

function makeUser(obj) {
    obj.name = 'John';
    obj.ref = this;
}

let user = {

} 

makeUser(user);

console.log(user.ref.name); // ¿Cuál es el resultado?