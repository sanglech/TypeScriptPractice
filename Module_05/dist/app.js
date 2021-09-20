"use strict";
console.log("Hello World");
var Department = /** @class */ (function () {
    // Shortcut for initalization
    // Readonly val
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
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
var department = new Department(1, "Development");
department.describe();
department.addEmployee("Christian");
department.printEmployeeInfo();
//# sourceMappingURL=app.js.map