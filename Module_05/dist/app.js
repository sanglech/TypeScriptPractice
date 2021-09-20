"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountsDepartment = /** @class */ (function (_super) {
    __extends(AccountsDepartment, _super);
    function AccountsDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountsDepartment.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        else {
            this.employees.push(name);
        }
    };
    AccountsDepartment.prototype.addReports = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    AccountsDepartment.prototype.printReports = function () {
        console.log("Accounting: " + this.reports);
    };
    return AccountsDepartment;
}(Department));
var department = new Department(1, "Development");
var ITdepartment = new ITDepartment(1, ["Christian"]);
var Acctdepartment = new AccountsDepartment(1, []);
department.describe();
department.addEmployee("Christian");
department.printEmployeeInfo();
ITdepartment.addEmployee("Chris");
ITdepartment.printEmployeeInfo();
Acctdepartment.addReports("Report");
Acctdepartment.printReports();
//# sourceMappingURL=app.js.map