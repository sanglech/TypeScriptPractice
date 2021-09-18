//ES6 example
console.log("YOYO")
const userName = "Christian";

// let is only avaialbe in scope and below scopes (not higher)
let num = 5;

// var is global and functional scope
var thing = 6;

function add(a: number, b: number){
    let result = a + b;
    return result;
}

const addNum = (a: number, b: number) =>{
    return a + b;
}

// if only one line (implicit return)
// if no num is provided for b default to 1
// DEFAULT VALUES MUST BE LAST
const addNumOneLine = (a: number, b: number = 1) => a + b

// note: union type, either type 1 or type 2
const longPrintOutput = (output: string | number)=>{
    console.log(output);
}

const printOutput: (a: number | string)=> void = output =>console.log(output)


const sum=add(5,6)
const arrowSum = addNum(4,5)
console.log("Hi, "+ userName +" the value is "+sum);
console.log("The value is "+addNumOneLine(7));

const hobbies =["cards","sports","things"]
const activeHobby=["running"]

//note using push ccan use on const vals
// spread operator making list out of array (can also be used on objects)
activeHobby.push(...hobbies)

const person = {
    "personName": "Chris",
    "age" : 29,
    "hobbies": activeHobby
}

const copiedPerson = {...person}
const referencedPerson = person

// merge comma seperated values into an array
const addAnyNum = (...numbers:number[]) =>{
    // reduce takes first value 0 in this case and returns it for each value in array/ param list
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    },0);
}

console.log("Adding all numbers "+ addAnyNum(5,5.7,10))

// Array/Object Destructuring
//stores first, second elements in first two const and rest param takes the rest
const [hobby1,hobby2,...remainingHobbies] = hobbies

//pulls out elements by key name (has to be property names)
// save in new const  if you dont want default property name
const {personName : nickName ,age}= person

console.log(nickName + " The age "+ age)