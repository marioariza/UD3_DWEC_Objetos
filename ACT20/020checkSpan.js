"use strict";

function checkSpam(str) {
    if (str.toLowerCase().includes('viagra')) {
        return true;
    } else if (str.toUpperCase().includes('XXX')) {
        return true;
    } else {
        return false;
    }
}

alert(checkSpam('compra ViAgRA ahora')); // true
alert(checkSpam('xxxxx gratis')); // true
alert(checkSpam("coneja inocente")); //false