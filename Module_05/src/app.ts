console.log("Hello World")

abstract class Department{
    static yearJoined =2021
    protected employees:string[]=[];
    // Shortcut for initalization
    // Readonly val
    constructor(private readonly id: number, private name:string){}

   abstract describe(this: Department):void;

    static createEmployee(name: string){
        return {name: name}
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
    describe(): void {
        console.log("IT Department: "+ this.employees.length);
    }
    constructor(id: number, private admins: string[]){
        super(id,'IT');
    }
}

class AccountsDepartment extends Department{

    private static instance: AccountsDepartment;
    describe(): void {
        console.log("Accounting Department: "+ this.employees.length);;
    }
    private lastReport;

    get MostRecentReport(){
        if(this.lastReport){
            return this.lastReport
        }else{
            throw new Error('No Report found')
        }
        
    }

set MostRecentReport(report: string){
    if(!report){
        throw new Error('No Report found')
    }
    this.addReports(report)
}

    private constructor(id: number, private reports: string[]){
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

    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new AccountsDepartment(1,[])
        return this.instance;
    }
}

//const department =new Department(1,"Development")
const ITdepartment =new ITDepartment(1,["Christian"])
//const Acctdepartment =new AccountsDepartment(1,[])
//singleton pattern
const Acctdepartment = AccountsDepartment.getInstance();
const year= Department.yearJoined
const emp1 = Department.createEmployee("Max")

//department.describe();
//department.addEmployee("Christian")
//department.printEmployeeInfo();

ITdepartment.addEmployee("Chris")
ITdepartment.printEmployeeInfo();

Acctdepartment.addReports("Report")
Acctdepartment.printReports();

//When calling getter no (), 

Acctdepartment.MostRecentReport = "Hello World"
console.log(">>>>>>"+ Acctdepartment.MostRecentReport)