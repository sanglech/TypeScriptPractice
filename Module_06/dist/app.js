"use strict";
var e1 = {
    name: 'Christian',
    privalage: ['ADMIN', 'USER'],
    startDate: new Date()
};
var e2 = {
    name: 'Trash',
    startDate: new Date()
};
function add(a, b) {
    //typeguard using type of
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString;
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log("Name: " + emp.name);
    //typeguard using in
    if ('privalage' in emp) {
        console.log("Priveleges: " + emp.privalage);
    }
    else if ('startDate' in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInfo(e1);
printEmployeeInfo(e2);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck");
    };
    Truck.prototype.cargo = function (amount) {
        console.log("Cargo: " + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVec(v) {
    //typeguard using instanceof
    if (v instanceof Truck) {
        v.cargo(1000);
    }
    v.drive();
}
useVec(v1);
useVec(v2);
function AnimalMove(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSPeed;
    }
    console.log("Moving with speed:" + speed);
}
AnimalMove({ type: 'bird', flyingSpeed: 20 });
//Typecasting
//option 1
var userInputElement = document.getElementById('message-ouput');
userInputElement.value = 'Hi there!';
// option 2 (React)
var userInputElement2 = document.getElementById('user-input');
if (userInputElement2) {
    userInputElement2.value = 'Hi there!';
}
var errorBag = {
    1: "Not an email",
    "bag": "Get yo bag",
    "userName": "Must be capitol letter"
};
//# sourceMappingURL=app.js.map