type Admin ={
    name: string;
    privalage: string[];
} // Defining a type Admin

type Employee ={
    name: string;
    startDate: Date;
}

//For object types adds them together
type ElevatedEmployee = Admin & Employee;

const e1 :ElevatedEmployee = {
    name: 'Christian',
    privalage: ['ADMIN','USER'],
    startDate: new Date()
}

const e2: Employee ={
    name: 'Trash',
    startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

// For union type, takes whats in common
type thin = Combinable & Numeric

function add(a: Combinable, b: Combinable){
    //typeguard using type of
    if(typeof a === 'string'||typeof b === 'string'){
        return a.toString() + b.toString
    }
    return a + b
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee){
    console.log("Name: "+ emp.name)
    //typeguard using in
    if('privalage' in emp){
        console.log("Priveleges: "+ emp.privalage)
    }
    else if('startDate' in emp){
        console.log("Start Date: "+ emp.startDate)
    }
}

printEmployeeInfo(e1)
printEmployeeInfo(e2)

class Car{
    drive(){
        console.log("Driving a car")
    }
}

class Truck{
    drive(){
        console.log("Driving a truck")
    }
    cargo(amount: number){
        console.log("Cargo: "+ amount)
    }
}

type Vechile = Car | Truck

const v1= new Car();
const v2 = new Truck();

function useVec(v: Vechile){
    //typeguard using instanceof
    if(v instanceof Truck){
        v.cargo(1000)
    }
    v.drive()

}

useVec(v1)
useVec(v2)