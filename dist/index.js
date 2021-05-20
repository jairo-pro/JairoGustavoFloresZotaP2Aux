"use strict";
var names = "Jairo Flores";
var age = 21;
var birth = "3000";
function greet(a, b, c, d) {
    //console.log("Hi "+a+", Your age is "+b);
    let res = String("Hi " + a + ", Your age is " + b + " Birth: " + d);
    c(res);
}
greet(names, age, (c) => {
    console.log(c);
}, birth);
function never() {
    while (true) { }
}
