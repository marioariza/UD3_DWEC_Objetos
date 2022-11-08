"use strict";

function readNumber() {
    
    let comprobar = true;
    while(comprobar == true) {

        let number = prompt('Ingrese un valor numérico:');

        if (number == "" || number == null) {
            break;
        }

        let newNumber = parseInt(number);

        if(isNaN(newNumber)) {
            newNumber = parseInt(prompt('ERROR. Ingrese un valor numérico:'));
        } else {
            comprobar = false;
        }
    }

    alert(number);
}

readNumber();