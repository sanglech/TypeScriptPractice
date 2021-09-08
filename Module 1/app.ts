//type alias (custom type)
type Conversion= string|string; //explicit defintiiin of what to expect using union type
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };


type User2 = { name: string; age: number };
     
function greet(user: User2) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User2, checkAge: number) {
  return checkAge > user.age;
}

//Unioion type operator
function combine(
    input1:number|string, 
    input2:number|string,
    resultConversion:Conversion) 
    {
    let result
     if(typeof input1 ==='number' && typeof input2 ==='number' ||resultConversion==='as-number'){
         result = +input1 +  +input2 //+converts variable to a number
        }else{
            result = input1.toString() + input2.toString()
        }
        return result
}

//literal types



 console.log("Adding two numbers "+ combine(1,2,'as-number'))
 console.log(combine("hello ", "world",'as-string'))
 console.log("Adding numbers " + combine("5 ", "4",'as-number'))