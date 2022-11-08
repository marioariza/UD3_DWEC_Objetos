"use strict";

function A() { 
    
}

function B() {

}

let a = new A();
let b = new B();

alert(a == b); // false, no se cumple que new A() == new B().

/* Dos objetos son iguales solamente si ellos son el mismo objeto.
Aunque se vean vacíos e iguales, dos objetos independientes no son iguales.

Por lo tanto la forma de que los dos objetos sean iguales es esta: */

let a_iguales = new A();
let b_iguales = a_iguales;

alert(a_iguales == b_iguales); // true, ya que las dos variables hacen referencia al mismo objeto.