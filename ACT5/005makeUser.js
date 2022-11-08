"use strict";

function makeUser() {
    return {
        name: 'John',
        ref: this // El valor de ref es undefined porque es llamado como función.
    };
}

let user = makeUser();

// alert(user.ref.name); // Da error

// Para que no de error y funcione tenemos que convertir ref en un método.

function makeUserCorrect() {
    return {
        name: 'John',
        ref() {
            return this;
        }
    };
}

let user2 = makeUserCorrect();

alert(user2.ref().name); // John