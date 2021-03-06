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

//function overloading in typescript
function add(a: number, b: number):number
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


//discriminated union of
interface Bird{
    type:'bird'
    flyingSpeed: number;
}

interface Horse{
    type:'horse'
    runningSPeed:number;
}

type Animal = Bird | Horse;

function AnimalMove(animal: Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed =animal.flyingSpeed
            break;
        case 'horse':
            speed =animal.runningSPeed
    }
    console.log("Moving with speed:" + speed)
}

AnimalMove({type:'bird',flyingSpeed:20})

//Typecasting

//option 1
const userInputElement= <HTMLInputElement>document.getElementById('message-ouput')!;
userInputElement.value ='Hi there!'

// option 2 (React)
const userInputElement2= document.getElementById('user-input');

if(userInputElement2){
    (userInputElement2 as HTMLInputElement).value ='Hi there!'
}


//Index properties
interface ErrorContainer{
    [prop:string]:string;
}

const errorBag: ErrorContainer= {
    1: "Not an email",
    "bag": "Get yo bag",
    "userName": "Must be capitol letter"
}


// Optional Chaining in typescript
const fetchedUserData ={
    id: "id",
    ping:"pong",
    job:{title:"CEO",description:"Hello World"}
}

// Accessing safely check if outer exists before going inner
console.log(fetchedUserData?.job?.description)

//Nullish colllacing
const storedata = fetchedUserData ?? "DEFAULT"