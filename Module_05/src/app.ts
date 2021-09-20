console.log("Hello World")

class Department{
    private name : string;
    private employees:string[]=[];

    constructor(n:string){
        this.name=n;

    }

    describe(){
        console.log("Department: " + this.name)
    }

    addEmployee(employee:string){
        this.employees.push(employee)
    }

    printEmployeeInfo(){
        console.log("Employees length: " + this.employees.length);
        console.log("Employees: "+this.employees)
    }
}

const department =new Department("Development")

department.describe();

department.addEmployee("Christian")
department.printEmployeeInfo();

