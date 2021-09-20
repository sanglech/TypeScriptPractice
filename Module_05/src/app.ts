console.log("Hello World")

class Department{
    private employees:string[]=[];
    // Shortcut for initalization
    // Readonly val
    constructor(private readonly id: number, private name:string){
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

const department =new Department(1,"Development")

department.describe();

department.addEmployee("Christian")
department.printEmployeeInfo();

