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
const addNumOneLine = (a: number, b: number) => a + b

// note: union type, either type 1 or type 2
const longPrintOutput = (output: string | number)=>{
    console.log(output);
}

const printOutput: (a: number | string)=> void = output =>console.log(output)


const sum=add(5,6)
const arrowSum = addNum(4,5)
console.log("Hi, "+ userName +" the value is "+sum);
