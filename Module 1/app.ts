console.log("Hello World")

//Defaults to any type unless otherwise specfied
function add(n1:number,n2:number, flg:boolean,phrase:string) {

   let result= n1+n2
    if(flg){
        return phrase+" "+ result
    }else{
        return 0
    }

}

const num =5.3; //number type is both double and int
let numberthing: number = 4 //explicitly saying what type it is
let show = true
let phrase= "WORDDD UPPP"
const result =add(5,6,show,phrase)
const result2 =add(num,num,show,phrase)


console.log(result)
console.log(result2)