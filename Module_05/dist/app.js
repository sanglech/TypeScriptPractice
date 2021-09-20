"use strict";
console.log("Hello World");
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log("Employees length: " + this.employees.length);
        console.log("Employees: " + this.employees);
    };
    return Department;
}());
var department = new Department("Development");
department.describe();
department.addEmployee("Christian");
department.printEmployeeInfo();
//# sourceMappingURL=app.js.map