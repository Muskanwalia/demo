import React from "react";

function add(a,b){
    let sum = a + b;
    return sum;
}

function sub(a,b){
    let sub = a - b;
    return sub;
}

function multi(a,b){
    let multi = a * b;
    return multi;
}

function divison(a,b){
    let divison = a / b;
    divison = divison.toFixed(2);
    return divison;
}

export {add,sub,multi,divison};
