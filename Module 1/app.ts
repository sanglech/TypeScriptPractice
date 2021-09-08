// Unknown type
let userInput: unknown
let userName: string
let boo:any

userInput = 5
userInput = "hello"
//userName = userInput //Error message
//userName = boo //okay

//Need type check to use unknown
if(typeof userInput === "string"){
    userName=userInput
}

//function is return type never, actually doesnt return crashes the script
// functions that doesnt return throw error, infinite loop
function generateErrorMessage(message: string, code:number):never{
    throw {message: message, errorCode: code}
}

const result=generateErrorMessage("an error occured",500)
console.log(result)