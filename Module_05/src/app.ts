//interfaces example 

interface Named{
    // cant use private, public or protected
    readonly name: string;
    nickName?: string;
}

interface Greetable extends Named{
    greet(phrase: string):void;
}

class Person implements Greetable{
    name: string
    constructor(name: string, private age: number){
        this.name=name;
    }
    greet(phrase: string): void {
        console.log(phrase+ this.name);
    }
    
}
// type AddFn = (a: number, b number) => number;
interface addFn{
    (a:number,b:number): number;
}

let add : addFn;
add = (n1:number,n2:number) => {
    return n1 +n2;
}

let user1: Greetable;
user1= new Person("Christian",29)

user1.greet("Hello, ")