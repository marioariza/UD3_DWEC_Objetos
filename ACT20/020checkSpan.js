"use strict";

function checkSpam(str) {
    /* Convertimos el string toLowerCase ya que el método includes() es case sensitive, entonces por si 
    tenemos que obviar mayúsculas y minúsculas este método no nos sirve del todo. Al poner toda la frase igual si 
    podremos encontrarlo mediante includes() */
    if (str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')) { 
        // Si el string contiene estas palabras devolvemos true, si no las tiene devuelve false.
        return true;
    } else {
        return false;
    }
}

alert(checkSpam('compra ViAgRA ahora')); // true
alert(checkSpam('xxxxx gratis')); // true
alert(checkSpam("coneja inocente")); //false