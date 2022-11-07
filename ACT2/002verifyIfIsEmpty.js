"use strict";

function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    }
    return false;
}

let schedule = {

};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "Hora de levantarse";

alert(isEmpty(schedule)); // false