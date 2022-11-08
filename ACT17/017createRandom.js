"use strict";

alert(Math.random(1,5));
alert(Math.random(3,7));
alert(Math.random(0,10));

function random(min,max) {
    return Math.random()*(max-min)+parseInt(min);
}

alert(random(1,5));
alert(random(3,7));
alert(random(30,100));