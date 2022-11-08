"use strict";

function checkSpam(str) {
    if (str.includes('viagra')) {
        return true;
    } else if (str.includes('xxx')) {
        return true;
    } else {
        return false;
    }
}

alert(checkSpam('compra ViAgRA ahora')); // true
alert(checkSpam('xxxxx gratis')); // true
alert(checkSpam("coneja inocente")); //false