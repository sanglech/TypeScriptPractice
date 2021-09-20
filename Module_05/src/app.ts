//interfaces example 

interface Person{
    name: string;
    age: number;

    greet(phrase: string):void;
}

let user1: Person;

user1={
    name: "Christian",
    age: 29,
    greet(phrase: string){
        console.log(phrase + this.name)
    }
}

user1.greet("Hello, ")