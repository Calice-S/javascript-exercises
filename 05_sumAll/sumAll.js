const sumAll = function(min, max) {
let sum = 0;
let num = 0; 

if(typeof(min) !== "number" || typeof(max) !== "number") {
    return "ERROR";
}

if(min < max) {
    num = max;
} else {
    num = min;
}

if(min > 0 && max > 0){
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
} else {
    return "ERROR";
}



return sum;

};

// Do not edit below this line
module.exports = sumAll;
