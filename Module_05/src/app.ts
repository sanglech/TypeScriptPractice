console.log("Hello World")

class Department{
    protected employees:string[]=[];
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

class ITDepartment extends Department{
    constructor(id: number, private admins: string[]){
        super(id,'IT');
    }
}

class AccountsDepartment extends Department{
    private lastReport;
    constructor(id: number, private reports: string[]){
        super(id,'Accounting');
        this.lastReport=reports[0]
    }

    addEmployee(name: string){
        if(name==="Max"){
            return;
        }else{
            this.employees.push(name);
        }
    }

    addReports(report:string){
        this.reports.push(report);
        this.lastReport=report;
    }

    printReports(){
        console.log("Accounting: "+ this.reports)
    }
}

const department =new Department(1,"Development")
const ITdepartment =new ITDepartment(1,["Christian"])
const Acctdepartment =new AccountsDepartment(1,[])

department.describe();

department.addEmployee("Christian")
department.printEmployeeInfo();

ITdepartment.addEmployee("Chris")
ITdepartment.printEmployeeInfo();

Acctdepartment.addReports("Report")
Acctdepartment.printReports();