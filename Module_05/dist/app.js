"use strict";
//interfaces example 
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = age;
        this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + this.name);
    };
    return Person;
}());
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var user1;
user1 = new Person("Christian", 29);
user1.greet("Hello, ");
//# sourceMappingURL=app.js.map