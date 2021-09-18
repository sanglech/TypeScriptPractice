"use strict";
//ES6 example
console.log("YOYO");
var userName = "Christian";
// let is only avaialbe in scope and below scopes (not higher)
var num = 5;
// var is global and functional scope
var thing = 6;
function add(a, b) {
    var result = a + b;
    return result;
}
var addNum = function (a, b) {
    return a + b;
};
// if only one line (implicit return)
var addNumOneLine = function (a, b) { return a + b; };
// note: union type, either type 1 or type 2
var longPrintOutput = function (output) {
    console.log(output);
};
var printOutput = function (output) { return console.log(output); };
var sum = add(5, 6);
var arrowSum = addNum(4, 5);
console.log("Hi, " + userName + " the value is " + sum);
//# sourceMappingURL=app.js.map