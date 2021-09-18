"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// if no num is provided for b default to 1
// DEFAULT VALUES MUST BE LAST
var addNumOneLine = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
// note: union type, either type 1 or type 2
var longPrintOutput = function (output) {
    console.log(output);
};
var printOutput = function (output) { return console.log(output); };
var sum = add(5, 6);
var arrowSum = addNum(4, 5);
console.log("Hi, " + userName + " the value is " + sum);
console.log("The value is " + addNumOneLine(7));
var hobbies = ["cards", "sports", "things"];
var activeHobby = ["running"];
//note using push ccan use on const vals
// spread operator making list out of array (can also be used on objects)
activeHobby.push.apply(activeHobby, hobbies);
var person = {
    "name": "Chris",
    "age": 29,
    "hobbies": activeHobby
};
var copiedPerson = __assign({}, person);
var referencedPerson = person;
// merge comma seperated values into an array
var addAnyNum = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    // reduce takes first value 0 in this case and returns it for each value in array/ param list
    return numbers.reduce(function (currentResult, currentValue) {
        return currentResult + currentValue;
    }, 0);
};
console.log("Adding all numbers " + addAnyNum(5, 5.7, 10));
//# sourceMappingURL=app.js.map