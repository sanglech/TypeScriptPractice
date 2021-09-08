function add(n1:number, n2 :number){
    return n1 +n2
}

function printResult(n1:number){
    console.log(n1)
}


function strange(n1:number, n2 :number):undefined{
    console.log(n1 +n2)
    return;
}

function addAndPrint(num1:number,num2:number,cb:(num:number)=>void){
const result = num1 +num2
cb(result) //doesnt care about return type(even if void, sees it as we can return but dont need to
//but does care about params
}


//Specific fucntion type
let combineValues:(a:number, b:number)=> number;


// Defining that variable can only accept a function call that takes 2 numbers as input
// and returns a number as a result
combineValues = add

addAndPrint(5,10,(result)=>{
    console.log(result)
})

//combineValues = printResult //error
